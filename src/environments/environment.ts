// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: '[REDACTED_GOOGLE_KEY]',
    authDomain: '<your-project-authdomain>',
    databaseURL: 'https://chat21-web.firebaseio.com',
    projectId: 'chat21-web',
    storageBucket: '<your-storage-bucket>',
    messagingSenderId: '680009090540'
  }

  // firebase: {
  //   apiKey: '[REDACTED_GOOGLE_KEY]',
  //   authDomain: '<your-project-authdomain>',
  //   databaseURL: 'https://bppmobileintranet-chat.firebaseio.com',
  //   projectId: 'bppmobileintranet-chat',
  //   storageBucket: '<your-storage-bucket>',
  //   messagingSenderId: '478926705150'
  // }

  
  
};


