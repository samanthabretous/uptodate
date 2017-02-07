const fs = require('fs');
const path = require('path');
const mkdirp = require('mkdirp');

// api/repo_file/updateFile
// ~ this is to add file into web repo file directory that already exist (rawData of chokidari)
const rawData = (req, res) => {
  // repoPath = directory being watched
  // localPath = full local path change was made on
  // data = inner file text
  const { repoPath, localPath, data } = req.body;
  let repoFolderPath = localPath.split('/');
  // this is used to remove everything prior to the ${repoPath} in localPath
  const repoPathLocationStart = repoFolderPath.indexOf(repoPath);
  repoFolderPath = repoFolderPath.slice(repoPathLocationStart + 1).join('/');
  // joins path based on servers location pointing to repo fodler
  const finalrepoFilePath = path.join(__dirname, '../../../../client/repo/', repoFolderPath);
  fs.writeFile(finalrepoFilePath, data, (err) => {
    if (err) {
      res.sendStatus(500);
    }
  });
  res.sendStatus(200);
};

// api/repo_file/addDir
// ~ this is to create directory in webs repo file directory (addDir of chokidari)
const addDir = (req, res) => {
  // repoPath = directory being watched
  // localPath = full local path change was made on
  const { repoPath, localPath } = req.body;
  let repoFolderArr = localPath.split('/');
  // this is used to remove everything prior to the ${repoPath} in localPath
  const repoPathLocationStart = repoFolderArr.indexOf(repoPath);
  repoFolderArr = repoFolderArr.slice(repoPathLocationStart + 1).join('/');
  // joins path based on servers location pointing to repo fodler
  const finalrepoDirectory = path.join(__dirname, '../../../../client/repo/', repoFolderArr);
  mkdirp(finalrepoDirectory, (err) => {
    if (err) {
      res.sendStatus(500);
    }
  });
  res.sendStatus(200);
};

module.exports = {
  rawData,
  addDir,
};
