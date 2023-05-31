import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app';

const domNode = document.getElementById('root');

if (!domNode) throw Error('Not find the HTML Element');

const root = createRoot(domNode);

root.render(<App />);
