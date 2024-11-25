# Decentralized Live Streaming platform

This project demonstrates a WebRTC-powered decentralized live-streaming platform where viewers act as relays, reducing server load. It's an innovative approach to leverage the participants unused resources to relay the streaming traffic instead of frequently relying on STUN/TURN servers in case of P2P connection fail.

## Features
- Peer-to-peer live streaming with WebRTC
- Decentralized architecture for scalability
- Metrics monitoring and failover support

## Technologies
- WebRTC
- Node.js for signaling server
- OpenStack and Terraform for deployment

## Getting Started
### Backend
1. Navigate to the `backend/` folder.
2. Run `node server.js` to start the signaling server.

### Frontend
1. Open `index.html` in a browser.
2. Connect peers to test the live-streaming feature.

## Future Enhancements
- Quality monitoring
- Multi-stream support
