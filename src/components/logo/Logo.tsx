import 'server-only'
import { Quicksand } from 'next/font/google'
import { FC } from 'react'
import styles from './logo.module.scss'

const quicksand = Quicksand({ subsets: ['latin'] })

const Logo: FC = () => {
    return (
        <div className={quicksand.className}>
            <h1 className={styles.logo}>DressEasy</h1>
        </div>
    )
}

export default Logo
