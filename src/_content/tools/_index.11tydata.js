module.exports = function () {
  return {
    layout: 'default',
    permalink: function ({ title }) {
      return `/tools/${this.slugify(title)}`;
    },
  }
}