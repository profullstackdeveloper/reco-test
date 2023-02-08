import React from 'react';
import Header from '../header';

interface PropTypes {
    children: React.ReactNode;
}

export default function Layout ({children}: PropTypes): JSX.Element {
    return (
        <div className='w-full h-full overflow-x-hidden flex'>
            <div className='w-[50px] h-full bg-header-background flex-shrink-0 flex-grow-0'>
                <Header></Header>
            </div>
            <div className='w-full h-full flex-shrink flex-grow overflow-auto'>
                {
                    children
                }
            </div>
        </div>
    )
}