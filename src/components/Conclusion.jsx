import React from 'react';
import { ShieldCheck, Info, Target } from 'lucide-react';

const Conclusion = ({ verdict }) => {
    const isMobile = window.innerWidth <= 768;

    return (
        <section id="conclusion" className="container" style={{ padding: '6rem 0', background: 'var(--bg-paper)', borderRadius: '32px', marginBottom: '4rem', border: '1px solid rgba(0,0,0,0.05)' }}>
            <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(230, 0, 0, 0.05)', color: 'var(--vadilal-red)', padding: '0.5rem 1.2rem', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 'bold', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    <Target size={14} /> Final Research Verdict
                </div>

                <h2 style={{ fontSize: isMobile ? '2rem' : '3.5rem', marginBottom: '1.5rem', color: 'var(--text-dark)' }}>
                    Analysts <span style={{ color: 'var(--vadilal-red)' }}>Verdict</span>
                </h2>

                <div style={{
                    background: 'var(--vadilal-red)',
                    color: 'white',
                    padding: isMobile ? '1.5rem' : '2.5rem',
                    borderRadius: '24px',
                    marginBottom: '3rem',
                    boxShadow: '0 20px 40px rgba(230,0,0,0.15)',
                    display: 'flex',
                    flexDirection: isMobile ? 'column' : 'row',
                    alignItems: 'center',
                    gap: '2rem',
                    textAlign: isMobile ? 'center' : 'left'
                }}>
                    <div style={{
                        fontSize: isMobile ? '2.5rem' : '4rem',
                        fontWeight: '900',
                        lineHeight: '1',
                        borderRight: isMobile ? 'none' : '2px solid rgba(255,255,255,0.2)',
                        paddingRight: isMobile ? '0' : '2rem',
                        borderBottom: isMobile ? '2px solid rgba(255,255,255,0.2)' : 'none',
                        paddingBottom: isMobile ? '1rem' : '0'
                    }}>
                        {verdict.call}
                    </div>
                    <div>
                        <p style={{ fontSize: isMobile ? '1rem' : '1.2rem', fontWeight: '500', lineHeight: '1.6', opacity: 0.95 }}>
                            {verdict.rationale}
                        </p>
                        <div style={{ marginTop: '1rem', display: 'flex', gap: '1.5rem', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', opacity: 0.8 }}>
                            <span>Horizon: {verdict.horizon}</span>
                            <span>•</span>
                            <span>Status: Bullish Inflection</span>
                        </div>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: '2rem', textAlign: 'left' }}>
                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <div style={{ color: 'var(--vadilal-red)', marginBottom: '1rem' }}><Info size={24} /></div>
                        <h4 style={{ marginBottom: '0.8rem' }}>Research Objective</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: '1.6' }}>
                            {verdict.purpose}
                        </p>
                    </div>
                    <div className="glass-card" style={{ padding: '2rem' }}>
                        <div style={{ color: 'var(--gold)', marginBottom: '1rem' }}><ShieldCheck size={24} /></div>
                        <h4 style={{ marginBottom: '0.8rem' }}>Data Integrity</h4>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-light)', lineHeight: '1.6' }}>
                            This synthesis utilizes 5 years of audited financials, the 2025 IP settlement disclosures, and real-time Q-Commerce market penetration data to ensure institutional-grade accuracy.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Conclusion;
