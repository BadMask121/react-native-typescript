# react-native-typescript
Typescript Boilerplate for react native and unstated state manager


#### Project Structure

```
/
├── android					Android Native code
├── ios						iOS Native Code
├── assets        Custom Images and fonts
├── src
│   ├── helpers
│   ├── providers       unstated state containers
│   ├── services        Business logic
│   ├── subscriber      unstated subscriber
│   ├── containers				Screens, Localization
│   ├── routes				Router, Navigation
│   ├── components					UI compoments - Screens, Widgets
│   │	    ├── custom			Custom components
│   │	    ├── screens
│   │	  │   ├── styles     Styling for each screens
├── __tests__					Unit Tests
│   ├── presentation
│   └── unit
│   └── integration
├── .babelrc
├── .gitignore
├── .travis.yml					Travis CI
├── tsconfig.json				TypeScript Configuration
├── tslint.js					TSLint configuration - extending AirBnb
├── tsconfig.json
├── app.json
├── index.js					Application Entry point
├── package.json
└── README.md
```
#### Running

Make sure node version installed is `>=8.11.x <=9`

```
yarn install
```

#### Launch

###### iOS

Launch application from XCode

```
npm run ios
```

###### Android

For android, run the Metro Bundler from the terminal

```
npm run start  || npm run android
```

and then launch from IDE.

#### Lint

To run tslint on the application:

```
yarn lint
```

To fix most tslint issues automatically

```
yarn lint:fix
```

#### Unit Test

Unit tests are under `__test__` directory at root.

To run unit test on the application:

```
npm run test
```

To find unit test coverage for the application:

```
npm run test:coverage
```

#### Cheat Sheet


### README TEMPLATE FROM: https://github.com/BadMask121/react-native-typescript-boilerplate/edit/master/README.md MODIFIED BY @BadMask121
