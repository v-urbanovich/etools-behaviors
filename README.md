# Etools Polymer Mixins

A collection of Polymer mixins used in etools apps.

## Mixins list/ Mixin helpers
### EtoolsLogsMixin

Can be used to log errors, warnings and other info like this.
```javascript
this.logError('some error msg...', null);
this.logWarn('some warning msg...', 'some page section');
this.logInfo('some info msg...', null)
```

Each method can have 3 args:
   - the message you want to log
   - a prefix for log message
   - additional data, anything

#### Available logging levels (the levels are cumulative)
  - OFF (default)
  - ERROR - only errors will be displayed
  - WARN - errors and warning will be displayed
  - INFO - errors, warning and info logs displayed

To configure the logging level in your app config do this:
```javascript
window.EtoolsLogsLevel = window.EtoolsLogsLevel || 'INFO';
```

### PolymerMixinFactory

A helper class to combine multiple mixins.

### EtoolsPageRefreshMixin

App data cache reset mixin.

## Install
TODO: create npm package
```bash
$ npm i --save unicef-polymer/etools-behaviors#branch_name
```

## Linting the code

Install local npm packages (run `npm install`)
Then just run the linting task

```bash
$ npm run lint
```

## Running Tests

TODO: improve tests & add more tests

You need to have `web-component-tester` installed (if not run `npm install -g web-component-tester`)
```bash
$ wct
```
or
```bash
$ wct -p
```

## Circle CI

Package will be automatically published after tag push (`git tag 1.2.3` , `git push --tags`). Tag name must correspond to SemVer (Semantic Versioning) rules.  
Examples:

| Version match      | Result   |
| ------------------ | -------- |
| `1.2.3`            | match    |
| `1.2.3-pre`        | match    |
| `1.2.3+build`      | match    |
| `1.2.3-pre+build`  | match    |
| `v1.2.3-pre+build` | match    |
| `1.2`              | no match |

You can see more details [here](https://rgxdb.com/r/40OZ1HN5)
