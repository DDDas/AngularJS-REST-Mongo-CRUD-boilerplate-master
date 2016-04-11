var dest = 'dist/';
var src = 'app';

module.exports = {
  browserSync: {
    server: {
      baseDir: dest
    }
  },
  server: {
    port: process.env.PORT || 3000,
    baseDir: dest
  },
  babel: {
    dependencies: ['es2015']
  },
  bundle: {
    src: src+'/scripts/app.js',
    out: 'bundle.js',
    dependencies: [],
    dest: dest
  },
   vendorBundle: {
    out: 'vendor.bundle.js',
    dependencies: [],
    dest: dest
  },
  sass: {
    src: src + '/sass/**/*.{sass,scss}',
    dest: dest,
    settings: {
      indentedSyntax: true, 
      imagePath: 'images', 
      includePaths: ['node_modules/bootstrap-sass/assets/stylesheets']
    }
  },
  markup: {
    src: [src + '/html/**', src + '/scripts/components/**/*.html'],
    dest: dest
  },
  production: {
    env : process.env.NODE_ENV === 'production'
  }
};