const antiTrollsSecurity = (string) => string.replace(/[aeiouAEIOU]/g, '');

module.exports = antiTrollsSecurity;
