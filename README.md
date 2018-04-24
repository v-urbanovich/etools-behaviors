# Etools Polymer Behaviors

A collection of Polymer behaviors used in etools apps.

## Behaviors list
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


## Install
```bash
$ bower install --save etools-behaviors
```

## Linting the code

Innstall local npm packages (run `npm install`)
Then just run the linting task

```bash
$ npm run lint
```
You should also use polylint. If you don't have Polylint installed run `npm install -g polylint`.
Then just run the linter on each file you wish to check like so

```bash
$ polylint -i filename.html
```
At the moment polylint crashes if it encounters a missing import. If that happens, temporarily comment out such imports and run the command again.

## Preview element locally

Install needed dependencies by running: `$ bower install`.
Make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `$ polymer serve` to serve your element application locally.

## Running Tests

You need to have `web-component-tester` installed (if not run `npm install -g web-component-tester`)
```bash
$ wct
```
or
```bash
$ wct -p
```
