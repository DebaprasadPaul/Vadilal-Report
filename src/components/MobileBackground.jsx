import React from 'react';
import { motion } from 'framer-motion';

const MobileBackground = () => {
    // Generate several floating scoops for the mobile background
    const scoops = [
        { id: 1, delay: 0, x: '10%', y: '20%', size: '100px' },
        { id: 2, delay: 2, x: '75%', y: '15%', size: '70px' },
        { id: 3, delay: 4, x: '35%', y: '70%', size: '90px' },
        { id: 4, delay: 1, x: '80%', y: '85%', size: '80px' },
        { id: 5, delay: 5, x: '8%', y: '80%', size: '60px' }
    ];

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none',
            overflow: 'hidden',
            opacity: 0.12 // Significantly reduced for subtle professional texture
        }}>
            {scoops.map((scoop) => (
                <motion.div
                    key={scoop.id}
                    initial={{ y: '110vh', opacity: 0, scale: 0.5, rotate: -15 }}
                    animate={{
                        y: '-20vh',
                        opacity: [0, 0.8, 0.8, 0],
                        scale: [0.5, 1, 1, 0.5],
                        rotate: 15
                    }}
                    transition={{
                        duration: 18,
                        repeat: Infinity,
                        repeatType: "reverse",
                        delay: scoop.delay,
                        ease: "linear"
                    }}
                    style={{
                        position: 'absolute',
                        left: scoop.x,
                        width: scoop.size,
                        height: scoop.size,
                        background: 'radial-gradient(circle, rgba(230,0,0,0.1) 0%, rgba(255,251,240,0) 70%)',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        filter: 'blur(3px) grayscale(20%)' // Added grayscale and more blur for subtlety
                    }}
                >
                    <img
                        src="/src/assets/icecream_scoop.png"
                        alt=""
                        style={{ width: '80%', height: 'auto' }}
                        onError={(e) => { e.target.style.display = 'none'; }}
                    />
                </motion.div>
            ))}
        </div>
    );
};

export default MobileBackground;
