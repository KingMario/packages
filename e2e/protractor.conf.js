// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {SpecReporter} = require('jasmine-spec-reporter')

const browserstack = require('browserstack-local')

const browserstackKey = process.env.browserstackKey

exports.config = {
  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
  allScriptsTimeout: 22000,
  getPageTimeout: 20000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  commonCapabilities: {
    'browserstack.user': 'changyugeng1',
    'browserstack.key': browserstackKey,
    'browserstack.local': true,
    'build': 'Version 1',
    'project': 'packages'
  },
  multiCapabilities: [
    {
      browserName: 'Chrome'
    }, {
      browserName: 'Safari'
    }, {
      browserName: 'Firefox'
    }, {
      browserName: 'IE'
    }, {
      browserName: 'Edge'
    }
  ],
  beforeLaunch: function () {
    console.log('Connecting local')
    return new Promise(function (resolve, reject) {
      exports.bs_local = new browserstack.Local()
      exports.bs_local.start({
        key: browserstackKey,
        force: true
      }, function (error) {
        if (error) return reject(error)
        console.log('Connected. Now testing...')

        resolve()
      })
    })
  },
  afterLaunch: function () {
    return new Promise(function (resolve, reject) {
      exports.bs_local.stop(resolve)
    })
  },
  directConnect: false,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 60000,
    print: function () {
    }
  },
  onPrepare () {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.e2e.json')
    })
    jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}))
  }
}

exports.config.multiCapabilities.forEach(function (caps) {
  for (var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i]
})
