import { bootSystem } from './core/boot.js';
import { loadDesktop } from './ui/desktop.js';
import { loadTaskbar } from './ui/taskbar.js';

// Boot sequence
document.addEventListener('DOMContentLoaded', () => {
    console.log("Starting Simple OS...");
    bootSystem();
    loadDesktop();
    loadTaskbar();
});
