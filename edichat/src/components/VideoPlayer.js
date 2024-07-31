import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = () => (
    <div style={{ flex: 1, padding: '10px', border: '1px solid #ccc' }}>
        <ReactPlayer url='https://www.sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4' controls />
    </div>
);

export default VideoPlayer;
