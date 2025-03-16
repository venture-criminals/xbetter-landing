import Image from 'next/image'
import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/Xbetter logo white no bg.png"
            alt="XBetter Logo"
            width={28}
            height={28}
            className={cn('size-7', className)}
        />
    )
}

export const LogoStroke = ({ className }: { className?: string }) => {
    return (
        <Image
            src="/Xbetter logo white no bg.png"
            alt="XBetter Logo"
            width={28}
            height={28}
            className={cn('size-7', className)}
        />
    )
}
