const mockBlob = new Blob(['Hello World'], { type: 'text/html' });
const url = URL.createObjectURL(mockBlob);

const worker = new Worker('worker.js');

document
    .querySelector('button')
    .addEventListener('click', () => worker.postMessage(url));
