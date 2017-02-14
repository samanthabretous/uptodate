const fs = require('fs-extra');
const path = require('path');
const mkdirp = require('mkdirp');
const models = require('../../db/models');

const Lesson = models.lesson;

/**
 * creates a path to repo on server based on useresLocalPath
 * @param { String } directoryBeingWatched
 * @param { String } usersLocalPath
 * @return { object } pathToRepoStorage, subPath, fileDirectory
 * subPath = path after 'repo/' directory
 * fileDirectory = { arr } full file directory
 */
const pathMaker = (directoryBeingWatched, usersLocalPath) => {
  let subPath = usersLocalPath.split('/');
  // remove everything prior to the ${repoPath} in localPath
  const repoPathLocationStart = subPath.indexOf(directoryBeingWatched);
  const fileDirectory = subPath.slice(repoPathLocationStart + 1);
  subPath = subPath.slice(repoPathLocationStart + 1).join('/');

  // join path based on servers location pointing to repo fodler
  const pathToRepoStorage = path.join(__dirname, '../../../../repo/', subPath);
  return { pathToRepoStorage, subPath, fileDirectory };
};

/**
* add to the nested tree structure using firstChildNode since its pass by
* refrence there is no need to save this functions return into a variable
* @param {Array} firstChildNode
* @param {Array} splitFileDirectory
* @param {String} subPath
* @returns {firstNestedNode}
*/
const addNodeToTree = (firstChildNode, splitFileDirectory, subPath) => {
  if (splitFileDirectory.length === 1) {
    firstChildNode.push({ title: splitFileDirectory[0], path: subPath });
    return firstChildNode;
  } else {
    for (let i = 0; i < firstChildNode.length; i += 1) {
      if (firstChildNode[i].title === splitFileDirectory[0]) {
        return addNodeToTree(firstChildNode[i].childNodes, splitFileDirectory.slice(1), subPath);
      }
    }
    const splitFileDirectorycopy = splitFileDirectory.slice(1);
    const node = addNodeToTree([], splitFileDirectorycopy, subPath);
    firstChildNode.push({ title: splitFileDirectory[0], childNodes: node });
    return firstChildNode;
  }
};

// api/repoFile/updateFile
// ~ this is to add file into web repo file directory that already exist (rawData of chokidari)
const rawData = (req, res) => {
  // repoPath = directory being watched
  // localPath = full local path change was made on
  // data = inner file text
  const { repoPath, localPath, data } = req.body;
  const { pathToRepoStorage } = pathMaker(repoPath, localPath);
  fs.writeFile(pathToRepoStorage, data, (err) => {
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
  const { pathToRepoStorage } = pathMaker(repoPath, localPath);
  mkdirp(pathToRepoStorage, (err) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
};

// api/repo_file/addFile
// ~ this is to create a file in webs repo file directory (addDir of chokidari)
const addFile = (req, res) => {
  // repoPath = directory being watched
  // localPath = full local path change was made on
  const { repoPath, localPath, data } = req.body;
  const { pathToRepoStorage, subPath, fileDirectory } = pathMaker(repoPath, localPath);
  Lesson.findById(1)
  .then((lesson) => {
    let repo = lesson.get('repo');
    addNodeToTree(repo, fileDirectory, subPath);
    return Lesson.update({ repo },
      {
        where: {
          id: 1,
        },
      });
  })
  .then((updated) => {
    if (updated) {
      fs.writeFile(pathToRepoStorage, data, (err) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
    } else {
      throw new Error();
    }
  })
  .catch(() => {
    res.sendStatus(500);
  });
};

// api/repo_file/addFile
// ~ this is to delete a file in webs repo file directory (addDir of chokidari)
const deleteFile = (req, res) => {
  // repoPath = directory being watched
  // localPath = full local path change was made on
  const { repoPath, localPath } = req.body;
  const { pathToRepoStorage, fileName } = pathMaker(repoPath, localPath);
  Lesson.findById(1)
  .then((lesson) => {
    const repo = lesson.get('repo');
    delete repo[fileName];
    return Lesson.update({ repo },
      {
        where: {
          id: 1,
        },
      });
  })
  .then((updated) => {
    // this if ensures you never erase the root direcroty
    if (updated && pathToRepoStorage.length > 28) {
      fs.remove(pathToRepoStorage, (err) => {
        if (err) {
          res.sendStatus(500);
        } else {
          res.sendStatus(200);
        }
      });
    } else {
      throw new Error();
    }
  })
  .catch(() => {
    res.sendStatus(500);
  });
};

const deleteDir = (req, res) => {
  // repoPath = directory being watched
  // localPath = full local path change was made on
  const { repoPath, localPath } = req.body;
  const { pathToRepoStorage } = pathMaker(repoPath, localPath);
  // this if ensures you never erase the root direcroty
  if (pathToRepoStorage.length > 28) {
    fs.remove(pathToRepoStorage, (err) => {
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
