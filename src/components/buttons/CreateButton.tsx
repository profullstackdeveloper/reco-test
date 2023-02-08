import React from 'react';

export default function CreateButton(): JSX.Element {
    return (
        <button className='px-[9.5px] py-[11px] bg-header-background text-light-grey text-xs leading-[14.63px] font-semibold uppercase flex rounded-md'>
            <svg className='mr-[5px]' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6.125" width="1.75" height="14" fill="#FAFAFA" />
                <rect x="14" y="6.125" width="1.75" height="14" transform="rotate(90 14 6.125)" fill="#FAFAFA" />
            </svg>
            create new
        </button>
    )
}