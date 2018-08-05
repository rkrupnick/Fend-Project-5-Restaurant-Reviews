self.addEventListener('fetch', function(event) {
  event.respondWith(
    new Response(`This event is an ${event}`)
      headers: {'Content-Type': 'text/html'}
    );
});