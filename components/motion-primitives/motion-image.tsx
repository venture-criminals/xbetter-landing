'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import type { ImageProps } from 'next/image'
import type { MotionProps } from 'motion/react'

const MotionImage = motion(Image)

type AnimatedImageProps = ImageProps & MotionProps

export function AnimatedImage(props: AnimatedImageProps) {
    return <MotionImage {...props} />
} 
