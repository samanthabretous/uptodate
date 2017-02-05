import axios from 'axios';

export default (pathWatch) => {
  const watcher = chokidar.watch(pathWatch, {
    ignored: /[/\\]\./,
    persistent: true,
  });

  watcher
  .on('addDir', (path) => {
    // to prevent ajax call on root directory watch
    if (path !== pathWatch) {
      let directoryForPublic = pathWatch.split('/');
      directoryForPublic = directoryForPublic[directoryForPublic.length - 1];
      axios.post('http://localhost:2020/api/publicFile/addDir', {
        publicPath: directoryForPublic,
        localPath: path,
      });
    }
  })
  .on('raw', (event, path) => {
    // this if ensures axios call will only be sent if a file is modified
    if (path.indexOf('.') !== -1 && event === 'change') {
      fs.readFile(path, 'utf8', (err, data) => {
        // this will be used in the router for the public folder.
        let directoryForPublic = pathWatch.split('/');
        directoryForPublic = directoryForPublic[directoryForPublic.length - 1];
        axios.post('http://localhost:2020/api/publicFile', {
          publicPath: directoryForPublic,
          localPath: path,
          data,
        });
      });
    }
  });
};
