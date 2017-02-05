const models = require('../db/models/index');

module.exports = {
  user: () => models.user.bulkCreate([
    {
      firstName: 'Valerie',
      lastName: 'Frizzle',
      email: 'vfrizzle@msb.com',
      username: 'vfrizzle',
      password: 'pass1',
      type: 'Instructor',
    }, {
      firstName: 'Keesha',
      lastName: 'Franklin',
      email: 'kfranklin@msb.com',
      username: 'kfranklin',
      password: 'pass2',
      type: 'Student',
    }, {
      firstName: 'Phoebe',
      lastName: 'Terese',
      email: 'pterese@msb.com',
      username: 'pterese',
      password: 'pass3',
      type: 'Student',
    }, {
      firstName: 'Ralphi',
      lastName: 'Tennelli',
      email: 'rtennelli@msb.com',
      username: 'rtennelli',
      password: 'pass4',
      type: 'Student',
    },
  ]),

  class: () => models.class.bulkCreate([
    {
      name: 'Chemistry',
      description: 'Chemistry is Sodium fun!',
      schedule: 'Tuesdays, 3pm',
      location: 'Room 110B',
      enrollmentCode: '123',
    }, {
      name: 'Biology',
      description: 'I find this humerus.',
      schedule: 'Wednesdays, 3pm',
      location: 'Room 510',
      enrollmentCode: '456',
    }, {
      name: 'Physics',
      description: 'Physics is phun!',
      schedule: 'Thursdays, 3pm',
      location: 'Room 510',
      enrollmentCode: '789',
    }, {
      name: 'Math',
      description: 'Don\'t be late for taking the rhombus!',
      schedule: 'Thursdays, 3pm',
      location: 'Room 510',
      enrollmentCode: '101',
    },
  ]),

  lesson: () => models.lesson.bulkCreate([
    {
      name: 'Making things explode is science and is rad',
      lecture: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed est libero, vestibulum eu sodales elementum, euismod eget elit. Nunc erat felis, feugiat et rhoncus nec, bibendum nec nunc. Proin accumsan libero a ipsum iaculis, a lacinia lorem fringilla. Etiam pulvinar risus ut ornare porta. Maecenas pharetra venenatis sagittis. Phasellus sed nunc vitae dolor semper venenatis nec sed sem. Praesent eget posuere lacus. In vel orci id lectus consequat congue. Proin lobortis, erat sit amet scelerisque facilisis, est est ornare urna, ullamcorper tempus sem elit et nulla. Maecenas tempus malesuada nisi, a volutpat nibh vulputate maximus. Sed eu dapibus elit. Curabitur fermentum mauris et erat mattis, eget consequat eros maximus. Phasellus luctus efficitur quam, a porttitor justo. Sed sit amet molestie nunc, a pellentesque ipsum. Ut sodales urna lectus, quis scelerisque ipsum vehicula sed. Sed viverra, orci sed maximus malesuada, dolor neque dictum lorem, vel posuere turpis elit eu purus.',
      link: null,
    },
    {
      name: 'Farts: The Mechanics',
      lecture: 'Praesent dui tortor, egestas et lacus sit amet, elementum eleifend purus. Nulla non accumsan purus, in ultricies ipsum. Duis tristique euismod lorem, quis interdum eros aliquam nec. Nulla sit amet libero congue, commodo purus eget, tempus massa. Aliquam erat volutpat. Nullam aliquam velit lacus, ac pharetra velit finibus non. Ut molestie tincidunt tempus. Suspendisse pharetra aliquam consequat. Mauris pharetra semper tincidunt.  In sit amet ultricies erat, sed varius justo. Phasellus vel risus pharetra ipsum fermentum gravida. In leo justo, hendrerit sit amet sapien eget, hendrerit luctus diam. Ut hendrerit massa lectus, sed vestibulum dolor feugiat vehicula. Vivamus accumsan velit vitae diam tristique posuere. Aenean pharetra condimentum libero lobortis feugiat. Nunc tristique id orci non efficitur. Aliquam aliquet viverra auctor. Ut in ultrices odio.',
      link: 'http://www.soundboardcity.com/fart-machine/',
    },
    {
      name: 'Gravity and why Yo Momma has her own pull',
      lecture: 'In vitae elit et mauris fermentum semper hendrerit porttitor ipsum. Praesent luctus suscipit nulla a feugiat. In faucibus tempor magna non scelerisque. Morbi quis sem dolor. Proin sodales diam sapien, eu consequat neque vehicula a. Nulla porta, tortor vel fermentum mattis, dolor metus venenatis ex, nec feugiat odio nibh ut ex. Vestibulum tincidunt convallis sapien eu aliquam. Ut pulvinar lorem ac molestie luctus. Nam consectetur eleifend volutpat. Ut ante elit, auctor non dolor pharetra, malesuada ultricies nulla. Donec rutrum ultrices elit eget gravida. Proin vel tortor elementum, lacinia enim sit amet, rutrum justo. Morbi tempor urna purus, et fringilla leo tempor nec. Nullam pretium, neque laoreet laoreet volutpat, lectus risus pharetra turpis, eget hendrerit velit justo sit amet enim.  Vivamus egestas tincidunt laoreet. Proin elementum justo in elit elementum, sed consequat velit vulputate. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed ex urna. Morbi vitae venenatis tortor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras posuere vestibulum eros, eget volutpat nisi porta ut. Sed dictum luctus nisl, ac mollis erat iaculis quis. Maecenas aliquam volutpat mauris ut vehicula. Duis vel tincidunt sem, in gravida magna. Curabitur vel venenatis orci, nec interdum dolor. Mauris euismod, dolor id venenatis viverra, nibh sapien maximus turpis, et finibus orci turpis a velit. Maecenas molestie feugiat quam, aliquam egestas velit tincidunt ut. Phasellus eget ligula vestibulum, mattis diam ac, feugiat nulla. Nullam scelerisque justo velit, placerat tristique lorem aliquam et.',
      link: null,
    },
    {
      name: 'Differential Equations & Linear Algebra',
      lecture: 'Maecenas id lectus id metus ullamcorper tempor id a arcu. Pellentesque aliquet varius lectus, non sodales odio volutpat ac. Donec sem risus, consectetur sit amet semper dapibus, efficitur quis purus. Praesent et enim tortor. Aenean ac elit dapibus, convallis diam sit amet, viverra augue. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut semper malesuada congue. Donec in eros sed nunc cursus fermentum ac vel dui. Sed non orci pretium, sollicitudin sapien in, fermentum turpis. Proin molestie sed est nec condimentum. In vitae commodo magna. Nam convallis ante porta, eleifend ipsum et, elementum diam. Sed viverra feugiat ligula, in dapibus risus bibendum ut.  Integer ut orci gravida, vehicula mauris quis, tristique dui. Phasellus laoreet velit quis purus vestibulum scelerisque. Etiam vehicula sollicitudin ante, et ullamcorper lacus fermentum ut. Nulla in leo arcu. Aliquam ultrices sem eget ullamcorper pretium. Vestibulum vel odio eu tellus egestas sollicitudin. Nulla iaculis ac enim sit amet laoreet. Mauris ut libero augue. Vestibulum congue tortor vel lacus vehicula, ac vulputate elit tristique. In hac habitasse platea dictumst. Nulla ex ante, fermentum at elementum laoreet, pretium quis lectus. Donec euismod ligula et porta pulvinar. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Integer interdum magna massa, non pellentesque diam consequat nec. Nunc tincidunt diam in euismod consectetur.',
      link: 'https://www.youtube.com/watch?v=oIxxqztQz3Y',
    },
  ]),
};

