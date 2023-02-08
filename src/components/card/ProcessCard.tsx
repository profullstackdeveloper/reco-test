import React from 'react';

interface PropTypes {
    title: string;
    content: string;
    imgUrl: string;
}

export default function ProcessCard({title, content, imgUrl}: PropTypes): JSX.Element {
    return (
        <div className='w-[291px] px-[12px] py-[18px] bg-white shadow-lg border border-[#0000001A]'>
            <div className='flex justify-between items-center'>
                <div className='text-[#323232] text-lg'>
                    {
                        title
                    }
                </div>
                <img src={imgUrl} alt="placeholder"></img>
            </div>
            <div className='text-[#666666] text-xs'>
                {
                    content
                }
            </div>
        </div>
    )
}