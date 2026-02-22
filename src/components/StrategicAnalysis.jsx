import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Globe, TrendingUp, Cpu, Scale, Leaf, CheckCircle, XCircle } from 'lucide-react';

const StrategicAnalysis = ({ data, id }) => {
    const { vrio, pestle, peerComparison, marketTension, sources } = data;
    const isMobile = window.innerWidth <= 768;

    return (
        <section className="container" id={id} style={{
            paddingTop: isMobile ? '4rem' : '8rem',
            paddingBottom: isMobile ? '4rem' : '8rem',
            overflowX: 'hidden'
        }}>

            {/* Market Tension Header */}
            <div style={{ marginBottom: isMobile ? '3rem' : '6rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                <h2 style={{ fontSize: isMobile ? '2.4rem' : '3.5rem', marginBottom: '1.5rem', letterSpacing: '-1px' }}>Strategic <span style={{ color: 'var(--text-dark)' }}>Battlefields</span></h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))', gap: '1.2rem', width: '100%', textAlign: 'left' }}>
                    {Object.entries(marketTension).map(([key, value]) => (
                        <div key={key} style={{ borderLeft: '4px solid var(--vadilal-red)', paddingLeft: '1.2rem', background: 'rgba(230,0,0,0.02)', padding: '1.2rem', borderRadius: '0 12px 12px 0' }}>
                            <h4 style={{ textTransform: 'uppercase', fontSize: '0.65rem', color: 'var(--text-light)', marginBottom: '0.4rem', letterSpacing: '0.5px' }}>{key} Tension</h4>
                            <p style={{ fontSize: '0.85rem', fontWeight: '600', lineHeight: '1.4' }}>{value}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(320px, 100%), 1fr))', gap: isMobile ? '2rem' : '4rem', marginBottom: '5rem', alignItems: 'start' }}>
                {/* VRIO Matrix */}
                <div className="glass-card" style={{ height: '100%', display: 'flex', flexDirection: 'column', padding: isMobile ? '1rem' : '2rem' }}>
                    <h3 style={{ marginBottom: '0.8rem', fontSize: isMobile ? '1.4rem' : '2rem' }}>VRIO Matrix</h3>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-light)', marginBottom: '1.5rem', fontWeight: '500' }}>Competitive advantage verification.</p>
                    <div style={{
                        margin: isMobile ? '0 -1rem' : '0',
                        padding: isMobile ? '0 1rem' : '0',
                        overflowX: 'auto',
                        WebkitOverflowScrolling: 'touch'
                    }}>
                        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.7rem', minWidth: '400px' }}>
                            <thead>
                                <tr style={{ borderBottom: '2px solid rgba(0,0,0,0.05)' }}>
                                    <th style={{ textAlign: 'left', padding: '0.8rem' }}>Resource</th>
                                    <th style={{ padding: '0.8rem' }}>V</th>
                                    <th style={{ padding: '0.8rem' }}>R</th>
                                    <th style={{ padding: '0.8rem' }}>I</th>
                                    <th style={{ padding: '0.8rem' }}>O</th>
                                    <th style={{ textAlign: 'right', padding: '0.8rem' }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {vrio.map((item, idx) => (
                                    <tr key={idx} style={{ borderBottom: '1px solid rgba(0,0,0,0.03)' }}>
                                        <td style={{ padding: '0.8rem', fontWeight: '700' }}>{item.resource}</td>
                                        <td style={{ textAlign: 'center' }}>{item.v ? <CheckCircle size={14} color="var(--vadilal-red)" /> : <XCircle size={14} color="#ddd" />}</td>
                                        <td style={{ textAlign: 'center' }}>{item.r ? <CheckCircle size={14} color="var(--vadilal-red)" /> : <XCircle size={14} color="#ddd" />}</td>
                                        <td style={{ textAlign: 'center' }}>{item.i ? <CheckCircle size={14} color="var(--vadilal-red)" /> : <XCircle size={14} color="#ddd" />}</td>
                                        <td style={{ textAlign: 'center' }}>{item.o ? <CheckCircle size={14} color="var(--vadilal-red)" /> : <XCircle size={14} color="#ddd" />}</td>
                                        <td style={{ textAlign: 'right', fontWeight: '800', fontSize: '0.6rem', textTransform: 'uppercase', color: item.status.includes('Sustained') ? 'var(--vadilal-red)' : 'var(--text-light)' }}>{item.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* PESTLE Analysis */}
                <div>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: isMobile ? '1.4rem' : '2rem' }}>PESTLE Analysis</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)', gap: '1rem' }}>
                        {[
                            { icon: <Shield size={16} />, title: "Political", text: pestle.political },
                            { icon: <Globe size={16} />, title: "Economic", text: pestle.economic },
                            { icon: <TrendingUp size={16} />, title: "Social", text: pestle.social },
                            { icon: <Cpu size={16} />, title: "Technological", text: pestle.technological },
                            { icon: <Scale size={16} />, title: "Legal", text: pestle.legal },
                            { icon: <Leaf size={16} />, title: "Environmental", text: pestle.environmental },
                        ].map((p, i) => (
                            <div key={i} className="glass-card" style={{ padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.3rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', color: 'var(--vadilal-red)' }}>
                                    {p.icon}
                                    <span style={{ fontWeight: '800', fontSize: '0.65rem', textTransform: 'uppercase', letterSpacing: '0.3px' }}>{p.title}</span>
                                </div>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-dark)', fontWeight: '500', lineHeight: '1.4' }}>{p.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Peer Comparison Section */}
            <div className="glass-card" style={{ padding: isMobile ? '1.2rem' : '4rem', marginBottom: '5rem' }}>
                <h3 style={{ marginBottom: '2rem', textAlign: 'center', fontSize: isMobile ? '1.6rem' : '2.5rem' }}>Competitive Benchmarking</h3>
                <div style={{
                    margin: isMobile ? '0 -1.2rem' : '0',
                    padding: isMobile ? '0 1.2rem' : '0',
                    overflowX: 'auto',
                    WebkitOverflowScrolling: 'touch'
                }}>
                    <div style={{ display: 'grid', gridTemplateColumns: 'minmax(140px, 1.5fr) 1fr 1fr 1.2fr', gap: '0', border: '1px solid rgba(0,0,0,0.05)', borderRadius: '15px', overflow: 'hidden', minWidth: '550px' }}>
                        <div style={{ fontWeight: '800', background: 'rgba(0,0,0,0.02)', padding: '0.8rem', borderBottom: '2px solid var(--vadilal-red)', fontSize: '0.6rem', textTransform: 'uppercase' }}>Strategic Player</div>
                        <div style={{ fontWeight: '800', background: 'rgba(0,0,0,0.02)', padding: '0.8rem', borderBottom: '2px solid var(--vadilal-red)', fontSize: '0.6rem', textTransform: 'uppercase', textAlign: 'center' }}>MCap Equiv.</div>
                        <div style={{ fontWeight: '800', background: 'rgba(0,0,0,0.02)', padding: '0.8rem', borderBottom: '2px solid var(--vadilal-red)', fontSize: '0.6rem', textTransform: 'uppercase', textAlign: 'center' }}>Growth</div>
                        <div style={{ fontWeight: '800', background: 'rgba(0,0,0,0.02)', padding: '0.8rem', borderBottom: '2px solid var(--vadilal-red)', fontSize: '0.6rem', textTransform: 'uppercase', textAlign: 'right' }}>Segment</div>

                        {peerComparison.map((p, idx) => (
                            <React.Fragment key={idx}>
                                <div style={{ padding: '0.8rem', borderBottom: '1px solid rgba(0,0,0,0.03)', background: p.name === 'Vadilal' ? 'rgba(230,0,0,0.03)' : 'transparent', fontWeight: '700', fontSize: '0.8rem' }}>
                                    {p.name}
                                </div>
                                <div style={{ padding: '0.8rem', borderBottom: '1px solid rgba(0,0,0,0.03)', textAlign: 'center', fontWeight: '600', fontSize: '0.8rem' }}>{p.mktCap}</div>
                                <div style={{ padding: '0.8rem', borderBottom: '1px solid rgba(0,0,0,0.03)', textAlign: 'center', fontWeight: '600', fontSize: '0.8rem' }}>{p.revGrowth}</div>
                                <div style={{ padding: '0.8rem', borderBottom: '1px solid rgba(0,0,0,0.03)', textAlign: 'right', fontSize: '0.75rem', fontWeight: '500', color: 'var(--text-light)' }}>{p.segment}</div>
                            </React.Fragment>
                        ))}
                    </div>
                </div>

                {/* Peer Sources Footer */}
                <div style={{ marginTop: '1.5rem', display: 'flex', gap: '0.8rem', flexWrap: 'wrap', justifyContent: 'center', opacity: 0.5 }}>
                    {sources.filter(s => s.includes('*')).map(s => (
                        <span key={s} style={{ fontSize: '0.55rem', fontWeight: '600' }}>{s}</span>
                    ))}
                </div>
            </div>

            {/* Research Methodology */}
            <div style={{ borderTop: '2px solid rgba(0,0,0,0.05)', paddingTop: '3rem', textAlign: 'center' }}>
                <p style={{ fontSize: '0.65rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1.2rem', fontWeight: '800' }}>Institutional Partners</p>
                <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: isMobile ? '1.2rem' : '3rem' }}>
                    {sources.filter(s => !s.includes('*')).map(s => (
                        <span key={s} style={{ fontSize: isMobile ? '0.75rem' : '0.9rem', fontWeight: '700', color: 'var(--text-dark)', opacity: 0.8 }}>{s}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StrategicAnalysis;
