// http://brunch.readthedocs.org/en/latest/config.html

exports.config = {
  files: {
    javascripts: {
      joinTo: {
        'app.js': /^(app|vendor)/
      },

      order: {
        before: [
          'vendor/javascripts/jquery.js',
          'vendor/javascripts/bootstrap.js',
          'vendor/javascripts/underscore.js'
        ],

        after: []
      }
    },

    stylesheets: {
      joinTo: {
        'app.css': /^(app|vendor)/
      },

      order: {
        before: [],
        after: []
      }
    },

    templates: {
      joinTo: 'app.js'
    }
  },

  modules: {
    wrapper: false,
    definition: false
  }
}
