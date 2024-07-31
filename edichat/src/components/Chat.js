
import React from 'react';
const image = 'data:image/png;base64, iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='
const messages = [
    {
        user: 'Alice',
        icon:  image, // Replace with actual base64 string
        text: 'Hey there! How are things?',
        timestamp: '10:15 AM'
    },
    {
        user: 'Bob',
        icon:  image, // Replace with actual base64 string
        text: 'All good! What about you?',
        timestamp: '10:17 AM'
    },
    {
        user: 'Charlie',
        icon:  image, // Replace with actual base64 string
        text: 'I am working on our project.',
        timestamp: '10:18 AM'
    }
];

const Chat = () => (
    <div style={{ flex: 1, padding: '10px', border: '1px solid #ccc', overflowY: 'auto' }}>
        <h3>Chat</h3>
        <div>
            {messages.map((msg, index) => (
                <div key={index} style={{ display: 'flex', marginBottom: '2px', padding: '1px', border: '1px solid #aaa', }}>
                    <img src={msg.icon} alt={`${msg.user} icon`} style={{ width: '30px', height: '30px', borderRadius: '50%', marginRight: '1px' }} />
                    <div style={{ display: 'flex', marginBottom: '1px', padding: '1px', border: '1px solid #eee', }}>
                        <div style={{ fontWeight: 'bold' }}>{msg.user}</div>
                        <div style={{ marginLeft: '10px', }}>{msg.text}</div>
                        <div style={{ marginLeft: '10px', border: '1px solid #eee', }}>
                            <span style={{ fontWeight: 'normal', fontSize: '12px', color: 'grey' }}>{msg.timestamp}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
);

export default Chat;




