const fs = require('fs');
const path = require('path');

// api/public_file ~ this is to add file into public file
const rawData = (req, res) => {
  // publicPath = directory being watched
  // localPath = full local path change was made on
  // data = inner file text
  console.log(req.body);
  const { publicPath, localPath, data } = req.body;
  let publicFolderPath = localPath.split('/');
  const publicPathLocationStart = publicFolderPath.indexOf(publicPath);
  publicFolderPath = publicFolderPath.slice(publicPathLocationStart + 1).join('/');
  const finalPublicFolderPath = path.join(__dirname, '../../../../client/web_view/public/files/', publicFolderPath);
  fs.writeFile(finalPublicFolderPath, data,
    (err) => {
      let publicFolderArr = publicFolderPath.split('/');
      publicFolderArr = publicFolderArr.splice(publicFolderArr.length - 2, 1);
      console.log(publicFolderArr);
      let tempPath = publicFolderArr[0];
      for (let i = 0; i < publicFolderArr.length; i += 1) {
        let makeThisDirector = path.join(__dirname, '../../../../client/web_view/public/files/', tempPath);
        fs.mkdir(makeThisDirector, err => console.log(err));
        if (publicFolderPath[i + 1]) {
          tempPath += publicFolderPath[i + 1];
        }
      }
      // publicFolderArr.reduce((string, b) => {
        // console.log('string', string);
        // fs.mkdir(makeThisDirector);
        // return `${string}/${b}`;
      // });
      // console.log(err);
    });
  res.send("hello");
};

module.exports = {
  rawData,
};
