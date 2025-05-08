const jacob = [
    {
        name: 'don Giacobbe',
        role: 'Mafia Boss (really)',
        avatar: '/jacob-pfp-full.jpg',
        link: 'https://x.com/venturecriminal',
    },
    {
        name: 'X',
        role: '@VentureCriminal',
        avatar: 'X-logo.png',
        link: 'https://x.com/venturecriminal',
    },
    {
        name: 'Instagram',
        role: '@venturecriminal',
        avatar: 'Instagram-logo.jpg',
        link: 'https://www.instagram.com/venturecriminal/',
    },
    {
        name: 'YouTube',
        role: '@VentureCriminal',
        avatar: 'YouTube-logo.jpg',
        link: 'https://www.youtube.com/@VentureCriminal',
    },
]

const merlin = [
    {
        name: 'Merlin',
        role: 'Mafia Capo & beatmaker',
        avatar: '/Merlin-pfp.png',
        link: 'https://x.com/merlindru',
    },
    {
        name: 'X',
        role: '@merlindru',
        avatar: 'X-logo.png',
        link: 'https://x.com/merlindru',
    },
    {
        name: 'Instagram',
        role: '@merlin.audio.wav',
        avatar: 'Instagram-logo.jpg',
        link: 'https://www.instagram.com/merlin.audio.wav/',
    }
]

export default function TeamSection() {
    return (
        <section className="py-12 md:py-32">
            <div className="mx-auto max-w-3xl px-8 lg:px-0">
                <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl">Shameless self-promotion</h2>
                
                {/* Jacob */}
                <div>
                    <h3 className="mb-6 text-lg font-medium">My LLM put so much effort into creating this page, you've no idea. You could at least give me a follow as a thank you.</h3>
                    <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {jacob.map((member, index) => (
                            <a 
                                href={member.link}
                                key={index}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <div>
                                    <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                        <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                    </div>
                                    <span className="mt-2 block text-sm">{member.name}</span>
                                    <span className="text-muted-foreground block text-xs">{member.role}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Merlin */}
                <div className="pt-12">
                    <h3 className="mb-6 text-lg font-medium">Also follow Merlin, Merlin's an awseome gangster.</h3>
                    <div className="grid grid-cols-2 gap-4 border-t py-6 md:grid-cols-4">
                        {merlin.map((member, index) => (
                            <a 
                                href={member.link}
                                key={index}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <div>
                                    <div className="bg-background size-20 rounded-full border p-0.5 shadow shadow-zinc-950/5">
                                        <img className="aspect-square rounded-full object-cover" src={member.avatar} alt={member.name} height="460" width="460" loading="lazy" />
                                    </div>
                                    <span className="mt-2 block text-sm">{member.name}</span>
                                    <span className="text-muted-foreground block text-xs">{member.role}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
