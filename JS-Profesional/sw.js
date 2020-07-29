const VERSION = 'v1'

self.addEventListener('install', event =>{
    event.waitUntil(precache())
})

self.addEventListener('fetch', event => {
    const request = event.request

    //get request
    if(request.method !== 'GET'){
        return;
    }


    //Buscar en cache
    event.respondWith(cacheResponse(request))


    //Actualizar el cache para prevenir al usuario tener copias viejas de archivos que esten en el cache y que se hayan actualizado
    event.waitUntil(updateCache(request))
})

async function precache(){
    const cache = await caches.open(VERSION)

    return cache.addAll([
        // '/',
        // '/index.html',
        // '/assets/index.js',
        // '/assets/MediaPlayer.js',
        // '/assets/plugins/AutoPlay.js',
        // '/assets/plugins/AutoPause.ts',
        // '/assets/index.css',
        // '/assets/ejercicio.mp4',
    ])
}

async function cacheResponse(request){
    const cache = await caches.open(VERSION)

    //preguntar si en el cache esta la respuesta del request; si no tiene la respuesta devuelve undefined
    const response = await cache.match(request)

    return response || fetch(request)
}

async function updateCache(request) {
    const cache = await caches.open(VERSION);
    const response = await fetch(request);
    return cache.put(request, response);
}