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
      let directoryForRepo = pathWatch.split('/');
      directoryForRepo = directoryForRepo[directoryForRepo.length - 1];
      axios.post('http://localhost:2020/api/repoFile/addDir', {
        publicPath: directoryForRepo,
        localPath: path,
      });
    }
  })
  .on('raw', (event, path) => {
    // this if ensures axios call will only be sent if a file is modified
    if (path.indexOf('.') !== -1 && event === 'change') {
      fs.readFile(path, 'utf8', (err, data) => {
        // this will be used in the router for the public folder.
        let directoryForRepo = pathWatch.split('/');
        directoryForRepo = directoryForRepo[directoryForRepo.length - 1];
        axios.post('http://localhost:2020/api/RepoFile', {
          publicPath: directoryForRepo,
          localPath: path,
          data,
        });
      });
    }
  });
};
