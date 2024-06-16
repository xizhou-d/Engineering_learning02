import React, { useState, lazy, Suspense } from 'react'

import styles from '@/styles/app.module.scss'
import Radio from '@/assets/radio-button-unchecked-svgrepo-com.svg'
import yangjian from '@/assets/yangjian.png'
import shihao from '@/assets/shihao.jpeg'
import Loading from '@/components/Loading'

const About = lazy(() => delay(import('@/components/About.tsx'), 2000))

export default function App() {
    const [count, setCount] = useState(0)
    const [visible, setVisible] = useState(false)
    return (
        <div>
            <h1>Hello dsadas</h1>
            <span>count: {count}</span>
            <button className={styles.button} onClick={() => setCount(count + 1)}>+</button>
            <br />
            <img src={Radio} className={styles.img} alt="" />
            <img src={yangjian} className={styles.img} alt="" />
            <img src={shihao} className={styles.img} alt="" />
            <br />
            <button
                className={styles.button}
                onClick={() => setVisible(!visible)}
            >show about</button>

            {
                visible && <Suspense fallback={<Loading />}>
                    <About />
                </Suspense>
            }
        </div>
    )
}

// 延迟函数
async function delay(promise: Promise<any>, delay: number) {
    return new Promise(resolve => {
        setTimeout(resolve, delay)
    }).then(() => promise)
}
