//Import navbar from global components
import Navbar from '../global-components/navbar';
import React from 'react';
import photoInfo from './photo-info.json';

const AboutUs = () => {
    const [hoveredIdx, setHoveredIdx] = React.useState(null);

    const [selectedIdx, setSelectedIdx] = React.useState(null);

    return (
        <div>
            <Navbar />
            <h1>About Us</h1>
            <p>Welcome to our about us page! Here you can learn more about our mission, values, and the team behind our project.</p>
            <p>We are committed to providing the best service and experience for our users. Our team is dedicated to continuous improvement and innovation.</p>
            <div style={{ display: 'flex', marginTop: '32px', minHeight: '300px' }}>
                {/* Selected card and flavortext */}
                {selectedIdx !== null && (
                    <div style={{ flex: '0 0 350px', marginRight: '40px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <div
                            style={{
                                textAlign: 'center',
                                border: '1px solid #eee',
                                borderRadius: '8px',
                                padding: '24px',
                                background: '#fafafa',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.10)',
                                transform: 'scale(1.15)',
                                width: '350px',
                                transition: 'transform 0.3s cubic-bezier(.25,.8,.25,1)'
                            }}
                        >
                            <img
                                src={`https://yorubabc.ca/storage/2023/07/${photoInfo[selectedIdx].Photo}`}
                                alt={photoInfo[selectedIdx].Name}
                                style={{ width: '100%', height: '220px', objectFit: 'cover', borderRadius: '6px' }}
                            />
                            <h2 style={{ margin: '16px 0 6px 0', fontSize: '1.35em' }}>{photoInfo[selectedIdx].Name}</h2>
                            <h5 style={{ margin: '0', color: '#666', fontWeight: 'normal', fontSize: '1em' }}>{photoInfo[selectedIdx].Position}</h5>
                        </div>
                        <div style={{ marginTop: '24px', maxWidth: '350px', color: '#333', fontSize: '1.08em', background: '#fff', borderRadius: '8px', padding: '18px', boxShadow: '0 2px 8px rgba(0,0,0,0.06)' }}>
                            {photoInfo[selectedIdx].flavortext}
                        </div>
                        <button
                            style={{ marginTop: '18px', padding: '8px 18px', borderRadius: '6px', border: 'none', background: '#eee', cursor: 'pointer' }}
                            onClick={() => setSelectedIdx(null)}
                        >
                            Close
                        </button>
                    </div>
                )}
                {/* Grid of cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                    gap: '24px',
                    flex: 1,
                    alignItems: 'flex-start'
                }}>
                    {photoInfo.map((entry, idx) => {
                        const isSelected = selectedIdx === idx;
                        const isAnySelected = selectedIdx !== null;
                        if (isSelected) return null; // Hide selected card in grid
                        return (
                            <div
                                key={idx}
                                style={{
                                    textAlign: 'center',
                                    border: '1px solid #eee',
                                    borderRadius: '8px',
                                    padding: '16px',
                                    background: '#fafafa',
                                    transition: 'transform 0.2s cubic-bezier(.25,.8,.25,1), opacity 0.3s',
                                    transform: hoveredIdx === idx ? 'scale(1.07)' : 'scale(0.97)',
                                    boxShadow: hoveredIdx === idx ? '0 8px 24px rgba(0,0,0,0.08)' : 'none',
                                    cursor: 'pointer',
                                    opacity: isAnySelected ? 0.5 : 1,
                                    pointerEvents: isAnySelected ? 'auto' : 'auto'
                                }}
                                onMouseEnter={() => setHoveredIdx(idx)}
                                onMouseLeave={() => setHoveredIdx(null)}
                                onClick={() => setSelectedIdx(idx)}
                            >
                                <img
                                    src={`https://yorubabc.ca/storage/2023/07/${entry.Photo}`}
                                    alt={entry.Name}
                                    style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '6px' }}
                                />
                                <h2 style={{ margin: '12px 0 4px 0', fontSize: '1.2em' }}>{entry.Name}</h2>
                                <h5 style={{ margin: '0', color: '#666', fontWeight: 'normal', fontSize: '0.95em' }}>{entry.Position}</h5>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default AboutUs; 