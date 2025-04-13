'use client';
import { cn } from '@/lib/utils';
import { useMotionValue, animate, motion } from 'motion/react';
import { useState, useEffect } from 'react';
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
  logoPosition?: number; // percentage from left (0-100)
  startPosition?: 'visible' | 'hidden';
};

export function TweetSlider({
  gap = 16,
  speed = 40,
  speedOnHover = 20,
  direction = 'horizontal',
  reverse = false,
  className,
  showHidden = false,
  showLogo = true,
  logoPosition = 33, // default to 33%
  startPosition = 'visible',
}: TweetSliderProps) {
  const [ref, { width }] = useMeasure();
  const translation = useMotionValue(0);

  // Modified tweet images array with both versions
  const tweetPairs = [
    { normal: '/tweet_images/randall_tweet.png', hidden:  '/tweet_images/chad_tweet_hidden.png'},
    { normal: '/tweet_images/jacob_tweet.png', hidden: '/tweet_images/maddy_tweet_hidden.png'},
    { normal: '/tweet_images/merlin_tweet.png', hidden:  '/tweet_images/randall_tweet_hidden.png'},
    { normal: '/tweet_images/donald_tweet_1.png', hidden:  '/tweet_images/jacob_tweet_hidden.png'},
    { normal: '/tweet_images/dudu_tweet.png', hidden:  '/tweet_images/merlin_tweet_hidden.png'},
    { normal: '/tweet_images/donald_tweet_2.png', hidden:  '/tweet_images/donald_tweet_1_hidden.png'},
    { normal: '/tweet_images/chad_tweet.png', hidden:  '/tweet_images/dudu_tweet_hidden.png'},
    { normal: '/tweet_images/maddy_tweet.png', hidden:  '/tweet_images/donald_tweet_2_hidden.png'},
    

  ];

  useEffect(() => {
    let controls;
    const tweetWidth = 650; // Width of a single tweet
    const totalWidth = (tweetPairs.length * tweetWidth) + ((tweetPairs.length - 1) * gap);
    
    // Both sliders should start from the same relative position
    const from = 0;
    const to = -(totalWidth + gap);
    
    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / speed;

    controls = animate(translation, [from, to], {
      ease: 'linear',
      duration: duration,
      repeat: Infinity,
      repeatType: 'loop',
      onRepeat: () => {
        translation.set(from);
      },
    });

    return controls?.stop;
  }, [translation, speed, gap]);

  // Calculate offset based on startPosition
  const offset = startPosition === 'hidden' ? -650 : 0;

  return (
    <div className={cn('overflow-hidden relative', className)}>
      <motion.div
        className="flex w-max"
        style={{
          x: translation,
          gap: `${gap}px`,
          flexDirection: 'row',
          transform: `translateX(${offset}px)`,
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
