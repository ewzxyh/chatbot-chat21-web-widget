export const environment = {
  production: true,
  remoteConfig: false, // for performance don't load settings from remote
  firebase: {
    apiKey: '[REDACTED_GOOGLE_KEY]',
    authDomain: 'chat-v2-dev.firebaseapp.com',
    databaseURL: 'https://chat-v2-dev.firebaseio.com',
    projectId: 'chat-v2-dev',
    storageBucket: 'chat-v2-dev.appspot.com',
    messagingSenderId: '77360455507'
  },
  apiUrl: 'https://api.tiledesk.com/v1/',
  tenant: 'tilechat',
  defaultLang : 'en'
};
