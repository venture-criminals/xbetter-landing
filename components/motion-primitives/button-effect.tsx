'use client'

import { cn } from '@/lib/utils'
import { motion, Variants } from 'motion/react'
import React from 'react'
import { Button } from '@/components/ui/button'
import type { ButtonProps } from '@/components/ui/button'

const defaultVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    filter: 'blur(40px)',
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  animate: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1]
    }
  },
  exit: {
    opacity: 0,
    y: 20,
    filter: 'blur(12px)',
    transition: {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1]
    }
  }
}

// item: {
//     hidden: { opacity: 0, y: 20, filter: 'blur(12px)' },
//     visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
//     exit: { opacity: 0, y: 20, filter: 'blur(12px)' },
//   },

export type ButtonEffectProps = ButtonProps & {
  variants?: Variants
  delay?: number
  onAnimationComplete?: () => void
  onAnimationStart?: () => void
}

const MotionButton = motion(Button) as any

export function ButtonEffect({
  children,
  variants = defaultVariants,
  className,
  delay = 0,
  onAnimationComplete,
  onAnimationStart,
  ...props
}: ButtonEffectProps) {
  return (
    <MotionButton
      initial="initial"
      animate="animate"
      exit="exit"
      variants={variants}
      className={cn('motion-safe:transition-none', className)}
      transition={{
        delay,
      }}
      onAnimationComplete={onAnimationComplete}
      onAnimationStart={onAnimationStart}
      {...props}
    >
      {children}
    </MotionButton>
  )
} 
