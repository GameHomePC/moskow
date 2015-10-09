module.exports = {
  html: {
    watch: [
      './public/*.html'
    ],
    src: [
      './public/*.html'
    ],
    build: './build'
  },
  font: {
    watch: [
      './public/fonts/**/*'
    ],
    src: [
      './public/fonts/**/*'
    ],
    build: './build/fonts'
  },
  img: {
    watch: [
      './public/images/**/*'
    ],
    src: [
      './public/images/**/*'
    ],
    build: './build/images'
  },
  css: {
    watch: [
      './public/css/**/*'
    ],
    src: [
      './public/css/**/*'
    ],
    build: './build/css'
  },
  sass: {
    watch: [
      './public/sass/**/*'
    ],
    src: [
      './public/sass/main.scss'
    ],
    build: './build/css'
  },
  js: {
    watch: [
      './public/js/**/*'
    ],
    src: [
      './public/js/**/*'
    ],
    build: './build/js'
  }
};
