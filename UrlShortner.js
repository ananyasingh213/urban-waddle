
const crypto = require('crypto');

module.exports = {
  generateShortURL: (longURL, startIndex, endIndex) => {
    const hash = crypto.createHash('md5').update(longURL).digest('base64').replace(/\//g, '_').replace(/\+/g, '-');  //The URL may contain characters like \ and + which we are replacing with _,- respecively. Also, we are using MD5 hash here. 
    return hash.substring(startIndex, endIndex + 1);
  },
};