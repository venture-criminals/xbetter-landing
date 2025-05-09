import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeroHeader } from '@/components/hero8-header'
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur'
import { TextEffect } from '@/components/motion-primitives/text-effect'
import { SiGooglechrome } from '@icons-pack/react-simple-icons'
import { AnimatedImage } from '@/components/motion-primitives/motion-image'
import { ButtonEffect } from '@/components/motion-primitives/button-effect'
import { TweetSlider } from './motion-primitives/tweet-slider'
import FeaturesSection from './features-8'
import Pricing from './pricing'
import Team from './team'
import Footer from './footer'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                {/* Hero section */}
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
                                        <Link 
                                            href="https://chromewebstore.google.com/detail/xbetter/hpdmpilcmnlblnfdkcoikgmjaopafjoa"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <SiGooglechrome className="size-5" />
                                            <span className="text-nowrap">Get XBetter for Chrome</span>
                                        </Link>
                                    </ButtonEffect>
                                    <ButtonEffect
                                        variant='outline'
                                        asChild
                                        size="lg"
                                        className="px-5 text-base">
                                        <Link 
                                            href="https://x.com/VentureCriminal"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <span className="text-nowrap">Follow Venture Criminal</span>
                                        </Link>
                                    </ButtonEffect>
                                </div>
                            </div>
                            <AnimatedImage
                                initial={{ opacity: 0, filter: 'blur(40px)' }}
                                animate={{ opacity: 1, filter: 'blur(0px)' }}
                                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                                className="-z-10 mx-auto h-96 w-96 object-contain invert sm:h-[28rem] sm:w-[28rem] lg:ml-auto lg:absolute lg:-right-0 lg:-top-40 lg:order-last lg:h-max lg:w-3/8 lg:object-contain dark:mix-blend-lighten dark:invert-0"
                                src="/XBetter-hero2.png"
                                alt="Xbetter hero image"
                                height={400}
                                width={400}
                            />
                        </div>
                    </div>
                </section>


                {/* Tweets slider section */}
                <section className="bg-background pb-16 md:pb-32 mb-32">
                    <div className="group relative m-auto max-w-6xl px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="w-full text-center mb-4 md:max-w-44 md:text-end md:mb-0 md:border-r md:pr-6">
                                <p className="text-sm">Hiding the shittiest tweets</p>
                            </div>
                            <div className="relative py-6 w-full md:w-[calc(100%-11rem)]">
                                <div className="relative flex w-full">
                                    {/* First slider - hidden tweets */}
                                    <TweetSlider
                                        speedOnHover={80}
                                        speed={80}
                                        gap={10}
                                        className="w-[45%]"
                                        showHidden={true}
                                        showLogo={false}
                                        offsetMultiplier={1}
                                    />

                                    {/* Second slider - normal tweets */}
                                    <TweetSlider
                                        speedOnHover={80}
                                        speed={80}
                                        gap={10}
                                        className="w-[55%]"
                                        showHidden={false}
                                        showLogo={false}
                                        offsetMultiplier={0}
                                    />  
                                    
                                    {/* Logo and its blurs */}
                                    <div className="absolute top-0 h-full w-full">
                                        {/* Left blur */}
                                        <ProgressiveBlur
                                            className="pointer-events-none absolute left-[45%] top-0 h-full w-20 z-[5] -translate-x-full"
                                            direction="right"
                                            blurIntensity={1}
                                        />
                                        
                                        {/* Left gradient */}
                                        <div className="bg-gradient-to-l from-background absolute inset-y-0 left-[45%] w-20 -translate-x-full"></div>
                                        
                                        {/* Logo */}
                                        <div className="absolute top-0 h-full flex items-center justify-center z-10" 
                                            style={{ left: '45%', transform: 'translateX(-50%)' }}>
                                            <Image
                                                src="/XBetter-logo-white-bg-app.png"
                                                alt="XBetter Logo"
                                                width={80}
                                                height={80}
                                                className="object-contain"
                                            />
                                        </div>

                                        {/* Right gradient */}
                                        <div className="bg-gradient-to-r from-background absolute inset-y-0 left-[45%] w-20"></div>

                                        {/* Right blur */}
                                        <ProgressiveBlur
                                            className="pointer-events-none absolute left-[45%] top-0 h-full w-20 z-[5]"
                                            direction="left"
                                            blurIntensity={1}
                                        />
                                    </div>
                                </div>

                                {/* Edge gradients */}
                                <div className="bg-gradient-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-gradient-to-l from-background absolute inset-y-0 right-0 w-20"></div>

                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20 z-10"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Features section */}
                <section id="features" className="bg-background pb-4 md:pb-8">
                    <div className="text-center mb-1">
                        <h2 className="text-4xl font-bold md:text-5xl">
                            X can be awesome, actually.
                        </h2>
                    </div>
                    <FeaturesSection />
                </section>

                {/* Pricing section */}
                <section id="pricing" className="bg-background pb-2 md:pb-4">
                    <Pricing />
                </section>

                {/* About me section */}
                <section id="team" className="bg-background pb-2 md:pb-4">
                    <Team />
                </section>

                {/* Footer */}
                <footer className="bg-background pb-2 md:pb-4">
                    <Footer />
                </footer>

            </main>
        </>
    )
}
