'use client'
import React from 'react';

import { Montserrat } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useAuth } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

import { cn } from '@/lib/utils';

const montserrat = Montserrat({
    weight: "600",
    subsets: ["latin"]
})

const LandingNavbar = () => {
    const { isSignedIn } = useAuth();

    return (
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center">
                <div className="relative mr-4">
                    <Image
                        width={32}
                        height={32}
                        alt='logo'
                        src="/logo.png"
                    />
                </div>
                <h1 className={cn("text-2xl text-white font-bold", montserrat.className)}>Aify</h1>
            </Link>
            <div className="flex items-center gap-x-2">
                <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                    <Button variant="outline" className="rounded-full">
                        Get Started
                    </Button>
                </Link>
            </div>
        </nav>
    )
}

export default LandingNavbar;