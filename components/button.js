import React from 'react';
import Image from "next/image";


export default function button({ Color, Text }) {
    return (
        <div>
            <button className={`rounded-full hover:-translate-y-1 duration-150 ease-in-out ${Color === 'white' ? 'text-emerald-500 bg-white' : Color == 'backdrop' ? ' bg-white bg-opacity-20 backdrop-blur-sm text-white' : 'text-white bg-emerald-500'}  text-xs text-center flex items-center justify-center space-x-2 font-medium uppercase py-3 px-6`}>
                <span>{Text}</span>
                <Image
                    width={15}
                    height={12}
                    src={Color == 'white' ? '/icons/arrow.svg' : '/icons/arrow-2.svg'}
                    alt="arrow"
                />
            </button>
        </div>
    )
}
