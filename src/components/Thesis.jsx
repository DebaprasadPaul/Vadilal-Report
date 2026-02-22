import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, TrendingUp, Users } from 'lucide-react';

const Thesis = ({ items }) => {
    const icons = [<ShieldCheck />, <TrendingUp />, <Users />];
    const isMobile = window.innerWidth <= 768;

    return (
        <section style={{ backgroundColor: 'rgba(230, 0, 0, 0.05)', borderRadius: isMobile ? '30px 0 30px 0' : '50px 0 50px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: isMobile ? '2rem' : '3rem' }}>
                    <h2 style={{ fontSize: isMobile ? '2rem' : '3rem' }}>Key Investment Thesis</h2>
                    <p style={{ color: 'var(--text-light)', fontSize: isMobile ? '0.9rem' : '1rem' }}>Why Vadilal is at a historic turning point</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))', gap: '2rem' }}>
                    {items.map((item, index) => (
                        <motion.div
                            key={index}
                            className="glass-card"
                            whileHover={!isMobile ? { scale: 1.05 } : {}}
                            transition={{ type: 'spring', stiffness: 300 }}
                        >
                            <div style={{ color: 'var(--vadilal-red)', marginBottom: '1rem' }}>
                                {React.cloneElement(icons[index % icons.length], { size: isMobile ? 32 : 40 })}
                            </div>
                            <h3 style={{ fontSize: isMobile ? '1.2rem' : '1.5rem' }}>{item.title}</h3>
                            <p style={{ color: 'var(--text-light)', marginTop: '0.5rem', fontSize: isMobile ? '0.85rem' : '1rem' }}>{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Thesis;
