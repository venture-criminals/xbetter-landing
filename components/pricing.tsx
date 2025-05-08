import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Check } from 'lucide-react'
import { SiGooglechrome } from '@icons-pack/react-simple-icons'

export default function Pricing() {
    return (
        <section className="py-16 md:py-32">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mx-auto max-w-2xl space-y-6 text-center">
                    <h1 className="text-center text-4xl font-semibold lg:text-5xl">Pricing almost as stupid as people on X</h1>
                    <p>I've no idea how to price this shit, so go ahead and grab it for free while you can.</p>
                </div>

                <div className="mt-8 flex justify-center md:mt-20">
                    {/* <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Free</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">$0 / mo</span>
                            <CardDescription className="text-sm">Per editor</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Basic Analytics Dashboard', '5GB Cloud Storage', 'Email and Chat Support'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button asChild variant="outline" className="w-full">
                                <Link href="">Get Started</Link>
                            </Button>
                        </CardFooter>
                    </Card> */}

                    <Card className="relative max-w-md">
                        {/* <span className="bg-linear-to-br/increasing absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-purple-400 to-amber-300 px-3 py-1 text-xs font-medium text-amber-950 ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">Best deal (duh)</span> */}
                        <span className="bg-linear-to-br absolute inset-x-0 -top-3 mx-auto flex h-6 w-fit items-center rounded-full from-[#4C1D95] to-[#8B5CF6] px-3 py-1 text-xs font-medium text-white ring-1 ring-inset ring-white/20 ring-offset-1 ring-offset-gray-950/5">Best deal (duh)</span>

                        <div className="flex flex-col">
                            <CardHeader>
                                <CardTitle className="font-medium">Early Access</CardTitle>
                                <span className="my-3 block text-2xl font-semibold">Free</span>
                                <CardDescription className="text-sm">Until I change my mind</CardDescription>
                            </CardHeader>

                            <CardContent className="space-y-4 mb-10">
                                <hr className="border-dashed" />
                                <ul className="list-outside space-y-3 text-sm">
                                    {['10 Predefined filters', 'Hide Tweets you don\'t like' , 'Requires your own OpenAI API key', 'Official permission to follow me on X', 'Cool updates in the future'].map((item, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            <Check className="size-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>

                            <CardFooter className="mt-auto">
                                <Button asChild className="w-full">
                                    <Link 
                                        href="https://chromewebstore.google.com/detail/xbetter/hpdmpilcmnlblnfdkcoikgmjaopafjoa"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <SiGooglechrome className="size-5" />
                                        <span>Become the X Pimp for free</span>
                                    </Link>
                                </Button>
                            </CardFooter>
                        </div>
                    </Card>

                    {/* <Card className="flex flex-col">
                        <CardHeader>
                            <CardTitle className="font-medium">Startup</CardTitle>
                            <span className="my-3 block text-2xl font-semibold">$29 / mo</span>
                            <CardDescription className="text-sm">Per editor</CardDescription>
                        </CardHeader>

                        <CardContent className="space-y-4">
                            <hr className="border-dashed" />

                            <ul className="list-outside space-y-3 text-sm">
                                {['Everything in Pro Plan', '5GB Cloud Storage', 'Email and Chat Support'].map((item, index) => (
                                    <li key={index} className="flex items-center gap-2">
                                        <Check className="size-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </CardContent>

                        <CardFooter className="mt-auto">
                            <Button asChild variant="outline" className="w-full">
                                <Link href="">Get Started</Link>
                            </Button>
                        </CardFooter>
                    </Card> */}
                </div>
            </div>
        </section>
    )
}
