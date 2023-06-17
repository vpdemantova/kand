import styles from './Page.module.sass'

import classNames from 'classnames';
import Head from 'next/head';
import { forwardRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import Navigation from '../Navigation';
import RiveAnimation from '../RiveAnimation';

const Page = forwardRef(({
    children,
    className,
    metadata = {},
    navigation,
    showAnimation
}, ref) => {
    const router = useRouter();
    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        if (showAnimation) {
            setAnimationClass(styles.showMe); // Set class to show

            // Hide after 1.5 seconds
            const timeout = setTimeout(() => {
                setAnimationClass(styles.hide); // Set class to hide (fading out)
                // Dispatch an event here to notify that the animation is complete
                document.dispatchEvent(new CustomEvent('animationComplete'));
            }, 1000);

            return () => clearTimeout(timeout);
        }
    }, [showAnimation]);

    console.log(showAnimation);

    const {
        title = '',
        description = '',
        keywords = '',
        image = ''
    } = metadata;

    useEffect(() => {
        if (showAnimation) {
            document.body.classList.add('show');
        } else {
            document.body.classList.remove('show');
        }
    }, [showAnimation]);

    return (
        <>
            <Head>
                <title>{title}</title>

                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />

                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />
            </Head>


            <div className={classNames(styles.element, className)} ref={ref}>
                {router.pathname.startsWith('/project/') && (
                    <div className={`${styles.rive_container} rive-container ${showAnimation ? styles.show : ''}`}>
                        <RiveAnimation
                            className={`${styles.footer__icon} ${showAnimation ? styles.show : ''}`}
                            artboard='Rive Atomo'
                        />
                    </div>
                )}
                {router.pathname.startsWith('/about') && (
                    <div className={`${styles.rive_container} rive-container ${animationClass}`}>
                        <RiveAnimation
                            className={`${styles.about__rive} ${animationClass}`}
                            artboard='Rive Duo'
                        />
                    </div>
                )}
                <div className="top" />
                <div className="border" />
                <div className="bottom" />
                <div className="grain" />
                <Navigation navigationData={navigation} />

                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </>
    )
})

Page.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired,
    className: PropTypes.string,
    metadata: PropTypes.object,
    navigation: PropTypes.object,
};

export default Page;
