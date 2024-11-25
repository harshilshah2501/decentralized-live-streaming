const WebSocket = require('ws');

const wss = new WebSocket.Server({ port: 9090 });
const connections = {}; // Track connections by ID

wss.on('connection', (ws) => {
    const id = Math.random().toString(36).substring(7); // Generate a unique ID
    connections[id] = ws;

    ws.send(JSON.stringify({ id })); // Send the unique ID to the peer

    console.log(`New connection: ${id}`);

    ws.on('message', (message) => {
        const data = JSON.parse(message);

        if (data.targetId && connections[data.targetId]) {
            // Forward messages to the target peer
            connections[data.targetId].send(JSON.stringify({ from: id, ...data }));
        }
    });

    ws.on('close', () => {
        console.log(`Connection closed: ${id}`);
        delete connections[id];
    });
});

console.log('Signaling server running on ws://localhost:9090');