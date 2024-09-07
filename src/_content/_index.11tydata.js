module.exports = function () {
  return {
    layout: 'default',
    permalink: function ({ title }) {
      return `/recipes/${this.slugify(title)}`;
    },
  }
}