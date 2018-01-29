const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: 3000, host: 'localhost' });

server.start((err) => {
  if (err) {
    throw err;
  }
  console.log(`Server running at: ${server.info.uri}`);
});

server.register(require('inert'), (err) => {
  if (err) {
    throw err;
  }

  server.route({
    method: 'GET',
    path: '/',
    handler(request, reply) {
      reply.file('./public/login.html');
    },
  });
  server.route({
    method: 'GET',
    path: '/script.js',
    handler(request, reply) {
      reply.file('./public/script.js');
    },
  });
});
