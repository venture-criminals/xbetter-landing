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
}: TweetSliderProps) {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  // Modified tweet images array with both versions
  const tweetPairs = [
    { normal: '/tweet_images/randall_tweet.png', hidden: '/tweet_images/randall_tweet_hidden.png' },
    { normal: '/tweet_images/jacob_tweet.png', hidden: '/tweet_images/jacob_tweet_hidden.png' },
    { normal: '/tweet_images/merlin_tweet.png', hidden: '/tweet_images/merlin_tweet_hidden.png' },
    { normal: '/tweet_images/donald_tweet_1.png', hidden: '/tweet_images/donald_tweet_1_hidden.png' },
    { normal: '/tweet_images/dudu_tweet.png', hidden: '/tweet_images/dudu_tweet_hidden.png' },
    { normal: '/tweet_images/donald_tweet_2.png', hidden: '/tweet_images/donald_tweet_2_hidden.png' },
    { normal: '/tweet_images/chad_tweet.png', hidden: '/tweet_images/chad_tweet_hidden.png' },
    { normal: '/tweet_images/maddy_tweet.png', hidden: '/tweet_images/maddy_tweet_hidden.png' },
  ];

  useEffect(() => {
    let controls;
    const size = direction === 'horizontal' ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / currentSpeed;

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to);
      const transitionDuration = remainingDistance / currentSpeed;

      controls = animate(translation, [translation.get(), to], {
        // ease: [0.22, 1, 0.36, 1],
        ease: 'linear',
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: 'linear',
        duration: duration,
        repeat: Infinity,
        repeatType: 'loop',
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentSpeed,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        },
      }
    : {};

  return (
    <div className={cn('overflow-hidden relative', className)}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === 'horizontal'
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === 'horizontal' ? 'row' : 'column',
        }}
        ref={ref}
        {...hoverProps}
      >
        {[...tweetPairs, ...tweetPairs].map((pair, index) => (
          <motion.div
            key={`${showHidden ? 'hidden' : 'normal'}-${index}`}
            className="relative h-[100px] w-[650px] shrink-0 overflow-hidden rounded-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.3,
              ease: [0.22, 1, 0.36, 1],
              delay: index * 0.1,
            }}
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
        <div className="absolute left-[33%] top-0 h-full w-28 flex items-center justify-center z-10">
          <Image
            src={showHidden ? "/XBetter logo white bg app hidden.png" : "/XBetter logo white bg app.png"}
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
