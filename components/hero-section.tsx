import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HeroHeader } from '@/components/hero8-header'
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { SiGooglechrome } from '@icons-pack/react-simple-icons'
import { AnimatedImage } from '@/components/motion-primitives/motion-image'
import { ButtonEffect } from '@/components/motion-primitives/button-effect'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section>
                    <div className="pb-24 pt-12 md:pb-32 lg:pb-56 lg:pt-44">
                        <div className="relative mx-auto flex max-w-6xl flex-col px-6 lg:block">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:w-1/2 lg:text-left">
                                <TextEffect
                                    preset="fade-in-blur" // 'blur' | 'fade-in-blur' | 'scale' | 'fade' | 'slide';
                                    as="h1"
                                    className="mt-8 max-w-2xl text-balance text-5xl font-bold md:text-6xl lg:mt-16 xl:text-7xl"
                                    textGradient={{
                                        from: '#4C1D95',
                                        to: '#ffffff',
                                        direction: 'to top',
                                        range: {
                                            start: 32,
                                            end: 40
                                        }
                                    }}
                                >
                                    {"For You page\nis a bitch.\nMake it\nYOUR BITCH."}
                                </TextEffect>
                                <TextEffect
                                    preset="fade-in-blur"
                                    as="p" 
                                    className="mt-8 max-w-2xl text-pretty text-lg"
                                    speedReveal={3}
                                >
                                    XBetter curates your X feed by removing low quality posts based on your preferences. No more scrolling through a wall of engagement baits to get to tweets that truly deserve your attention.
                                </TextEffect>

                                <div className="mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <ButtonEffect
                                        variant='default'
                                        asChild
                                        size="lg"
                                        className="px-5 text-base">
                                        <Link href="https://chromewebstore.google.com/detail/xbetter/hpdmpilcmnlblnfdkcoikgmjaopafjoa">
                                            <SiGooglechrome className="size-5" />
                                            <span className="text-nowrap">Get XBetter for Chrome</span>
                                        </Link>
                                    </ButtonEffect>
                                    <ButtonEffect
                                        variant='ghost'
                                        asChild
                                        size="lg"
                                        className="px-5 text-base">
                                        <Link href="https://x.com/VentureCriminal">
                                            <span className="text-nowrap">Follow Venture Criminal</span>
                                        </Link>
                                    </ButtonEffect>
                                </div>
                            </div>
                            <AnimatedImage
                                initial={{ opacity: 0, filter: 'blur(40px)' }}
                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                className="-z-10 order-first ml-auto h-56 w-56 object-cover invert sm:h-96 lg:absolute lg:inset-0 lg:-right-0 lg:-top-40 lg:order-last lg:h-max lg:w-3/8 lg:object-contain dark:mix-blend-lighten dark:invert-0"
                                src="/XBetter hero.png"
                                alt="Xbetter hero image"
                                height={400}
                                width={400}
                            />
                        </div>
                    </div>
                </section>
                <section className="bg-background pb-16 md:pb-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="md:max-w-44 md:border-r md:pr-6">
                                <p className="text-end text-sm">Powering the best teams</p>
                            </div>
                            <div className="relative py-6 md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/nvidia.svg"
                                            alt="Nvidia Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/column.svg"
                                            alt="Column Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/github.svg"
                                            alt="GitHub Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/nike.svg"
                                            alt="Nike Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                            alt="Lemon Squeezy Logo"
                                            height="20"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-4 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/laravel.svg"
                                            alt="Laravel Logo"
                                            height="16"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-7 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/lilly.svg"
                                            alt="Lilly Logo"
                                            height="28"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-6 w-fit dark:invert"
                                            src="https://html.tailus.io/blocks/customers/openai.svg"
                                            alt="OpenAI Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
