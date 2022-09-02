# Changelog

## [2.0.0](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/compare/v1.0.6...v2.0.0) (2022-09-02)


### ⚠ BREAKING CHANGES

* use playwright instead of jest and testing-library for testing
* use vite instead of cra for compiling

### Features

* **hooks:** add options to update search-params ([947c187](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/947c1873510da5f52da194218a477e975782a60a))
* **capacitor:** migrate to new version ([19dacfa](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/19dacfad59cf91e3e85bbf26682246722f7b994a))


### Bug Fixes

* **scripts:** breaking changes not recognized as major version ([900e217](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/900e21703c527528666fb58537a07a2e3382b704))
* disable eslint rule on next line ([9269e5f](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/9269e5fa21cc794d29b943f968d15888bca62ebb))
* remove unused variables ([03bd72f](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/03bd72fe2dbf4aefbb54fe151601b9db728335d1))
* **theme:** rename variable that is already declared ([0feb530](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/0feb5309765e5b80caa9094435408815ee161844))
* reset values to `COMPONENTID` and `PROJECTID` ([a997b2d](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/a997b2d4494c1bbe8d18dd90255f0be3533ec58b))
* **scripts:** support `sed` on macOS systems ([0a53db3](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/0a53db3ba118a76ad10f658387fabc158be5ce0f))
* **scripts:** support hyphens in badge version ([56345ea](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/56345ea746d8606476a8996a92dfdf56b8876e88))
* **sso:** update default client and tenant id ([074bde4](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/074bde41fd95d29185f83ca602eb1f7d453b2651))
* **technology-stack:** update resources ([d4feb1d](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/d4feb1d1ae1edba3d29cd475f020eb4d10fa9965))


### Code Refactoring

* remove import of react module ([ef2ab3c](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/ef2ab3c7477530c9d547dbcd98dd469458da3b8c))
* remove unnecessary `React.FC` type ([91920d5](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/91920d56e22e5dc032fb0a7aacc1f00206cb78e8))
* **services:** remove unused code from microsoft-graph endpoint ([38594b0](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/38594b0d55b3700c724a81723116f3e962233e33))
* **tests:** remove unused code ([a3989e7](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/a3989e76a86c9b065985728950c496b1de7183dc))


### Build System

* **husky:** add git hook post-checkout ([188b1f1](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/188b1f1f63e60001f518a41f75b22a11571d8e86))
* **vscode:** add markdownlint extension ([9d00704](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/9d0070430afedfa366a8d7bf7e5ae9599e4249b2))
* **sonarqube:** exclude specific rules from specific files ([69300dd](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/69300dd525afce69b0c3613b6af1a432d6b4c41c))
* **husky:** fix commit-msg hook to handle git parameter ([c307714](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/c307714e4f991928c3267c40e04689db0941fea1))
* rename repository and use link to new url ([55c06c6](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/55c06c67c29a2a6a6433ad6a1eca565f09bb906f))
* **eslint:** replace `eslint-config-react-app` with less and related plugins ([bcd9a40](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/bcd9a40ad530732135c2e6b3a4f66bdbfd0bb7cd))
* replace create-react-app with vite ([45dbf28](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/45dbf2862c08fb471d9919ff81ddb79e0d55b8ca))
* replace testing-library with playwright ([973d42b](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/973d42b5f1a99528542b944146d9c6f99a0c4ce1))
* **deps:** update capacitor dependencies ([736f366](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/736f366a9b66644c2d0c0b12d28803ae6dfcff43))
* **eslint:** update configuration ([1583902](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/15839021c10a14156b6c0453bab548419d31361d))
* **deps:** update dependencies for vite and playwright ([8363f74](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/8363f74a4b7c565703414141c9e05694347ec585))
* **deps:** update dependencies ([62b759a](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/62b759a7bc813151cd02f70e3fe6dcccf0efa945))
* **deps:** update dependencies ([a385347](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/a38534751973cc02d1d024f877675bffe43dcbcc))
* **deps:** update dependencies ([e5305a6](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/e5305a69c16fd6867dd99f1121f623e644950315))
* **deps:** update dependencies ([8bae446](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/8bae44676187659419b8b68f7bde130b3b8c9229))
* **deps:** update dependencies ([227ebd3](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/227ebd3709585a05a1c77206161678b85658eb9c))
* **eslint:** update rule `no-console` ([fdb3ab8](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/fdb3ab889f670db53c86e79b4229f5cf418f0c18))
* **vscode:** update settings ([7472f49](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/7472f49fafdda4a254bda69251d14cdfa2543c4c))


