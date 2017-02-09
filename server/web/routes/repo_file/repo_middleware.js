const fs = require('fs-extra');
const path = require('path');
const mkdirp = require('mkdirp');
const models = require('../../db/models');

const Lesson = models.lesson;


const pathMaker = (directoryBeingWatched, usersLocalPath) => {
  let repoFolderPath = usersLocalPath.split('/');
  // this is used to remove everything prior to the ${repoPath} in localPath
  const repoPathLocationStart = repoFolderPath.indexOf(directoryBeingWatched);
  repoFolderPath = repoFolderPath.slice(repoPathLocationStart + 1).join('/');
  // joins path based on servers location pointing to repo fodler
  return path.join(__dirname, '../../../../repo/', repoFolderPath);
};

// api/repoFile/updateFile
// ~ this is to add file into web repo file directory that already exist (rawData of chokidari)
const rawData = (req, res) => {
  // repoPath = directory being watched
  // localPath = full local path change was made on
  // data = inner file text
  const { repoPath, localPath, data } = req.body;
  const finalrepoFilePath = pathMaker(repoPath, localPath);
  fs.writeFile(finalrepoFilePath, data, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};

// api/repo_file/addDir
// ~ this is to create directory in webs repo file directory (addDir of chokidari)
const addDir = (req, res) => {
  // repoPath = directory being watched
  // localPath = full local path change was made on
  const { repoPath, localPath } = req.body;
  const finalrepoDirectory = pathMaker(repoPath, localPath);
  mkdirp(finalrepoDirectory, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};

const addFile = (req, res) => {
  const { repoPath, localPath, data } = req.body;
  console.log(req.body);
  Lesson.findById(1)
  .then(data => {
    console.log(data)
  })
  // const finalrepoFilePath = pathMaker(repoPath, localPath);
  // fs.writeFile(finalrepoFilePath, data, (err) => {
  //   if (err) {
  //     res.sendStatus(500);
  //   } else {
      res.sendStatus(200);
  //   }
  // });
};

const deleteFile = (req, res) => {
  // repoPath = directory being watched
  // localPath = full local path change was made on
  const { repoPath, localPath } = req.body;
  // const finalrepoFilePath = pathMaker(repoPath, localPath);
  // this if ensures you never erase the root direcroty
  // if (finalrepoFilePath.length > 28) {
  //   fs.remove(finalrepoFilePath, (err) => {
  //     if (err) {
  //       res.sendStatus(500);
  //     } else {
  //       res.sendStatus(200);
  //     }
  //   });
  // }
};

const deleteDir = (req, res) => {
  // repoPath = directory being watched
  // localPath = full local path change was made on
  const { repoPath, localPath } = req.body;
  const finalrepoDirectory = pathMaker(repoPath, localPath);
  // this if ensures you never erase the root direcroty
  if (finalrepoDirectory.length > 28) {
    fs.remove(finalrepoDirectory, (err) => {
      if (err) {
        res.sendStatus(500);
      } else {
        res.sendStatus(200);
      }
    });
  }
};


module.exports = {
  rawData,
  addDir,
  deleteDir,
  addFile,
  deleteFile,
};
