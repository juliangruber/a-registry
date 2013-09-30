
# a-registry

WIP master-only service registry library

## Example

```js
var Registry = require('./');

// a is a registry that provides `stdin`

var a = Registry();

a.add('stdin', function() {
  process.stdin.resume();
  return process.stdin;
});

// b is a registry that provides `stdou`

var b = Registry();

b.add('stdout', function() {
  return process.stdout;
});

// connect a and b

var as = a.createStream();
as.pipe(b.createStream()).pipe(as);

// pipe a's stdin into b's stdout

b.get(function(n) { return n == 'stdin' }, function(stdin) {
  a.get(function(n) { return n == 'stdout' }, function(stdout) {
    stdin.pipe(stdout);
  });
});
```

## License

MIT