### Documentation

* **README:** add emojis to headlines ([14409e5](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/14409e556c1ce964ef8d8b0b87aeef65b854aa9f))
* **README:** revision of the content ([8947ff0](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/8947ff0aad7c19e1f6ae26cc7b41f1579193a4d0))
* **README:** update further resources ([25bce14](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/25bce14cbf97a791e8edeef81ee6fbfc89e84994))
* **README:** update section about known issues ([3922bcd](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/3922bcda02a79dbe4202ea8875a3ed5b9d2e18a7))
* **README:** update section prerequisites ([f6d2d9c](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/f6d2d9c4ae7f1c8853678ad718521d9edf2a3e12))
* **README:** update technology stack badges ([11ef1a4](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/11ef1a421eb1f6adca43cdbe195f1af92fa8be6a))


### Continuous Integration

* **github:** disable git hooks on release workflow ([c3ab649](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/c3ab649a1bee158d3379bc7e864fb23483fe1e86))
* **jenkins:** improve compatibility with release manager in case of releasing multiple repositories ([fe14964](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/fe149649795ca3f53c79220f276e17b9f8985610))
* **jenkins:** improve error handling on helm upgrade ([3580dbb](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/3580dbb812eefec3101f6f2439e8d0d82064c6a4))
* **github:** support hyphens in badge version ([364419c](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/364419c3d45580b2a598aa16fb487bf2bfd6792e))
* **jenkins:** update expectation of test result reports ([7df657b](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/7df657b20f09a788a85cca77caa24160ba946cf8))
* **jenkins:** use default ods jenkins agent with nodejs v16 ([52a4074](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react-vite-playwright/commit/52a40745fe2189c310b6f845e63eb7e5acc566ef))

## [1.0.6](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/compare/v1.0.5...v1.0.6) (2022-07-03)


### Documentation

* **README:** restore content by unintentionally changing by github actions ([0f5d740](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/commit/0f5d7405239d24f4a33d0f3074aca76aed3c07b3))


### Continuous Integration

* **github:** fix steps to setup quickstarter ([5f4acbd](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/commit/5f4acbd1bc6fae42115fe43c45d44dbb86879873))

## [1.0.5](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/compare/v1.0.4...v1.0.5) (2022-06-21)


### Bug Fixes

* **user-menu:** use logged in user data ([c83f345](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/commit/c83f3453a3aa710310094917c2d50c18ecfaef2d))

## [1.0.4](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/compare/v1.0.3...v1.0.4) (2022-06-20)


### Build System

* **deps:** udpate dependencies ([a79eac9](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/commit/a79eac9e859d72fc92f4717767875af95072f0b6))

## [1.0.3](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/compare/v1.0.2...v1.0.3) (2022-06-14)


### Continuous Integration

* **github:** update semantic-release configuration to update README version ([f72bf49](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/commit/f72bf4919e3f33e805abf2ec07dfd4e32bf51e20))


### Documentation

* update "verify successfully provision" section ([4db37f3](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/commit/4db37f341ba0a1b3cd5e97fd4d93d917dcc711f9))


### Build System

* **deps:** update dependencies ([273a8cb](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/commit/273a8cb70b2eee5eb50632455e615b318caa52bb))

## [1.0.2](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/compare/v1.0.1...v1.0.2) (2022-06-13)


### Bug Fixes

* **semantic-release:** improve feature branches for prereleases ([b34a34f](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/commit/b34a34f43af513ad39c4251d247c17a1021a54b4))


### Continuous Integration

* **github:** add issue templates ([655fdb9](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/commit/655fdb9b829a419deda50f9253c70a35183a0a8d))

## [1.0.1](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/compare/v1.0.0...v1.0.1) (2022-06-13)


### Documentation

* update section about provision quickstarter ([f30c850](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/commit/f30c8509529107e2851f20b19f58ed3cfa1ba309))


### Build System

* **deps:** update dependencies ([f7aa98b](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/commit/f7aa98b4285fc9be25469032f683952a9510cf83))

## 1.0.0 (2022-05-30)


### Build System

* initial version ([6f54a58](https://github.com/SimonGolms/ods-quickstarter-fe-ionic-react/commit/6f54a585e4c6134d90feb72b46bca1f3b5ec0a13))
