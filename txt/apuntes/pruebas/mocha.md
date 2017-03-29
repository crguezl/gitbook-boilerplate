## Mocha

* [MochaJS documentation](http://mochajs.org/)
  - [Getting Started](http://mochajs.org/#getting-started)
* [Mocha y Chai en los apuntes](http://crguezl.github.io/pl-html/node9.html#SECTION041200190000000000000)
* [Repo /crguezl/mocha-chai-sinon--example](https://github.com/crguezl/mocha-chai-sinon--example)

### Mocha Options

```bash
[~/srcPLgrado/eloquentjsegg(master)]$ node_modules/.bin/mocha --help

  Usage: mocha [debug] [options] [files]


  Commands:

    init <path>  initialize a client-side mocha setup at <path>

  Options:

    -h, --help                              output usage information
    -V, --version                           output the version number
    -A, --async-only                        force all tests to take a callback (async) or return a promise
    -c, --colors                            force enabling of colors
    -C, --no-colors                         force disabling of colors
    -G, --growl                             enable growl notification support
    -O, --reporter-options <k=v,k2=v2,...>  reporter-specific options
    -R, --reporter <name>                   specify the reporter to use
    -S, --sort                              sort test files
    -b, --bail                              bail after first test failure
    -d, --debug                             enable node's debugger, synonym for node --debug
    -g, --grep <pattern>                    only run tests matching <pattern>
    -f, --fgrep <string>                    only run tests containing <string>
    -gc, --expose-gc                        expose gc extension
    -i, --invert                            inverts --grep and --fgrep matches
    -r, --require <name>                    require the given module
    -s, --slow <ms>                         "slow" test threshold in milliseconds [75]
    -t, --timeout <ms>                      set test-case timeout in milliseconds [2000]
    -u, --ui <name>                         specify user-interface (bdd|tdd|qunit|exports)
    -w, --watch                             watch files for changes
    --check-leaks                           check for global variable leaks
    --full-trace                            display the full stack trace
    --compilers <ext>:<module>,...          use the given module(s) to compile files
    --debug-brk                             enable node's debugger breaking on the first line
    --globals <names>                       allow the given comma-delimited global [names]
    --es_staging                            enable all staged features
    --harmony<_classes,_generators,...>     all node --harmony* flags are available
    --preserve-symlinks                     Instructs the module loader to preserve symbolic links when resolving and caching modules
    --icu-data-dir                          include ICU data
    --inline-diffs                          display actual/expected differences inline within each string
    --inspect                               activate devtools in chrome
    --interfaces                            display available interfaces
    --no-deprecation                        silence deprecation warnings
    --no-exit                               require a clean shutdown of the event loop: mocha will not call process.exit
    --no-timeouts                           disables timeouts, given implicitly with --debug
    --opts <path>                           specify opts path
    --perf-basic-prof                       enable perf linux profiler (basic support)
    --prof                                  log statistical profiling information
    --log-timer-events                      Time events including external callbacks
    --recursive                             include sub directories
    --reporters                             display available reporters
    --retries <times>                       set numbers of time to retry a failed test case
    --throw-deprecation                     throw an exception anytime a deprecated function is used
    --trace                                 trace function calls
    --trace-deprecation                     show stack traces on deprecations
    --use_strict                            enforce strict mode
    --watch-extensions <ext>,...            additional extensions to monitor with --watch
    --delay                                 wait for async suite definition
```

### Ejemplos

* [Tutorial Conversor de Temperaturas (gh-pages en GitHub)](http://crguezl.github.io/pl-html/node9.html)
* [Repo ULL-ESIT-GRADOII-PL/ull-etsii-grado-pl-1213-temperature-converter](https://github.com/ULL-ESIT-GRADOII-PL/ull-etsii-grado-pl-1213-temperature-converter)
* [Eloquent JS: The Secret Life of Objects. Lying Out a Table](http://eloquentjavascript.net/06_object.html##h_36C2FHHi44)
* [Repo con el código para la sección *The Secret Life of Objects. Lying Out a Table*](https://github.com/ULL-ESIT-DSI-1617/oop-eloquentjs-example)
* [Repo /crguezl/mocha-chai-sinon--example](https://github.com/crguezl/mocha-chai-sinon--example)

### Video Tutoriales

* [Introduction to Testing Node.js](https://youtu.be/u2XCdkL4bWI)
  - [Slides](http://training.strongloop.com/testing-node#/)
  - [Code](https://github.com/jakerella/node-unit-tests)


## Should {#should}

* [Should npm](https://www.npmjs.com/package/should)
* [Should GitHub](https://github.com/shouldjs/should.js)
* [Should API](https://shouldjs.github.io/)
  - [eql](https://shouldjs.github.io/#assertion-eql): Deep object equality comparison.
  - [throw](https://shouldjs.github.io/#assertion-throw)
