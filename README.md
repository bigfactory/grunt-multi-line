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
        options: {
            beginTag: "'''",
            endTag: "'''"
        },
        replaceWithTheSourceFile: {
            files: [{
                expand: true,
                cwd: 'test/temp',
                src: '**/*.js',
                dest: 'test/temp'
            }]
        },
        replaceToNewFile: {
            options: {
                beginTag: "'@'/*",
                endTag: "*/"
            },
            files: {
                'test/build/otherTag.js': ['test/src/otherTag.js']
            }
        }
    }
});
```

## Usage

```
$ grunt multiline
```

### How it work

```

var tpl = '''
  <h1>{{user.name}}</h1>
  <p>{{user.text}}</p>
''';
```

will turn output as:

```

var tpl = '\
  <h1>{{user.name}}</h1>\
  <p>{{user.text}}</p>\
';
```