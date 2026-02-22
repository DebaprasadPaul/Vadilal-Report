import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';
import { Line, Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);

const FinancialDashboard = ({ reportData }) => {
    const { financials: data, valuation } = reportData;
    const isMobile = window.innerWidth <= 768;

    const commonOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top',
                labels: {
                    font: { family: 'Inter', size: isMobile ? 9 : 12 },
                    boxWidth: isMobile ? 8 : 12,
                    padding: isMobile ? 8 : 10
                }
            },
        },
        scales: {
            y: {
                grid: { color: 'rgba(0,0,0,0.05)' },
                ticks: { font: { size: isMobile ? 8 : 10 } }
            },
            x: {
                grid: { display: false },
                ticks: { font: { size: isMobile ? 8 : 10 } }
            },
        },
    };

    const revenueData = {
        labels: data.years,
        datasets: [
            {
                fill: true,
                label: 'Revenue (INR Cr)',
                data: data.revenue,
                borderColor: '#E60000',
                backgroundColor: 'rgba(230, 0, 0, 0.1)',
                tension: 0.4,
            },
        ],
    };

    const marginData = {
        labels: data.years,
        datasets: [
            {
                type: 'line',
                label: 'Gross %',
                data: data.grossMargin,
                borderColor: '#D4AF37',
                borderWidth: isMobile ? 2 : 3,
                pointStyle: 'circle',
                tension: 0.4,
            },
            {
                type: 'bar',
                label: 'EBITDA %',
                data: data.ebitdaMargin,
                backgroundColor: 'rgba(230, 0, 0, 0.7)',
                borderRadius: 4,
            },
        ],
    };

    const capexData = {
        labels: data.years.slice(0, 5),
        datasets: [
            {
                label: 'Capex',
                data: data.capex.slice(0, 5),
                backgroundColor: '#2D2D2D',
                borderRadius: 4,
            },
        ],
    };

    return (
        <section id="dashboard" className="container" style={{ overflowX: 'hidden' }}>
            <div style={{ textAlign: 'center', marginBottom: isMobile ? '2.5rem' : '4rem' }}>
                <h2 style={{ fontSize: isMobile ? '2.2rem' : '3rem', marginBottom: '0.8rem' }}>Financial Analysis</h2>
                <p style={{ color: 'var(--text-light)', maxWidth: '700px', margin: '0 auto', fontSize: isMobile ? '0.85rem' : '1rem' }}>
                    Institutional numbers defining Vadilal's turnaround.
                </p>
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: isMobile ? '1.2rem' : '2.5rem'
            }}>
                <div className="glass-card" style={{
                    height: isMobile ? '320px' : '420px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'default'
                }} onMouseEnter={e => !isMobile && (e.currentTarget.style.transform = 'translateY(-8px)')} onMouseLeave={e => !isMobile && (e.currentTarget.style.transform = 'translateY(0)')}>
                    <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.4rem' }}>Revenue Velocity</h3>
                    <div style={{ height: isMobile ? '240px' : '320px' }}>
                        <Line options={commonOptions} data={revenueData} />
                    </div>
                </div>

                <div className="glass-card" style={{
                    height: isMobile ? '320px' : '420px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }} onMouseEnter={e => !isMobile && (e.currentTarget.style.transform = 'translateY(-8px)')} onMouseLeave={e => !isMobile && (e.currentTarget.style.transform = 'translateY(0)')}>
                    <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.4rem' }}>Margin Trends</h3>
                    <div style={{ height: isMobile ? '240px' : '320px' }}>
                        <Bar options={commonOptions} data={marginData} />
                    </div>
                </div>

                <div className="glass-card" style={{
                    height: isMobile ? '320px' : '420px',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }} onMouseEnter={e => !isMobile && (e.currentTarget.style.transform = 'translateY(-8px)')} onMouseLeave={e => !isMobile && (e.currentTarget.style.transform = 'translateY(0)')}>
                    <h3 style={{ fontSize: isMobile ? '1.1rem' : '1.4rem' }}>Asset Reinvestment</h3>
                    <p style={{ fontSize: '0.7rem', color: 'var(--text-light)', marginBottom: '0.5rem' }}>Retail footprint expansion</p>
                    <div style={{ height: isMobile ? '220px' : '300px' }}>
                        <Bar options={commonOptions} data={capexData} />
                    </div>
                </div>

                <div className="glass-card" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    gap: isMobile ? '1.2rem' : '2rem',
                    background: 'linear-gradient(135deg, var(--vadilal-red) 0%, #C50000 100%)',
                    color: 'white',
                    height: isMobile ? 'auto' : '420px',
                    minHeight: isMobile ? '280px' : '420px',
                    boxShadow: '0 20px 40px rgba(230,0,0,0.2)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }} onMouseEnter={e => !isMobile && (e.currentTarget.style.transform = 'translateY(-8px)')} onMouseLeave={e => !isMobile && (e.currentTarget.style.transform = 'translateY(0)')}>
                    <h3 style={{ color: 'white', fontSize: isMobile ? '1.2rem' : '1.8rem', letterSpacing: '-0.5px' }}>Valuation Estimates</h3>
                    <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: isMobile ? '1.5rem' : '2rem' }}>
                        <div>
                            <p style={{ fontSize: '0.65rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px' }}>Intrinsic Value</p>
                            <p style={{ fontSize: isMobile ? '2rem' : '2.8rem', fontWeight: '900', color: 'var(--bg-paper)' }}>₹{valuation.targetPrice}</p>
                        </div>
                        <div>
                            <p style={{ fontSize: '0.65rem', opacity: 0.8, textTransform: 'uppercase', letterSpacing: '1px' }}>Implied Price</p>
                            <p style={{ fontSize: isMobile ? '2rem' : '2.8rem', fontWeight: '900', color: 'rgba(255,255,255,0.9)' }}>₹{valuation.currentPrice}</p>
                        </div>
                    </div>
                    <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.15)', borderRadius: '12px', backdropFilter: 'blur(5px)' }}>
                        <p style={{ fontSize: '0.8rem', lineHeight: '1.5', opacity: 0.9 }}>
                            <strong>Analyst Note:</strong> Includes 2025 "Restructuring Premium" settlement and forward-looking market dynamics.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinancialDashboard;
