const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

// api/public_file
// ~ this is to add file into web public file directory that already exist (rawData of chokidari)
const rawData = (req, res) => {
  // publicPath = directory being watched
  // localPath = full local path change was made on
  // data = inner file text
  const { publicPath, localPath, data } = req.body;
  let publicFolderPath = localPath.split('/');
  // this is used to remove everything prior to the ${publicPath} in localPath
  const publicPathLocationStart = publicFolderPath.indexOf(publicPath);
  publicFolderPath = publicFolderPath.slice(publicPathLocationStart + 1).join('/');
  // joins path based on servers location pointing to public fodler
  const finalPublicFilePath = path.join(__dirname, '../../../../client/web_view/public/files/', publicFolderPath);
  fs.writeFile(finalPublicFilePath, data);
  res.sendStatus(200);
};

// api/public_file/addDir
// ~ this is to create directory in webs public file directory (addDir of chokidari)
const addDir = (req, res) => {
  // publicPath = directory being watched
  // localPath = full local path change was made on
  const { publicPath, localPath } = req.body;
  let publicFolderArr = localPath.split('/');
  // this is used to remove everything prior to the ${publicPath} in localPath
  const publicPathLocationStart = publicFolderArr.indexOf(publicPath);
  publicFolderArr = publicFolderArr.slice(publicPathLocationStart + 1).join('/');
  // joins path based on servers location pointing to public fodler
  const finalPublicDirectory = path.join(__dirname, '../../../../client/web_view/public/files/', publicFolderArr);
  mkdirp(finalPublicDirectory);
  res.sendStatus(200);
};

module.exports = {
  rawData,
  addDir,
};
