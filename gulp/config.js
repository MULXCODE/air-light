module.exports = {
  cleancss: {
    opts: {
      compatibility: 'ie11,-properties.merging',
      level: {
        1: {
          specialComments: false,
          removeQuotes: true,
          removeWhitespace: true,
          tidyAtRules: true,
          cleanupCharsets: true,
          selectorsSortingMethod: 'natural'
        },
        2: {
          mergeSemantically: false,
          overrideProperties: true,
          removeEmpty: true,
          removeDuplicateRules: true,
          reduceNonAdjacentRules: true,
          removeDuplicateFontRules: true,
          removeDuplicateMediaBlocks: true,
          removeUnusedAtRules: true,
          restructureRules: true
        }
      }
    }
  },
  rename: {
    min: {
      suffix: '.min'
    }
  },
  browsersync: {
    // Important! If src is wrong, styles will not inject to the browser
    src: ['css/**/*'],
    opts: {
      logLevel: 'debug',
      injectChanges: true,
      proxy: 'https://airdev.test',
      browser: 'Google Chrome',
      open: false,
      notify: true,
      // Generate with: mkdir -p /var/www/certs && cd /var/www/certs && mkcert localhost 192.168.x.xxx ::1
      https: {
        key: "/var/www/certs/localhost+2-key.pem",
        cert: "/var/www/certs/localhost+2.pem",
      }
    },
    watch: [
      '**/*.php',
      'js/src/**/*.js'
    ]
  },
  styles: {
    gutenberg: 'sass/base/gutenberg.scss',
    src: 'sass/**/*.{sass,scss}',
    watch: 'sass/**/*.{sass,scss}',
    development: 'css/dev',
    production: 'css/prod',
    stylelint: {
      opts: {
        fix: false,
        ignoreFiles: ['!*.scss'],
        reporters: [{
          formatter: 'string',
          console: true,
          failAfterError: false,
          debug: false
        }]
      }
    },
    opts: {
      development: {
        bundleExec: true,
        outputStyle: 'expanded',
        debugInfo: true,
        errLogToConsole: true,
        includePaths: ['node_modules/']
      },
      production: {
        bundleExec: true,
        outputStyle: 'compressed',
        debugInfo: true,
        errLogToConsole: true,
        includePaths: ['node_modules/']
      }
    }
  },
  js: {
    src: 'js/src/*.js',
    watch: 'js/src/**/*',
    production: 'js/prod/',
    development: 'js/dev/',
  },
  php: {
    src: '**/*.php'
  },
  phpcs: {
    src: ['**/*.php', '!' + 'node_modules/**/*'],
    opts: {
      bin: '/usr/local/bin/phpcs',
      standard: 'phpcs.xml',
      warningSeverity: 0
    }
  }
};
