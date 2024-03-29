import styles from './styles.module.sass'

import { useState, useRef, useEffect } from 'react'
import GSAP from 'gsap'
import Rive from 'rive-react'

const KandRive = '/kand.riv'

export default function Crew({ data }) {
    const [isActive, setIsActive] = useState(false)
    const riveRef = useRef(null)

    const toggle = () => setIsActive(!isActive)

    const boxRef = useRef(null)

    useEffect(() => {
        // we need to destroy? just with display: none?
        // we can storage the two consts in the same, makes sanse since both will stay paused?
        // const tl, tlReverse = GSAP.timeline({ paused: true })
        const tl = GSAP.timeline({ paused: true })
        const tlReverse = GSAP.timeline({ paused: true })

        tl.to(boxRef.current, { duration: 0.5, opacity: 1, scale: 1, height: '100%', ease: 'power2.out', pointerEvents: 'auto' }, '+=0.1')
        tlReverse.to(boxRef.current, { duration: 0.5, opacity: 0, scale: 0, height: '0', ease: 'power2.out', pointerEvents: 'none' })

        if (isActive) {
            tl.play()
        } else {
            tlReverse.play()
        }
    }, [isActive])

    return <div className={styles.crew}>
        <div className={styles.crew__button} onClick={toggle}>
            <div className={styles.crew__button__title}>Crew</div>
            <button className={styles.crew__button__icon}><div>+</div></button>
        </div>

        <div className={styles.crew__box} ref={boxRef}>
            <div className={styles.crew__box__button} onClick={toggle}>
                <h1 className={styles.crew__box__button__title}>Crew</h1>
                <h1 className={styles.crew__box__button__icon}><div> - </div></h1>
            </div>
            <div className={styles.crew__box__content}>
                <div className={styles.crew__box__list}>
                    {data.crew.map((crew, index) => {
                        if (crew.title) {
                            return (
                                <h3 key={index} onClick={() => { }} className={styles.crew__title}>
                                    {crew.title}
                                </h3>
                            )
                        } else if (crew.name) {
                            return (
                                <p key={index} onClick={() => { }} className={styles.crew__name}>
                                    {crew.name}
                                </p>
                            )
                        }
                    })}
                </div>
                <div ref={riveRef} className={styles.crew__box__icon}>
                    <Rive src={KandRive} artboard='Rive Team' />
                </div>
            </div>
        </div>
        <div className={styles.line} />
    </div>
}
