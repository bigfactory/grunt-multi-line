# grunt-multi-line

> javascript multi lines string support

## Environment
Grunt `~0.4.5`

## Install
```
$ npm install grunt-multi-line --save-dev
```

## Config
```
grunt.loadNpmTasks('grunt-multi-line');
```

## Task Config

```
grunt.initConfig({
    multiline: {    
        replace: {
            options: {
              beingTag: "'''",
              endTag: "'''"
            },
            files: [{
                src: ['**/*.js', '!**/*-min.js'],
                dest: '<%= opt.temp %>'
            }]
        }
    }
});
```

## Usage

```
$ grunt multiline
```

### Source

```

var tpl = '''
  <h1>{{user.name}}</h1>
  <p>{{user.text}}</p>
''';
```

will turn out to:

```

var tpl = '''\
  <h1>{{user.name}}</h1>\
  <p>{{user.text}}</p>\
''';
```