import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig(({ command }) => ({
    plugins: [react()],
    base: command === 'build' ? '/olesiklesha/' : '/',
    server: {
        host: true,
        port: 3000,
    },
    resolve: {
        alias: {
            '@public': path.resolve(__dirname, 'public'),
        },
    },
}));
