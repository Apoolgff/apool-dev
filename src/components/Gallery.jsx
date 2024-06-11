import React, { useState } from 'react';
import './Gallery.css';

const videos = [
    {
        id: 1,
        title: 'Video 1',
        subtitle: 'Subtítulo 1',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        imageUrl: '/tv.gif',
    },
    {
        id: 2,
        title: 'Video 2',
        subtitle: 'Subtítulo 2',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        imageUrl: '/tv.gif',
    },
    {
        id: 3,
        title: 'Video 3',
        subtitle: 'Subtítulo 3',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        imageUrl: '/tv.gif',
    },
    {
        id: 4,
        title: 'Video 4',
        subtitle: 'Subtítulo 4',
        videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
        imageUrl: '/tv.gif',
    },
    // Agrega más videos según sea necesario
];

const Gallery = () => {
    const [showPopup, setShowPopup] = useState(false);
    const [selectedVideoUrl, setSelectedVideoUrl] = useState('');

    const openPopup = (videoUrl) => {
        setSelectedVideoUrl(videoUrl);
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="gallery">
            <h1 className="gallery-title">Galería</h1>
            <div className="gallery-grid">
                {videos.map(video => (
                    <div className="gallery-card" key={video.id}>
                        <h2 className="gallery-card-title">{video.title}</h2>
                        <p className="gallery-card-subtitle">{video.subtitle}</p>
                        <img src={video.imageUrl} alt={video.title} className="gallery-card-image" />
                        <button onClick={() => openPopup(video.videoUrl)} className="gallery-card-button">Ver Video</button>
                    </div>
                ))}
            </div>
            {showPopup && (
                <div className="popup">
                    <button onClick={closePopup} className="popup-close-button">Cerrar</button>
                    <video controls className="popup-video">
                        <source src={selectedVideoUrl} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )}
        </div>
    );
};

export default Gallery;
