import { io } from 'socket.io-client';

export const socket = io('ws://192.168.2.127:3000');
