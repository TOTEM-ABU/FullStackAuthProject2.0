import React, { useEffect, useRef } from 'react';
import TubesCursor from "https://cdn.jsdelivr.net/npm/threejs-components@0.0.19/build/cursors/tubes1.min.js";

const TubesScene = () => {
    const canvasRef = useRef(null);
    const appInstance = useRef(null);

    useEffect(() => {
        if (canvasRef.current && !appInstance.current) {
            appInstance.current = TubesCursor(canvasRef.current, {
                tubes: {
                    colors: ["#f967fb", "#53bc28", "#6958d5"],
                    lights: {
                        intensity: 200,
                        colors: ["#83f36e", "#fe8a2e", "#ff008a", "#60aed5"]
                    }
                }
            });

            window.dispatchEvent(new Event('resize'));
        }

        const handleGlobalClick = () => {
            if (appInstance.current) {
                const randomHex = () => "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');
                const newColors = [randomHex(), randomHex(), randomHex()];
                const newLightColors = [randomHex(), randomHex(), randomHex(), randomHex()];

                appInstance.current.tubes.setColors(newColors);
                appInstance.current.tubes.setLightsColors(newLightColors);
            }
        };

        window.addEventListener('click', handleGlobalClick);
        return () => window.removeEventListener('click', handleGlobalClick);
    }, []);

    return (
        <div style={containerStyle}>
            <canvas ref={canvasRef} style={canvasStyle} />

            <a href="/signup" style={buttonStyle}>Sign Up</a>

            <div style={contentStyle}>
                <h1 style={h1Style}>AbuCORP</h1>
                <h2 style={h2Style}>just do it!</h2>
            </div>
        </div>
    );
};

const containerStyle = {
    position: 'relative',
    width: '100%',
    height: '100vh',
    background: 'linear-gradient(to bottom right, #111827, #064e3b, #065f46)',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'sans-serif',
};

const canvasStyle = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    zIndex: 0,
    display: 'block',
    pointerEvents: 'none',
};

const buttonStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    zIndex: 10,
    padding: '10px 25px',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    color: '#fff',
    border: '1px solid rgba(255, 255, 255, 0.2)',
    borderRadius: '25px',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: 'bold',
    backdropFilter: 'blur(5px)',
    transition: '0.3s',
};

const contentStyle = {
    position: 'relative',
    zIndex: 5,
    textAlign: 'center',
    userSelect: 'none',
};

const h1Style = {
    fontSize: '80px',
    margin: 0,
    color: '#fff',
    fontWeight: '900',
    letterSpacing: '-2px',
};

const h2Style = {
    fontSize: '20px',
    margin: 0,
    color: '#10b981',
    fontWeight: '300',
    textTransform: 'uppercase',
    letterSpacing: '10px',
    marginTop: '10px',
};

export default TubesScene;