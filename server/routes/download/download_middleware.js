const path = require('path');

const getFile = (req, res) => {
  const filePath = path.join(__dirname, '../../../', req.query.file);
  res.download(filePath);
};

module.exports = {
  getFile,
};
