import React, { useState } from 'react'

import styles from '@/styles/app.module.scss'
import Radio from '@/assets/radio-button-unchecked-svgrepo-com.svg'
import yangjian from '@/assets/yangjian.png'
import shihao from '@/assets/shihao.jpeg'

export default function App() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <h1>Hello dsadas</h1>
            <span>count: {count}</span>
            <button className={styles.button} onClick={() => setCount(count + 1)}>+</button>
            <br />
            <img src={Radio} className={styles.img} alt="" />
            <img src={yangjian} className={styles.img} alt="" />
            <img src={shihao} className={styles.img} alt="" />
        </div>
    )
}
