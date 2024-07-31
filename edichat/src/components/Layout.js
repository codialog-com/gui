import React from 'react';
import Sidebar from './Sidebar';
import PdfViewer from './PdfViewer';
import VideoPlayer from './VideoPlayer';
import Chat from './Chat';
import Logs from './Logs';
import Comments from './Comments';

const Layout = () => (
    <div style={{ display: 'flex', height: '100vh' }}>
        <Sidebar />
        <div style={{ flex: 1, padding: '10px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ flex: 1, display: 'flex' }}>
                <VideoPlayer />
                <PdfViewer />
            </div>
            <div style={{ display: 'flex', height: '30%' }}>
                <Chat />
                <Logs />
                <Comments />
            </div>
        </div>
    </div>
);

export default Layout;
