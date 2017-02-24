module.exports = [
  {
    name: 'Intro to React',
    lecture: 'Objectives: \n * Describe React in 2-4 sentences and be able to discuss some pros and cons \n * Create a simple, stateless component',
    link: 'https://slides.com/natemaddrey/intro-to-react/live#/',
    classId: 1,
  },
  {
    name: 'React State',
    lecture: 'Setup \n You can get the React libraries through npm. \n `$ npm install` \n You can also link to them using script tags. \n ```<script src="https://fb.me/react-0.14.2.js"></script>``` \n ```<script src="https://fb.me/react-dom-0.14.2.js"></script>``` \n `React.createElement()` \n Documentation \n `React.createElement()` uses JavaScript to construct HTML. The first argument specifies the HTML tag you want to create. The second argument is an object that contains attribute/value pairs for the HTML tag. The third argument is the content or children within the HTML tag you\'re creating',
    link: null,
    classId: 1,
  },
  {
    name: 'React Props',
    lecture: 'Objectives \n * Be able to build basic children components that get properties passed down from parent components \n * Understand how data flows down from parents to children components',
    link: null,
    classId: 1,
  },
  {
    name: 'URLRequest',
    lecture: 'The URI is the Uniform Resource Locator (URL) as defined in the specification, or may be (when it is defined) a Uniform Resource Name (URN) when a specification for this is settled, for servers which support URN resolution. \n Unless the server is being used as a gateway, a partial URL shall be given with the assuptions of the protocol (HTTP:) and server (the server) being obvious. \n\n The URI should be encoded using the escaping scheme described in the URL specification to a level such that (at least) spaces and control characters (decimal 0-31 and 128-159) do not appear unesacaped. \n\n Note. The rest of an HTTP url after the host name and optional port number is completely opaque to the client: The client may make no deductions about the object from its URL.',
    link: 'http://www.soundboardcity.com/fart-machine/',
    classId: 2,
  },
  {
    name: 'OAuth',
    lecture: 'OAuth is an open standard for authorization, commonly used as a way for Internet users to authorize websites or applications to access their information on other websites but without giving them the passwords.',
    link: null,
    classId: 2,
  },
  {
    name: 'The Android Lifecycle',
    lecture: 'Objectives \n * Practice creating a new Android Studio project. \n * Understand what an activity is and the role that it plays in an Android app. \n * Gain familiarity with the activity lifecycle. \n * Learn how to log output to the console. \n * Learn how to save the state of an activity through an orientation change. \n\n What is an Activity? \n\n In an Android app, an activity is a single, focused thing that the user can do. Activities are where the user will interact with your app - they provide a window for your view and an interface for detecting input from the user and displaying output. Each app may have several activities that the user switches between while the app is running. \n\n Programmatically, each activity is typically made up of: \n * A Java class, e.g. MainActivity.java. \n * An XML resource file that defines your activity\'s layout, e.g. activity_main.xml. \n * An entry in AndroidManifest.xml that registers your activity so that it may be invoked by the system.',
    link: 'http://www.soundboardcity.com/fart-machine/',
    classId: 3,
  },
  {
    name: 'XML Layouts',
    lecture: 'Objectives: \n * Learn how activity layouts are built in XML. \n * Practice positioning child views in both LinearLayout and RelativeLayouts. \n * Practice configuring XML attributes for common view widgets. \n * Learn how to make a Toast. \n\n Making Toast 🍞 \n\n A Toast is a popup that provides simple feedback to the user. It only fills the amount of space required for the message and does not remove the current activity from the foreground or block interaction. A Toast will automatically disappear after a short timeout, defined by the duration argument (e.g. Toast.LENGTH_SHORT or Toast.LENGTH_LONG).',
    link: null,
    classId: 3,
  },
  {
    name: 'Intro to Tensor Flow',
    lecture: 'Summary: Tensorflow (TF) is Google’s attempt to put the power of Deep Learning into the hands of developers around the world. It comes with a beginner & an advanced tutorial, as well as a course on Udacity. However, the materials attempt to introduce both ML and TF concurrently to solve a multi-feature problem — character recognition, which albeit interesting, unnecessarily convolutes understanding. In this series of articles, we present the gentlest introduction to TF that starts off by showing how to do linear regression for a single feature problem, and expand from there.',
    link: 'https://www.youtube.com/watch?v=oIxxqztQz3Y',
    classId: 4,
  },
];
