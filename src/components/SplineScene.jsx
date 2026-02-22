import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

const SplineScene = () => {
    return (
        <div style={{ width: '100%', height: '100%', minHeight: '500px' }}>
            <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%', color: 'var(--text-light)' }}>Loading Deliciousness...</div>}>
                <Spline scene="https://prod.spline.design/G4E6iwPnWIJI-U5z/scene.splinecode" />
            </Suspense>
        </div>
    );
};

export default SplineScene;
