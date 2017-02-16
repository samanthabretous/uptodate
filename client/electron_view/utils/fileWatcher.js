import axios from 'axios';

export default (pathWatch, className, lessonId, lessonName) => {
  const watcher = chokidar.watch(pathWatch, {
    ignored: /[/\\]\./,
    persistent: true,
  });
  console.log(pathWatch)
  const axiosCall = (type, urlEndPoint, localPath, data) => {
    let repoPath = pathWatch.split('/');
    repoPath = repoPath[repoPath.length - 1];
    axios[type](`http://localhost:2020${urlEndPoint}`, {
      repoPath,
      localPath,
      data,
      className,
      lessonId,
      lessonName: 'Making things explode is science and is rad',
    });
  };
  watcher
  .on('addDir', (path) => {
    // to prevent ajax call on root directory watch
    if (path !== pathWatch) {
      axiosCall('post', '/api/repoFile/addDir', path);
    }
  })
  .on('unlinkDir', (path) => {
    let repoPath = pathWatch.split('/');
    repoPath = repoPath[repoPath.length - 1];
    axios({
      method: 'delete',
      url: 'http://localhost:2020/api/repoFile/addDir',
      data: {
        repoPath,
        localPath: path,
        className,
        lessonId,
        lessonName: 'Making things explode is science and is rad',
      },
      params: {
        force: true,
      },
    });
  })
  .on('add', (path) => {
    fs.readFile(path, 'utf8', (err, data) => {
      axiosCall('post', '/api/repoFile/addFile', path, data);
    });
  })
  .on('unlink', (path) => {
    let repoPath = pathWatch.split('/');
    repoPath = repoPath[repoPath.length - 1];
    axios({
      method: 'delete',
      url: 'http://localhost:2020/api/repoFile/addFile',
      data: {
        repoPath,
        localPath: path,
        className,
        lessonId,
        lessonName: 'Making things explode is science and is rad',
      },
      params: {
        force: true,
      },
    });
  })
  .on('change', (path) => {
    fs.readFile(path, 'utf8', (err, data) => {
      axiosCall('post', '/api/repoFile/updateFile', path, data);
    });
  })
  .on('ready', () => {
    axiosCall('post', '/api/repoFile/updateFileWatched', pathWatch);
  });
};
