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
                <h2 className="mb-8 text-4xl font-bold md:mb-16 lg:text-5xl text-center">Shameless self-promotion</h2>
                
                {/* Jacob */}
                <div>
                    <h3 className="mb-6 text-lg font-medium text-center">My LLM put so much effort into creating this page, you've no idea. You could at least give me a follow as a thank you.</h3>
                    
                    {/* Profile picture in its own row - centered */}
                    <div className="border-t py-6 flex justify-center">
                        <a 
                            href={jacob[0].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity text-center"
                        >
                            <div className="flex flex-col items-center">
                                <div className="relative bg-background rounded-full border p-0.5 shadow shadow-zinc-950/5 overflow-hidden" style={{ width: '96px', height: '96px' }}>
                                    <img 
                                        className="absolute inset-0 w-full h-full rounded-full object-cover" 
                                        src={jacob[0].avatar} 
                                        alt={jacob[0].name} 
                                        loading="lazy" 
                                    />
                                </div>
                                <span className="mt-2 block text-sm font-medium">{jacob[0].name}</span>
                                <span className="text-muted-foreground block text-xs">{jacob[0].role}</span>
                            </div>
                        </a>
                    </div>
                    
                    {/* Social media links in one row */}
                    <div className="flex flex-wrap justify-center gap-6 py-4">
                        {jacob.slice(1).map((member, index) => (
                            <a 
                                href={member.link}
                                key={index}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="relative bg-background rounded-full border p-0.5 shadow shadow-zinc-950/5 overflow-hidden" style={{ width: '64px', height: '64px' }}>
                                        <img 
                                            className="absolute inset-0 w-full h-full rounded-full object-cover" 
                                            src={member.avatar} 
                                            alt={member.name} 
                                            loading="lazy" 
                                        />
                                    </div>
                                    <span className="mt-2 block text-sm text-center">{member.name}</span>
                                    <span className="text-muted-foreground block text-xs text-center">{member.role}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Merlin */}
                <div className="pt-12">
                    <h3 className="mb-6 text-lg font-medium text-center">Also follow Merlin, Merlin's an awesome gangster.</h3>
                    
                    {/* Profile picture in its own row - centered */}
                    <div className="border-t py-6 flex justify-center">
                        <a 
                            href={merlin[0].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:opacity-80 transition-opacity text-center"
                        >
                            <div className="flex flex-col items-center">
                                <div className="relative bg-background rounded-full border p-0.5 shadow shadow-zinc-950/5 overflow-hidden" style={{ width: '96px', height: '96px' }}>
                                    <img 
                                        className="absolute inset-0 w-full h-full rounded-full object-cover" 
                                        src={merlin[0].avatar} 
                                        alt={merlin[0].name} 
                                        loading="lazy" 
                                    />
                                </div>
                                <span className="mt-2 block text-sm font-medium">{merlin[0].name}</span>
                                <span className="text-muted-foreground block text-xs">{merlin[0].role}</span>
                            </div>
                        </a>
                    </div>
                    
                    {/* Social media links in one row */}
                    <div className="flex flex-wrap justify-center gap-6 py-4">
                        {merlin.slice(1).map((member, index) => (
                            <a 
                                href={member.link}
                                key={index}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:opacity-80 transition-opacity"
                            >
                                <div className="flex flex-col items-center">
                                    <div className="relative bg-background rounded-full border p-0.5 shadow shadow-zinc-950/5 overflow-hidden" style={{ width: '64px', height: '64px' }}>
                                        <img 
                                            className="absolute inset-0 w-full h-full rounded-full object-cover" 
                                            src={member.avatar} 
                                            alt={member.name} 
                                            loading="lazy" 
                                        />
                                    </div>
                                    <span className="mt-2 block text-sm text-center">{member.name}</span>
                                    <span className="text-muted-foreground block text-xs text-center">{member.role}</span>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
