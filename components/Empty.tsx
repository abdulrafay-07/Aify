import React from 'react';
import Image from 'next/image';

interface EmptyProps {
    label: string;
}

const Empty = ({
    label
}: EmptyProps) => {
    return (
        <div className="h-full p-20 flex flex-col items-center justify-center">
            <div className="relative">
                <Image
                    width={288}
                    height={288}
                    alt='Empty'
                    src='/empty.png'
                />
            </div>
            <p className="text-muted-foreground text-sm text-center">
                {label}
            </p>
        </div>
    )
}

export default Empty;