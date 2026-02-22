import React from 'react';
import { Quote } from 'lucide-react';

const Testimonial = () => {
    return (
        <section style={{ backgroundColor: '#fff' }}>
            <div className="container">
                <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', padding: '4rem 2rem', background: 'var(--cream-white)', border: '2px solid var(--vadilal-red)' }}>
                    <Quote size={48} color="var(--vadilal-red)" style={{ marginBottom: '1.5rem', opacity: 0.5 }} />
                    <h2 style={{ marginBottom: '1.5rem' }}>Why Trust My Analysis?</h2>
                    <p style={{ fontSize: '1.2rem', maxWidth: '800px', color: 'var(--text-dark)', fontStyle: 'italic', marginBottom: '2rem' }}>
                        "This report is the result of deep quantitative modeling and qualitative research. I specialize in identifying valuation gaps in companies undergoing structural changes. My goal is to provide institutional-grade research that is accessible, transparent, and driven by data. You can trust this analysis because it is built on first-principles thinking and exhaustive cross-referencing of regulatory filings and market trends."
                    </p>
                    <div style={{ fontWeight: 'bold' }}>
                        <p style={{ color: 'var(--vadilal-red)', fontSize: '1.5rem' }}>Debaprasad Paul</p>
                        <p style={{ color: 'var(--text-light)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Finance Specialist & Equity Researcher</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
