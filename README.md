# UpToDate

UpToDate is a content management tool built to help both instructors and students keep up with a fast paced programming curriculum.

UpToDate is made up of two essential parts:
  * The web app for students
  * And the desktop for educators

The main function of the desktop app is to watch the file path of whatever project directory the user drags and drops onto it. Once a lesson is started, henceforth every time a change is made in the watched directory an API call is triggered to emit a socket to our server which then updates the online text editor in near-real-time with the contents of the directory.

The desktop app also allows users to manage the classes they're teaching, the lessons for those classes, and create new lessons.

The web app was built with both students and educators in mind.

Students on the web app can:
  * Enroll for classes
  * Stay up to date with all upcoming deadlines and assignments
  * Submit work
  * Review grades
  * Always have the most up to date rendition of their instructor's code.
  * Ask anonymous questions to the instructor using our vote system

Instructor on the web app can:
  * Create new classes
  * Create new assignments
  * Manage Classes
  * Review student submitted work
  * Create new lessons

---

### UpToDate is built on a number of open source projects:

* [React.js](https://facebook.github.io/react/)
  * An open-source JavaScript library for building user interfaces developed and maintained by Facebook, Instagram, and a community of individual developers and corporations.
* [Redux](http://redux.js.org/)
  * A predictable state container for JavaScript apps. 
* [Node.js](https://nodejs.org/en/)
  * An enviorment for easily building fast and scalable network applications in JavaScript.
* [Yarn](https://yarnpkg.com/en/)
  * Fast, reliable, and secure dependency management.
* [Express](http://expressjs.com/)
  * A Node.js framework designed for building web applications and APIs
* [Webpack](https://webpack.github.io/)
  * A module bundler. webpack takes modules with dependencies and generates static assets representing those modules.
* [Electron](http://electron.atom.io/)
  * An open-source framework developed by GitHub. It allows for the development of desktop GUI applications using the Node.js runtime and the Chromium web browser, originally used for the development of backend web applications.
* [Chokidar](https://github.com/paulmillr/chokidar)
  * A wrapper for the Node.js core fs module.
* [CodeMirror](https://codemirror.net/)
  * A versatile text editor implemented in JavaScript for the browser, specialized for editing code.

---

### Installation

UpToDate requires [Node](https://nodejs.org/en/) and al global installation of [Webpack](https://webpack.github.io/) to run.

```sh
$ npm install
$ npm install -g webpack
$ yarn
```

To run only the web app:

```sh
$ yarn run web
```

To run both the desktop and web app:

```sh
$ yarn run electron
```

---

### Frequently Asked Questions:

<dl>
  <dt>Can students write their own code in the online text editor?</dt>
  <dd>No. However, this is something we hope on implenting in the future.</dd>

  <dt>Can code be run on the online text editor?</dt>
  <dd>At the moment, no. But like the previous question, we very much hope to eventually implement a REPL.</dd>

  <dt>Can instructors start lessons from the web app?</dt>
  <dd>No. Instructors can create new lessons from the web, but cannot start a lesson. Instructors require the desktop version of UpToDate to watch a file path on their computer and begin a lesson.</dd>
</dl>
