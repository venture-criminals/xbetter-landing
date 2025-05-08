'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'motion/react';
import { useState, useEffect, useMemo } from 'react';
import useMeasure from 'react-use-measure';
import Image from 'next/image';

export type TweetSliderProps = {
  gap?: number;
  speed?: number;
  speedOnHover?: number;
  direction?: 'horizontal' | 'vertical';
  reverse?: boolean;
  className?: string;
  showHidden?: boolean;
  showLogo?: boolean;
  logoPosition?: number;
  offset?: number;
  offsetMultiplier?: number;
};

export function TweetSlider({
  gap = 16,
  speed = 40,
  speedOnHover = 20,
  direction = 'horizontal',
  reverse = false,
  className,
  showHidden = false,
  showLogo = false,
  logoPosition = 33,
  offset = 0,
  offsetMultiplier = 1,
}: TweetSliderProps) {
  const [ref, { width }] = useMeasure();
  const [windowWidth, setWindowWidth] = useState(0);
  
  // Get window width on client side
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };
      
      handleResize(); // Set initial value
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);
  
  // Calculate responsive offset
  const responsiveOffset = useMemo(() => {
    // Base offset values for different breakpoints
    const baseOffset = {
      xs: 140,  // For mobile (<640px)
      sm: 280,  // For small tablets (≥640px)
      md: 330,  // For tablets (≥768px)
      lg: 420,  // For desktops (≥1024px)
    };
    
    let calculatedOffset;
    if (windowWidth < 640) {
      calculatedOffset = baseOffset.xs;
    } else if (windowWidth < 768) {
      calculatedOffset = baseOffset.sm;
    } else if (windowWidth < 1024) {
      calculatedOffset = baseOffset.md;
    } else {
      calculatedOffset = baseOffset.lg;
    }
    
    return calculatedOffset * offsetMultiplier;
  }, [windowWidth, offsetMultiplier]);
  
  // Use the calculated offset instead of the fixed one
  const finalOffset = offset || responsiveOffset;
  
  const translation = useMotionValue(0);

  // Modified tweet images array with both versions
  const tweetPairs = [
    { normal: '/tweet_images/randall_tweet.png', hidden: '/tweet_images/randall_tweet_hidden.png'},
    { normal: '/tweet_images/jacob_tweet.png', hidden: '/tweet_images/jacob_tweet_hidden.png'},
    { normal: '/tweet_images/merlin_tweet.png', hidden: '/tweet_images/merlin_tweet_hidden.png'}, 
    { normal: '/tweet_images/donald_tweet_1.png', hidden: '/tweet_images/donald_tweet_1_hidden.png'},
    { normal: '/tweet_images/dudu_tweet.png', hidden: '/tweet_images/dudu_tweet_hidden.png'},
    { normal: '/tweet_images/donald_tweet_2.png', hidden: '/tweet_images/donald_tweet_2_hidden.png'},
    { normal: '/tweet_images/chad_tweet.png', hidden: '/tweet_images/chad_tweet_hidden.png'},
    { normal: '/tweet_images/maddy_tweet.png', hidden: '/tweet_images/maddy_tweet_hidden.png'},
  ];

  useEffect(() => {
    let controls;
    const tweetWidth = 650; // Width of a single tweet
    const totalWidth = (tweetPairs.length * tweetWidth) + ((tweetPairs.length - 1) * gap);
    
    // Calculate the starting position to ensure alignment
    const contentSize = totalWidth + gap;
    const from = finalOffset;
    const to = -(contentSize) + finalOffset;

    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / speed;

    controls = animate(translation, [from, to], {
      ease: 'linear',
      duration: duration,
      repeat: Infinity,
      repeatType: 'loop',
      onRepeat: () => {
        // Instantly reset to starting position
        translation.set(from);
      },
    });

    return controls?.stop;
  }, [translation, speed, gap, finalOffset]);

  return (
    <div className={cn('overflow-hidden relative', className)}>
      <motion.div
        className="flex w-max"
        style={{
          x: translation,
          gap: `${gap}px`,
          flexDirection: 'row',
        }}
        ref={ref}
      >
        {[...tweetPairs, ...tweetPairs, ...tweetPairs].map((pair, index) => (
          <motion.div
            key={`${showHidden ? 'hidden' : 'normal'}-${index}`}
            className="relative h-[100px] w-[650px] shrink-0 overflow-hidden rounded-xl"
          >
            <Image
              src={showHidden ? pair.hidden : pair.normal}
              alt={`Tweet ${index + 1}`}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        ))}
      </motion.div>
      {showLogo && (
        <div 
          className="absolute top-0 h-full w-28 flex items-center justify-center z-10"
          style={{ left: `${logoPosition}%` }}
        >
          <Image
            src={"/XBetter logo white bg app.png"}
            alt="XBetter Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
}
