import React from 'react'

const Button = ({ title, id, containerClass, leftIcon, rightIcon }) => {
    return (
        <button id={id} className={`group overflow-hidden relative z-10 w-fit cursor-pointer rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}>
            {leftIcon}

            <span className='relative  overflow-hidden inline-flex font-general text-xs uppercase'>
                {title}
            </span>

            {rightIcon}
        </button>

    )
}

export default Button