'use client'

import { Quicksand } from 'next/font/google'
import { FC } from 'react'
import { ButtonProps } from './types'
import styles from './button.module.scss'

const quicksand = Quicksand({ subsets: ['latin'] })

const Button: FC<ButtonProps> = ({ children, onClick, submit }) => {
    return (
        <button
            className={`${styles.button} ${quicksand.className}`}
            onClick={onClick}
            type={submit ? 'submit' : 'button'}
        >
            {children}
        </button>
    )
}

export default Button
