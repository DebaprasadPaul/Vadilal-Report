import React from 'react';

const Navbar = () => {
    const isMobile = window.innerWidth <= 768;

    return (
        <nav style={{
            padding: isMobile ? '0.8rem 0' : '1.2rem 0',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 100,
            background: 'rgba(255, 251, 240, 0.9)',
            backdropFilter: 'blur(10px)',
            borderBottom: '1px solid rgba(0,0,0,0.05)',
            boxShadow: '0 2px 20px rgba(0,0,0,0.02)'
        }}>
            <div className="container" style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: isMobile ? '0 1rem' : '0'
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: isMobile ? '0.6rem' : '1rem' }}>
                    {/* Branded Logo */}
                    <div style={{
                        width: isMobile ? '32px' : '42px',
                        height: isMobile ? '32px' : '42px',
                        background: 'linear-gradient(135deg, var(--vadilal-red) 0%, #C50000 100%)',
                        borderRadius: '8px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: '900',
                        fontSize: isMobile ? '1rem' : '1.4rem',
                        transform: 'rotate(-5deg)'
                    }}>
                        V
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{
                            fontFamily: 'Varela Round',
                            fontSize: isMobile ? '1.1rem' : '1.5rem',
                            fontWeight: 'bold',
                            color: 'var(--vadilal-red)',
                            lineHeight: '1'
                        }}>
                            Vadilal
                        </span>
                        <span style={{ fontSize: '0.55rem', fontWeight: 'bold', textTransform: 'uppercase', color: 'var(--text-light)', opacity: 0.7 }}>
                            Enterprises
                        </span>
                    </div>
                </div>

                <div style={{
                    display: 'flex',
                    gap: '1.2rem',
                    alignItems: 'center'
                }}>
                    {!isMobile && (
                        <>
                            <a href="#strategic" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Strategic</a>
                            <a href="#dashboard" style={{ textDecoration: 'none', color: 'var(--text-dark)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Financials</a>
                        </>
                    )}
                    <a href="#download" className="btn btn-primary" style={{ padding: isMobile ? '0.4rem 1rem' : '0.6rem 1.5rem', fontSize: isMobile ? '0.7rem' : '0.8rem', borderRadius: '50px' }}>
                        {isMobile ? 'Report' : 'Download Report'}
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
