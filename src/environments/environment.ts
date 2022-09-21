// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  firebase: {
    projectId: 'login-portfolioweb',
    appId: '1:146216108630:web:ddf2de343074b3609df1f7',
    storageBucket: 'login-portfolioweb.appspot.com',
    apiKey: 'AIzaSyCTT9odtJJnm7ItWjY9xQmODzBrg-0Tq7s',
    authDomain: 'login-portfolioweb.firebaseapp.com',
    messagingSenderId: '146216108630',
  },
  production: false,
  api: 'http://localhost:8080'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
