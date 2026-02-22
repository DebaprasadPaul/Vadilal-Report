import React from 'react';
import { Download, Linkedin } from 'lucide-react';

const DownloadSection = ({ downloadLink }) => {
    return (
        <section id="download" style={{ padding: '6rem 0', background: 'var(--vadilal-red)', color: 'white' }}>
            <div className="container" style={{ textAlign: 'center' }}>
                <h2 style={{ color: 'white', marginBottom: '1rem' }}>Get the Full Research Report</h2>
                <p style={{ marginBottom: '3rem', opacity: 0.9, fontSize: '1.1rem' }}>
                    Download the exhaustive 30+ page initiation of coverage report with full DCF models and sector data.
                </p>

                <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                    <a
                        href={downloadLink}
                        download="Initiation of Coverage_ Vadilal Enterprises Limited.pdf"
                        className="btn btn-primary"
                        style={{ background: 'white', color: 'var(--vadilal-red)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                        <Download size={20} /> Download PDF Report
                    </a>

                    <a
                        href="https://www.linkedin.com/in/debaprasad-paul-56a2b8158/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline"
                        style={{ borderColor: 'white', color: 'white', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                        <Linkedin size={20} /> Connect on LinkedIn
                    </a>
                </div>

                <p style={{ marginTop: '4rem', fontSize: '0.8rem', opacity: 0.7 }}>
                    © 2026 Debaprasad Paul. All research derived from publicly available financial data and regulatory filings.
                </p>
            </div>
        </section>
    );
};

export default DownloadSection;
