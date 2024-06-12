import React from 'react';
import Image from 'next/image';

const Loader = () => {
    return (
        <div className="h-full flex flex-col gap-y-4 items-center justify-center">
            <div className="relative animate-spin">
                <Image
                    width={40}
                    height={40}
                    alt='logo'
                    src='/logo.png'
                />
            </div>
            <p className="text-sm text-muted-foreground">
                Aify is thinking...
            </p>
        </div>
    )
}

export default Loader;