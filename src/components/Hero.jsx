import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import SplineScene from './SplineScene';

const Hero = ({ ticker, profile }) => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = windowWidth <= 768;

    return (
        <section className="container" id="hero" style={{
            minHeight: isMobile ? 'auto' : '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            paddingTop: isMobile ? '6rem' : '6rem',
            paddingBottom: isMobile ? '4rem' : '0',
            position: 'relative',
            zIndex: 1
        }}>
            <div style={{
                display: 'flex',
                flexDirection: isMobile ? 'column' : 'row',
                gap: isMobile ? '1.5rem' : '4rem',
                alignItems: 'center',
                width: '100%',
                textAlign: isMobile ? 'center' : 'left'
            }}>

                {/* Visual Element - Restored Interactivity for Desktop */}
                {!isMobile && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        style={{
                            height: '700px',
                            width: '100%',
                            position: 'relative',
                            order: 1,
                            pointerEvents: 'auto', // Restored for interactive desktop experience
                            cursor: 'grab'
                        }}
                    >
                        <SplineScene />
                    </motion.div>
                )}

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    style={{ flex: 1, width: isMobile ? '100%' : 'auto' }}
                >
                    {/* Company DNA Badges */}
                    <div style={{
                        display: 'flex',
                        gap: '0.6rem',
                        marginBottom: '1.2rem',
                        flexWrap: 'wrap',
                        justifyContent: isMobile ? 'center' : 'flex-start'
                    }}>
                        <span style={{ padding: '0.3rem 0.8rem', background: 'var(--vadilal-red)', color: 'white', borderRadius: '50px', fontSize: '0.65rem', fontWeight: 'bold' }}>
                            {ticker}
                        </span>
                        <span style={{ padding: '0.3rem 0.8rem', background: 'var(--soft-gold)', color: 'var(--gold)', borderRadius: '50px', fontSize: '0.65rem', fontWeight: 'bold', border: '1px solid var(--gold)' }}>
                            {profile.sector}
                        </span>
                    </div>

                    <h1 style={{
                        fontSize: isMobile ? '2.4rem' : '5.5rem',
                        lineHeight: '1',
                        marginBottom: '1.2rem',
                        letterSpacing: isMobile ? '-1px' : '-3px'
                    }}>
                        The <span style={{ color: 'var(--vadilal-red)' }}>Future</span> of <br />Frozen Indulgence.
                    </h1>

                    {/* Integrated DNA Info */}
                    <div style={{
                        display: 'flex',
                        gap: '1.5rem',
                        marginBottom: '2rem',
                        fontSize: isMobile ? '0.7rem' : '0.9rem',
                        color: 'var(--text-light)',
                        fontWeight: '700',
                        textTransform: 'uppercase',
                        letterSpacing: '1px',
                        justifyContent: isMobile ? 'center' : 'flex-start'
                    }}>
                        <span>{profile.basicIndustry.split(' ')[0]}</span>
                        <span style={{ color: 'var(--gold)' }}>•</span>
                        <span>{profile.industry.split(' ')[0]}</span>
                    </div>

                    <p style={{
                        fontSize: isMobile ? '0.95rem' : '1.3rem',
                        color: 'var(--text-light)',
                        marginBottom: isMobile ? '1.8rem' : '3rem',
                        maxWidth: isMobile ? '100%' : '550px',
                        fontWeight: '500',
                        lineHeight: '1.5',
                        margin: isMobile ? '0 auto 2rem auto' : '0 0 3rem 0'
                    }}>
                        Leading the Quick Commerce revolution through institutional transformation.
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        marginBottom: isMobile ? '2.5rem' : '4rem',
                        justifyContent: isMobile ? 'center' : 'flex-start'
                    }}>
                        <a href="#dashboard" className="btn btn-primary" style={{ padding: isMobile ? '0.7rem 1.2rem' : '1rem 2rem', fontSize: isMobile ? '0.8rem' : '1rem' }}>Data</a>
                        <a href="#strategic" className="btn btn-outline" style={{ padding: isMobile ? '0.7rem 1.2rem' : '1rem 2rem', fontSize: isMobile ? '0.8rem' : '1rem', border: '2px solid var(--vadilal-red)' }}>Strategic</a>
                    </div>

                    <div style={{
                        borderTop: '1px solid rgba(0,0,0,0.05)',
                        paddingTop: '1.5rem',
                        display: 'flex',
                        gap: isMobile ? '1.5rem' : '4rem',
                        justifyContent: isMobile ? 'center' : 'flex-start'
                    }}>
                        <div style={{ borderLeft: '3px solid var(--vadilal-red)', paddingLeft: '1rem', textAlign: 'left' }}>
                            <p style={{ fontSize: '0.6rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>MCAP</p>
                            <p style={{ fontSize: isMobile ? '1rem' : '1.6rem', fontWeight: '800' }}>{profile.mktCap}</p>
                        </div>
                        <div style={{ borderLeft: '3px solid var(--gold)', paddingLeft: '1rem', textAlign: 'left' }}>
                            <p style={{ fontSize: '0.6rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.2rem' }}>High</p>
                            <p style={{ fontSize: isMobile ? '1rem' : '1.6rem', fontWeight: '800' }}>{profile.highLow52.split(' / ')[0]}</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
