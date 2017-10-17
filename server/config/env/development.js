const argv = require('minimist')(process.argv.slice(2));

module.exports = {
  db: {
    uri: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || `mongodb://${argv.dbhost || 'localhost'}:27017/workeffort-web`,
    options: {
      user: '',
      pass: '',
    },
    // Enable mongoose debug mode
    debug: process.env.MONGODB_DEBUG || false,
  },
};
