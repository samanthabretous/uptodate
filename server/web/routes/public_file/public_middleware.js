const fs = require('fs');
const path = require('path');
var mkdirp = require('mkdirp');

// api/public_file ~ this is to add file into public file directory that already exist (rawData of chokidari)
const rawData = (req, res) => {
  // publicPath = directory being watched
  // localPath = full local path change was made on
  // data = inner file text
  const { publicPath, localPath, data } = req.body;
  let publicFolderPath = localPath.split('/');
  const publicPathLocationStart = publicFolderPath.indexOf(publicPath);
  publicFolderPath = publicFolderPath.slice(publicPathLocationStart + 1).join('/');
  const finalPublicFilePath = path.join(__dirname, '../../../../client/web_view/public/files/', publicFolderPath);
  fs.writeFile(finalPublicFilePath, data);
  res.sendStatus(200);
};

module.exports = {
  rawData,
};

// let publicFolderArr = publicFolderPath.split('/');
//   // console.log("publicFolderArr" , publicFolderArr);
//   publicFolderArr.splice(-1, 1);
//   publicFolderArr = publicFolderArr.join('/')
//   // console.log("publicFolderArr2" , publicFolderArr);
//   const finalPublicDirectory = path.join(__dirname, '../../../../client/web_view/public/files/', publicFolderArr)
//   // console.log('finalPublicFilePath', finalPublicFilePath)
//   // console.log('publicFolderArr3', finalPublicDirectory)
//   mkdirp(finalPublicDirectory);