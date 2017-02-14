export default {
  title: 'client',
  childNodes: [
    { title: 'index.html',
      path: '/client/index.html' },
    { title: 'web_view',
      childNodes: [
        { title: 'components',
          childNodes: [
            { title: 'Sidebar',
              childNodes: [
                { title: 'Sidebar.jsx',
                  path: '/client/web_view/components/Sidebar/Sidebar.jsx' },
                { title: 'Sidebar.css',
                  path: '/client/web_view/components/Sidebar/Sidebar.css' },
              ] },
          ] },
        { title: 'containers',
          childNodes: [
            { title: 'Dashboard',
              childNodes: [
                { title: 'Dashboard.jsx',
                  path: '/client/web_view/containers/Dashboard/Dashboard.jsx' },
                { title: 'Dashboard.css',
                  path: '/client/web_view/containers/Dashboard/Dashboard.css' },
              ] },
          ] },
      ] },
  ],
};
