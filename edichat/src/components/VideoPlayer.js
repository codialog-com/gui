import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => (
    <div style={{ flex: 1, padding: '10px', border: '1px solid #ccc' }}>
        <ReactPlayer url='file_example_MP4_480_1_5MG.mp4'
                     controls
                     width='100%'
                     height='100%'
                     style={{top: 0, left: 0 }}
        />
    </div>
);

export default VideoPlayer;
