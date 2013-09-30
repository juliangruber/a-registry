var Registry = require('./');

var a = Registry();

a.add('stdin', function() {
  process.stdin.resume();
  return process.stdin;
});

var b = Registry();

b.add('stdout', function() {
  return process.stdout;
});

var as = a.createStream();
as.pipe(b.createStream()).pipe(as);

b.get('stdin', function(stdin) {
  a.get('stdout', function(stdout) {
    stdin.pipe(stdout);
  });
});
