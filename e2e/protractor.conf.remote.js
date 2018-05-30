// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts

const {SpecReporter} = require('jasmine-spec-reporter')

exports.config = {
  seleniumAddress: 'http://hub-cloud.browserstack.com/wd/hub',
  allScriptsTimeout: 22000,
  getPageTimeout: 20000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  commonCapabilities: {
    'browserstack.user': 'changyugeng1',
    'browserstack.key': process.env.browserstackKey,
    'build': 'Version 1',
    'project': 'packages'
  },
  multiCapabilities: [
    {
      browserName: 'Chrome'
    }, {
      browserName: 'Safari'
    }, {
      browserName: 'IE',
      browser_version: '11.0'
    }, {
      browserName: 'Edge'
    }
  ],
  directConnect: false,
  baseUrl: 'http://mario.studio/packages/',
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
