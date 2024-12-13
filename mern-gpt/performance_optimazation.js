// caching
const redis = require('redis');
const client = redis.createClient();

app.get('/data', async (req, res) => {
    const cache = await client.get('key');
    if (cache) return res.send(cache);

    const data = await fetchDataFromDB();
    client.set('key', JSON.stringify(data), 'EX', 3600);
    res.send(data);
});

// load balancing
// nginx
// upstream backend {
//     server backend1.example.com;
//     server backend2.example.com;
// }

// server {
//     location / {
//         proxy_pass http://backend;
//     }
// }


//code splitting
// react lazy loading
import React, { lazy, Suspense } from 'react';
const LazyComponent = lazy(() => import('./Component'));

function App() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <LazyComponent />
        </Suspense>
    );
}
