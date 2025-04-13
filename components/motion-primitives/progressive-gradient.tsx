'use client';
import { cn } from '@/lib/utils';
import { HTMLMotionProps, motion } from 'motion/react';

export const GRADIENT_ANGLES = {
  top: 0,
  right: 90,
  bottom: 180,
  left: 270,
};

export type ProgressiveGradientProps = {
  direction?: keyof typeof GRADIENT_ANGLES;
  layers?: number;
  className?: string;
  startColor?: string;
  endColor?: string;
  opacity?: number;
} & HTMLMotionProps<'div'>;

export function ProgressiveGradient({
  direction = 'bottom',
  layers = 8,
  className,
  startColor = 'rgba(255, 255, 255, 0)',
  endColor = 'rgba(255, 255, 255, 1)',
  opacity = 0.15,
  ...props
}: ProgressiveGradientProps) {
  const numLayers = Math.max(layers, 2);
  const segmentSize = 1 / (layers + 1);

  return (
    <div className={cn('relative', className)}>
      {Array.from({ length: numLayers }).map((_, index) => {
        const angle = GRADIENT_ANGLES[direction];
        const gradientStops = [
          index * segmentSize,
          (index + 1) * segmentSize,
          (index + 2) * segmentSize,
          (index + 3) * segmentSize,
        ].map(
          (pos, posIndex) =>
            `${posIndex === 1 || posIndex === 2 ? endColor : startColor} ${pos * 100}%`
        );

        const gradient = `linear-gradient(${angle}deg, ${gradientStops.join(
          ', '
        )})`;

        return (
          <motion.div
            key={index}
            className='pointer-events-none absolute inset-0 rounded-[inherit]'
            style={{
              background: gradient,
              opacity: opacity * (index + 1),
            }}
            {...props}
          />
        );
      })}
    </div>
  );
} 
