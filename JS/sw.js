// Service worker to fix GitHub Pages reloading issue

// Get repository name from URL path for GitHub Pages
function getRepoName() {
    const pathSegments = self.location.pathname.split('/');
    return pathSegments[1]; // Returns repo name
}

// Cache name for our app
const CACHE_NAME = 'iraw-camera-rental-v1';

// Install event - cache static assets
self.addEventListener('install', event => {
    self.skipWaiting(); // Ensure the new service worker activates immediately
    console.log('Service Worker installed');
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    console.log('Service Worker activated');
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.filter(name => name !== CACHE_NAME).map(name => {
                    return caches.delete(name);
                })
            );
        })
    );
    return self.clients.claim(); // Take control of all clients
});

// Fetch event - fix URLs for GitHub Pages
self.addEventListener('fetch', event => {
    // Only process HTML navigation requests to fix page reloading
    if (event.request.mode === 'navigate' && 
        self.location.hostname.includes('github.io')) {
        
        const requestURL = new URL(event.request.url);
        const repoName = getRepoName();
        
        // Check if we need to redirect to prevent loops
        if (requestURL.pathname.endsWith('.html') || 
            requestURL.pathname.endsWith('/')) {
            
            // Make sure the URL has the repository name
            if (!requestURL.pathname.startsWith(`/${repoName}/`) && 
                requestURL.pathname !== `/${repoName}` && 
                !requestURL.pathname.includes(`/${repoName}/`)) {
                
                // Add repo name to path to prevent infinite reload
                const newPath = `/${repoName}${requestURL.pathname}`;
                console.log(`Redirecting: ${requestURL.pathname} -> ${newPath}`);
                
                // Respond with a redirect
                event.respondWith(
                    Response.redirect(`${requestURL.origin}${newPath}`)
                );
                return;
            }
        }
    }
    
    // Default behavior for other requests
    return;
}); 