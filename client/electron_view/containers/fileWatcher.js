import axios from 'axios';

export default (pathWatch) => {
  const watcher = chokidar.watch(pathWatch, {
    ignored: /[/\\]\./,
    persistent: true,
  });

  watcher
  .on('raw', (event, path, details) => {
    fs.readFile(path, 'utf8', (err, data) => {
      // this will be used in the router for the public folder.
      let startingDirectorForPublic = pathWatch.split('/');
      startingDirectorForPublic = startingDirectorForPublic[startingDirectorForPublic.length - 1];
      axios.post('http://localhost:2020/api/publicFile', {
        publicPath: startingDirectorForPublic,
        localPath: path,
        data,
      });
      console.log('details', details);
    });
  });
};
