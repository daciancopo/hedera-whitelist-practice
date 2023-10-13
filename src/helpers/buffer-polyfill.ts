import { Buffer } from 'buffer';

if (typeof window !== 'undefined') {
  (window as any).global = window;
}

if (typeof global.Buffer === 'undefined') {
  global.Buffer = Buffer;
}
