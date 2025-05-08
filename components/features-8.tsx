import { Card, CardContent } from '@/components/ui/card'
import { Shield, Users } from 'lucide-react'

export default function FeaturesSection() {
    return (
        <section className="bg-gray-50 py-16 md:py-16 dark:bg-transparent">
            <div className="mx-auto max-w-5xl px-6">
                <div className="relative">
                    <div className="relative z-10 grid grid-cols-6 gap-3">
                        <Card className="relative col-span-full flex overflow-hidden lg:col-span-2 bg-black">
                            <CardContent className="relative m-auto size-fit pt-6">
                                <div className="relative flex h-24 w-56 items-center">
                                    <svg className="text-muted absolute inset-0 size-full" viewBox="0 0 254 104" fill="#4C1D95" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M112.891 97.7022C140.366 97.0802 171.004 94.6715 201.087 87.5116C210.43 85.2881 219.615 82.6412 228.284 78.2473C232.198 76.3179 235.905 73.9942 239.348 71.3124C241.85 69.2557 243.954 66.7571 245.555 63.9408C249.34 57.3235 248.281 50.5341 242.498 45.6109C239.033 42.7237 235.228 40.2703 231.169 38.3054C219.443 32.7209 207.141 28.4382 194.482 25.534C184.013 23.1927 173.358 21.7755 162.64 21.2989C161.376 21.3512 160.113 21.181 158.908 20.796C158.034 20.399 156.857 19.1682 156.962 18.4535C157.115 17.8927 157.381 17.3689 157.743 16.9139C158.104 16.4588 158.555 16.0821 159.067 15.8066C160.14 15.4683 161.274 15.3733 162.389 15.5286C179.805 15.3566 196.626 18.8373 212.998 24.462C220.978 27.2494 228.798 30.4747 236.423 34.1232C240.476 36.1159 244.202 38.7131 247.474 41.8258C254.342 48.2578 255.745 56.9397 251.841 65.4892C249.793 69.8582 246.736 73.6777 242.921 76.6327C236.224 82.0192 228.522 85.4602 220.502 88.2924C205.017 93.7847 188.964 96.9081 172.738 99.2109C153.442 101.949 133.993 103.478 114.506 103.79C91.1468 104.161 67.9334 102.97 45.1169 97.5831C36.0094 95.5616 27.2626 92.1655 19.1771 87.5116C13.839 84.5746 9.1557 80.5802 5.41318 75.7725C-0.54238 67.7259 -1.13794 59.1763 3.25594 50.2827C5.82447 45.3918 9.29572 41.0315 13.4863 37.4319C24.2989 27.5721 37.0438 20.9681 50.5431 15.7272C68.1451 8.8849 86.4883 5.1395 105.175 2.83669C129.045 0.0992292 153.151 0.134761 177.013 2.94256C197.672 5.23215 218.04 9.01724 237.588 16.3889C240.089 17.3418 242.498 18.5197 244.933 19.6446C246.627 20.4387 247.725 21.6695 246.997 23.615C246.455 25.1105 244.814 25.5605 242.63 24.5811C230.322 18.9961 217.233 16.1904 204.117 13.4376C188.761 10.3438 173.2 8.36665 157.558 7.52174C129.914 5.70776 102.154 8.06792 75.2124 14.5228C60.6177 17.8788 46.5758 23.2977 33.5102 30.6161C26.6595 34.3329 20.4123 39.0673 14.9818 44.658C12.9433 46.8071 11.1336 49.1622 9.58207 51.6855C4.87056 59.5336 5.61172 67.2494 11.9246 73.7608C15.2064 77.0494 18.8775 79.925 22.8564 82.3236C31.6176 87.7101 41.3848 90.5291 51.3902 92.5804C70.6068 96.5773 90.0219 97.7419 112.891 97.7022Z"
                                            fill = "#4C1D95"
                                        />
                                    </svg>
                                    <span className="mx-auto block w-fit text-5xl font-semibold">98.9%</span>
                                </div>
                                <h2 className="mt-6 text-center text-3xl font-semibold">Better</h2>
                                <p className="text-xl text-center">scrolling experience (I think)</p>
                            </CardContent>
                        </Card>
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 bg-black">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full border border-[#4C1D95] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#4C1D95]/30 dark:before:border-[#4C1D95]/20">
                                    <svg className="m-auto size-16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M9.5 2C7.01472 2 5 4.01472 5 6.5C5 6.58819 5.00276 6.67558 5.00817 6.76207C3.21871 7.57332 2 9.38753 2 11.5C2 13.6125 3.21871 15.4267 5.00817 16.2379C5.00276 16.3244 5 16.4118 5 16.5C5 18.9853 7.01472 21 9.5 21H14.5C16.9853 21 19 18.9853 19 16.5C19 16.4118 18.9972 16.3244 18.9918 16.2379C20.7813 15.4267 22 13.6125 22 11.5C22 9.38753 20.7813 7.57332 18.9918 6.76207C18.9972 6.67558 19 6.58819 19 6.5C19 4.01472 16.9853 2 14.5 2H9.5Z"
                                            stroke="white"
                                            strokeWidth="0.75"
                                        />
                                        <path
                                            d="M12 6V18M8 10V14M16 10V14"
                                            stroke="white"
                                            strokeWidth="0.75"
                                            strokeLinecap="round"
                                        />
                                        <path
                                            d="M12 6C13.1046 6 14 5.10457 14 4C14 2.89543 13.1046 2 12 2C10.8954 2 10 2.89543 10 4C10 5.10457 10.8954 6 12 6Z"
                                            fill="white"
                                        />
                                        <path
                                            d="M12 18C13.1046 18 14 18.8954 14 20C14 21.1046 13.1046 22 12 22C10.8954 22 10 21.1046 10 20C10 18.8954 10.8954 18 12 18Z"
                                            fill="white"
                                        />
                                    </svg>
                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="group-hover:text-secondary-950 text-lg font-medium transition dark:text-white">AI that&apos;s actually useful</h2>
                                    <p className="text-foreground">I was shocked too. But it turns out it can clean up your timeline like a champ.</p>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card className="relative col-span-full overflow-hidden sm:col-span-3 lg:col-span-2 bg-black">
                            <CardContent className="pt-6">
                                <div className="relative mx-auto flex aspect-square size-32 rounded-full">
                                <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="256pt" height="100pt" viewBox="0 0 256 256"
                                    preserveAspectRatio="xMidYMid meet"
                                    className="m-auto size-20">

                                <g transform="translate(0.000000,256.000000) scale(0.100000,-0.100000)"
                                    fill="#4C1D95" stroke="white" strokeWidth="60" strokeLinejoin="round" strokeLinecap="round">
                                    
                                    <path d="M620 2185 l0 -185 -185 0 -185 0 0 -220 0 -220 185 0 185 0 0 -185 0
                                    -185 220 0 220 0 0 185 0 185 180 0 180 0 0 220 0 220 -180 0 -180 0 0 185 0
                                    185 -220 0 -220 0 0 -185z"/>
                                    
                                    <path d="M1770 1480 l0 -140 -140 0 -140 0 0 -170 0 -170 140 0 140 0 0 -140
                                    0 -140 165 0 165 0 0 140 0 140 140 0 140 0 0 170 0 170 -140 0 -140 0 0 140
                                    0 140 -165 0 -165 0 0 -140z"/>
                                    
                                    <path d="M900 795 l0 -115 -115 0 -115 0 0 -140 0 -140 115 0 115 0 0 -115 0
                                    -115 140 0 140 0 0 115 0 115 115 0 115 0 0 140 0 140 -115 0 -115 0 0 115 0
                                    115 -140 0 -140 0 0 -115z"/>
                                
                                </g>
                                </svg>

                                </div>
                                <div className="relative z-10 mt-6 space-y-2 text-center">
                                    <h2 className="text-lg font-medium">Curing your brainrot</h2>
                                    <p className="text-foreground">We don&apos;t have any papers on that yet, but think about it. If X induces brainrot, only XBetter can cure it.</p>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3 bg-black">
                            <CardContent className="grid pt-6 sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border border-[#4C1D95] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#4C1D95]/30 dark:before:border-[#4C1D95]/20">
                                        <Shield className="m-auto size-5" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium transition">Protect yourself from shit</h2>
                                        <p className="text-foreground">Politics? Elon&apos;s random shitposts? Sex bots? Crypto scams? Now you can just turn them off.</p>
                                    </div>
                                </div>
                                <div className="rounded-tl-(--radius) relative -mb-6 -mr-6 mt-6 h-fit border-l border-t p-6 py-6 sm:ml-6">
                                    <div className="absolute left-3 top-2 flex gap-1">
                                        <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                        <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                        <span className="block size-2 rounded-full border dark:border-white/10 dark:bg-white/10"></span>
                                    </div>
                                    <svg className="w-full sm:w-[150%]" viewBox="0 0 366 231" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        {/* Background bars - normal tweets */}
                                        <rect x="96" y="110" width="270" height="27" rx="2" fill="#262626" />
                                        <rect x="96" y="190" width="270" height="27" rx="2" fill="#262626" />
                                        
                                        {/* Purple bars - hidden tweets */}
                                        <rect x="66" y="30" width="300" height="27" rx="2" fill="#4C1D95" opacity="1" stroke="white" strokeWidth="2"/>
                                        <rect x="66" y="70" width="300" height="27" rx="2" fill="#4C1D95" opacity="1" stroke="white" strokeWidth="2"/>
                                        <rect x="66" y="150" width="300" height="27" rx="2" fill="#4C1D95" opacity="1" stroke="white" strokeWidth="2"/>
                                    </svg>
                                </div>
                            </CardContent>
                        </Card>
                        <Card className="card variant-outlined relative col-span-full overflow-hidden lg:col-span-3 bg-black">
                            <CardContent className="grid h-full pt-6 sm:grid-cols-2">
                                <div className="relative z-10 flex flex-col justify-between space-y-12 lg:space-y-6">
                                    <div className="relative flex aspect-square size-12 rounded-full border border-[#4C1D95] before:absolute before:-inset-2 before:rounded-full before:border before:border-[#4C1D95]/30 dark:before:border-[#4C1D95]/20">
                                        <Users className="m-auto size-6" strokeWidth={1} />
                                    </div>
                                    <div className="space-y-2">
                                        <h2 className="text-lg font-medium transition">Only see the people you care about</h2>
                                        <p className="text-foreground">Because why should engagement baiters have the power to ruin your timeline?</p>
                                    </div>
                                </div>
                                <div className="before:bg-(--color-border) relative mt-6 before:absolute before:inset-0 before:mx-auto before:w-px sm:-my-6 sm:-mr-6">
                                    <div className="relative flex h-full flex-col justify-center space-y-6 py-6">
                                        <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                                            <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">Jacob</span>
                                            <div className="size-7">
                                                <img className="size-full rounded-full" src="/Jacob-pfp.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="relative ml-[calc(50%-1rem)] flex items-center gap-2">
                                            <div className="size-8">
                                                <img className="size-full rounded-full" src="https://avatars.githubusercontent.com/u/47919550?v=4" alt="" />
                                            </div>
                                            <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">M. Irung</span>
                                        </div>
                                        <div className="relative flex w-[calc(50%+0.875rem)] items-center justify-end gap-2">
                                            <span className="block h-fit rounded border px-2 py-1 text-xs shadow-sm">Merlin</span>
                                            <div className="size-7">
                                                <img className="size-full rounded-full" src="/Merlin-pfp.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
