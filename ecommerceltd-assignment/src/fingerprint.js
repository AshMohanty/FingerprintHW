// fingerprint.js

// Initialize the agent on page load.
const fpPromise = import('https://fpjscdn.net/v3/H3AFp7QGfBDjumeD0wcA')
    .then(FingerprintJS => FingerprintJS.load());

// Get the visitorId when you need it.
fpPromise
    .then(fp => fp.get())
    .then(result => {
        const visitorId = result.visitorId;
        console.log(visitorId);
    })
    .catch(error => {
        console.error('Error loading FingerprintJS:', error);
    });
