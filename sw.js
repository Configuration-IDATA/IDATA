var CACHE='ol-idata-v1.13-web3';
var ASSETS=['./','index.html','data.js','manifest.webmanifest','icon-192.png','icon-512.png','apple-touch-icon.png'];
self.addEventListener('install',function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(ASSETS);}).then(function(){return self.skipWaiting();}));
});
self.addEventListener('activate',function(e){
  e.waitUntil(caches.keys().then(function(ks){
    return Promise.all(ks.map(function(k){return k===CACHE?null:caches.delete(k);}));
  }).then(function(){return self.clients.claim();}));
});
self.addEventListener('fetch',function(e){
  if(e.request.method!=='GET') return;
  if(e.request.mode==='navigate'){
    e.respondWith(fetch(e.request).then(function(r){
      var cp=r.clone(); caches.open(CACHE).then(function(c){c.put('./',cp);}); return r;
    }).catch(function(){ return caches.match('./'); }));
    return;
  }
  e.respondWith(caches.match(e.request).then(function(m){ return m || fetch(e.request); }));
});
