# [1.30.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.29.0...v1.30.0) (2022-05-10)


### ✨ Features

* allow for custom message parameters ([2fac1c5](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/2fac1c527726d0e4f7efacf2d94fa757d85720a0))
* allow for custom message parameters ([dfcbd6d](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/dfcbd6dc11e3a342b8998b39776d9aef9e95ddd7))
* allow for custom message parameters ([3c1476b](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3c1476bbe8a6cb4b83ac17503b3827221f968a7e))

# [1.29.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.28.1...v1.29.0) (2022-05-10)


### ✨ Features

* ability to set up messages to send on event ([ea74f07](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ea74f07de335afe2ae1a2d898e6a479b54f12db6))
* sending custom templates on specified events ([268c14a](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/268c14a4a7ca7a91fa143a85fb455deaf4e43c88))


### 🐛 Bug Fixes

* state machine responsible for updating status to sent ([88c2fdb](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/88c2fdb0c566c2685dbcd6ba2d1fbe65c8cc15d9))


### 🛠 Builds

* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly-test-helpers to v1.17.1 ([f214694](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f214694d683e7239f37e493c6a34499d2e4b4bfd))
* **deps-dev:** update dependency mocha to v10 ([2524fa1](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/2524fa187a3ae757a1339f0ee2f06cf6536f13e5))
* **deps-dev:** update dependency standard to v17 ([5164bda](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/5164bda3724fd6ebf6adf9d608bf035b101775c8))

## [1.28.1](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.28.0...v1.28.1) (2022-03-30)


### 🐛 Bug Fixes

* issue with recipients when sending custom message ([360447e](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/360447edfe8fd3f03ff90b33d71378574c86f129))
* issue with recipients when sending custom message ([1935d94](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/1935d94dd6c2f6999e7e358282992ba282b44a59))


### 📦 Code Refactoring

* pass template name to custom template change history view ([291348d](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/291348d0722288a59d2ebd7119d860c17225e75a))

# [1.28.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.27.0...v1.28.0) (2022-03-24)


### ✨ Features

* tidy up import card template ([9053447](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9053447007adce6a264ae066f46b5d0e72b0a4d4))

# [1.27.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.26.0...v1.27.0) (2022-03-24)


### ✨ Features

* update primary key of custom template recipient model to avoid duplicates ([7df8dd7](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/7df8dd7796f4c4cb71f778809552ade3dc5c3e66))

# [1.26.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.25.0...v1.26.0) (2022-03-24)


### ✨ Features

* add feedback to upload form [sc-13870] ([3a274f4](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3a274f48fad4b44d546a127685feb1fa5666647d))
* add passing csv input [sc-13870] ([9339d66](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9339d669764398931f378abf2457e230a2672817))
* add support for phone num validation [sc-13870] ([1ed6971](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/1ed697115911d96bef5746b1ee315a3e10237513))
* implementation for processing mail csv input [sc-13870] ([9fc1c77](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9fc1c7769ca496de27f9c1b90bbf0fbc89cf076b))
* include csv-parse module [sc-13870] ([da97597](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/da97597a927be8113159ce9ddf58ce7e7637edf9))
* initial stub tests and dummy csv files [sc-13870] ([335953e](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/335953e9d22fffd73e249862a9dcbafc3b19e3c2))
* merge master ([cccee56](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/cccee5673eabfb6f5c1a407798cbdafaede6b486))
* Merge pull request [#515](https://github.com/wmfs/tymly-gov-uk-notify-plugin/issues/515) from wmfs/sc-13870 ([fcda149](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/fcda1492d3a0d4b5e7433f8a3ce0d9166b22f8d5))
* record idx of failed rows [sc-13870] ([fa8cc19](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/fa8cc19d17c620f26a56046924d077cf91c08270))
* update processing of recipients [sc-13870] ([e53aae7](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/e53aae7bcda3d76b08a50a03953ef8e19343faf0))
* update recipient import to expose more data [sc-13870] ([0d20a8f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/0d20a8ff12dfcdaabf961a659804926f159473ef))
* update styling on import recipients [sc-13870] ([8b5a422](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/8b5a422c763551a24853c82cb24ab56f0fc2db20))
* upsert recipients to recipient model [sc-13870] ([0bcf7de](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/0bcf7de6898c20b69740d9dea4adcc34f4fcfb27))


### 🐛 Bug Fixes

* align functions with state-machine expectations [sc-13870] ([8d148f7](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/8d148f7d765e871528b8b946b24b8d9a08c6beeb))
* update tests ([a1834ad](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/a1834ad100032e33f817dfa450819de7fa26c080))


### 📦 Code Refactoring

* add status badge for custom message templates ([3cb8ede](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3cb8ede7b438fe41dacfef6362ff4bbcf1223461))
* previous version title change ([3b73758](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3b737588ae303430b5a4d4ac607a23851dd89398))


### ♻️ Chores

* standard ([c65a24c](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/c65a24c7f3c2ad06c7532fa32ab59dc6a981ccb2))

# [1.25.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.24.1...v1.25.0) (2022-03-23)


### ✨ Features

* display send receipts ([0a71d82](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/0a71d8266487532ddebb430be40d79758b454007))


### 📦 Code Refactoring

* modify text on send message button ([c5c2af5](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/c5c2af5c873e4d1c35d1ce8d3f23fd9d7066d70a))
* reword previous versions label ([6d5e262](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/6d5e2623837c1c75e33d1dda6e6b0126b2369080))

## [1.24.1](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.24.0...v1.24.1) (2022-03-22)


### 🐛 Bug Fixes

* save custom template id to notification model ([83c344e](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/83c344eeb48a38df3f8c68a803c2b34e57f20d68))

# [1.24.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.23.0...v1.24.0) (2022-03-22)


### ✨ Features

* add info on sms/mail pricing ([5ab21fc](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/5ab21fce85c56b1184c1bd7b998065056635c36b))
* adjust formatting of custom template view ([5b6a6fc](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/5b6a6fc79d2b5017761270f2708450c70146c647))
* allow for naming custom templates ([4645ac8](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/4645ac8916bb828d6ff0d7d789fd0cf78f7a0120))
* extend button title to send messages ([b7c1f6a](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/b7c1f6a3232f057a4762dff9987ffd712a1a4af9))
* improve formatting of message type ([ee1e1f1](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ee1e1f1686fbcebbcbfdf6b0ad929d18536aa11c))
* see previous versions ([b62b147](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/b62b14788c02087b4955735e83333ed1932aa432))
* show count of characters in message ([286e354](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/286e354b2de0860e3535bff6b787f1465444daa1))


### 🐛 Bug Fixes

* calculate sms pages with extended gsm characters and certain accented characters ([f257c3c](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f257c3cd14d95447c357bc5c52178a697f9635d3))
* show if template has no name ([ef3c57c](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ef3c57c4284754bc39bd5b35da80f9794858f374))
* sms message rate as pence ([7b1a85f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/7b1a85f89aad11fbc411617d4525a077751269c5))


### 🚨 Tests

* include audit trail state resource ([241b11b](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/241b11bd00028bfa5d28027ca2f21b2ccf5cd4cb))

# [1.23.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.22.0...v1.23.0) (2022-03-17)


### ✨ Features

* ability to send custom message ([b883778](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/b88377864a9d285dea20aafb263ca0331a0cc1c9))
* add message rates ([0e7bbe5](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/0e7bbe5e3104f0ba62804c49484f084a4dc422e3))
* add/remove recipients only ([b002cde](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/b002cdeb3c0363d0236466ce7a134158d63b3b4b))
* adding recipients ([af5524a](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/af5524a16b2b4dba55b76a216d01b8f0b4382b45))
* card template/state machines to view/edit custom template ([9f762bf](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9f762bf02b2216381b62dcd8568b88a1e9aac57a))
* set custom message status to sent ([99bb9a9](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/99bb9a981fa8b99f753d797a0de938312a97f6f3))
* tidier labels for custom templates ([d8328c4](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/d8328c425149f85c7c58949637c32ece2d4b9558))


### 🐛 Bug Fixes

* actual id property ([866b9e7](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/866b9e7a6f6e468238d06ae7cf1ce41d4d7e0aed))
* is this working? ([5f373fc](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/5f373fc234c5b375bdfa2fd9d216545cb72387e4))
* model id for adding recipients ([49180cd](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/49180cd7f3d83bc7b0bc9d15e4a85dd0e1eb7e45))
* no safe and well here ([603e0dc](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/603e0dcceb3be62a3036d1d6e12681ef8beaf210))
* viewing custom template the proper way ([55d5901](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/55d59011d2fcf8224eef4490d082e5e017c89d09))


### ♻️ Chores

* **version:** plugin 1.23.0 [skip ci] ([54e0088](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/54e00885372ca45c3b0038e2fcfa6f350e2c7d97))

# [1.22.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.21.1...v1.22.0) (2022-03-17)


### ✨ Features

* display sms and mail templates [sc-13867] ([0c2f549](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/0c2f54979f189bb30569934795ed3fb8f246bdbe))
* initial commit for view custom templates [sc-13867] ([e5a2f0e](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/e5a2f0e448911eb03b9940e82f5f0969f7ae6e4f))
* tidy up card template [sc-13867] ([ae35db5](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ae35db5c81244f13348848253b9490392450157a))

## [1.21.1](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.21.0...v1.21.1) (2022-03-17)


### 🐛 Bug Fixes

* message type check ([d4f41c4](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/d4f41c414568e76d401c240c0beff3fcd284bd19))


### ♻️ Chores

* add character remaining text ([f9caf54](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f9caf54be540735993a6eaa8f5e203ccffb92761))
* add status to custom template model ([f89c3ac](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f89c3ac9a91a82e7cbb3e99efb1dec826138287d))
* set draft status on custom template ([1e2f293](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/1e2f2935e34b410d10f1142578525d19e8080549))

# [1.21.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.20.0...v1.21.0) (2022-03-17)


### ✨ Features

* add some custom template examples and store info about them ([9e03429](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9e03429a42e6f740929d8bba1e8d2769353dc315))
* allow custom templates to be sent ([acff3ae](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/acff3aed89da5f302c66dea31cad7a16361c1f72))
* allow templates to have label and description ([b25aa4a](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/b25aa4a62fba1f798131f78e70fdd77294d4ffe7))
* change function to list all, pass in option to list custom only ([ab87eff](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ab87eff6ca955622c990d9a86542281f9ae8475e))
* simple state resource to list custom message templates ([ad5fa8e](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ad5fa8ed1467a7f3dafe37a9c5509e6e3fa0192a))
* state resource + service function to simply create custom templates ([ef94128](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ef94128bab92f0b01fd81588bbe108c58a1253e7))
* validate inputs when creating custom template message ([ce00a04](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ce00a0404524dbc407358f9cd31f31fb3cbe3709))


### 🐛 Bug Fixes

* allow custom templates only for creating ([78fbfbf](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/78fbfbfebbfd731c3c92ecd1dc2143d7b49540dd))
* restrictions not needed, enforce custom template required inputs ([93f98d1](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/93f98d1f05b3b0b420bd3dcc710dbd69c019c00b))
* subject only for mail ([f55659d](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f55659d8c44b29a076189503954726a2b3c696c0))
* subject only for mail ([84c2d61](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/84c2d61dcae4a407c50e32b0b3d170c2ffdbf6f0))


### 📦 Code Refactoring

* set up card template for create custom template ([e63cf48](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/e63cf487e3670b22d938d96f0e69ee4c8078000c))


### 🚨 Tests

* more inserts tests ([dc3b041](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/dc3b0412c7fe52860958b6a6f96dcb76fba1622e))
* organise test files better ([609564b](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/609564badee687635db3dbce561d69ebca3b44da))
* send custom mail to multiple recipients ([0c14b0a](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/0c14b0ad2de02dcec73000932374c71ad305e080))

# [1.20.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.19.0...v1.20.0) (2022-03-17)


### ✨ Features

* create custom template admin role ([698ef93](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/698ef9352b2386fd70a2a7a622979b852aa11fb7))


### 🛠 Builds

* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly-test-helpers to v1.14.0 ([ab43df0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ab43df03c2ea0b95e533b0ba8362864cfcac7cab))
* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly-test-helpers to v1.15.0 ([5538d0c](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/5538d0cca18dec2bea3ec3b190f432942c8367c7))
* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly-test-helpers to v1.16.0 ([ad2074f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ad2074f948ac29ed8de52f60e8d9cfdbfcdf018a))
* **deps-dev:** update dependency mocha to v9.2.1 ([901e7cd](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/901e7cd2744aefc6e9c64ac5e560ce9e84b46d3e))
* **deps-dev:** update dependency mocha to v9.2.2 ([8c924f6](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/8c924f6943e3c977ad0f2ee7db651307f5aa43de))

# [1.19.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.18.0...v1.19.0) (2022-01-28)


### 🛠 Builds

* **deps-dev:** update dependency [@semantic-release](https://github.com/semantic-release)/exec to v6.0.3 ([01867ce](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/01867cecb239d5c4d39d73009e9e263d9b28cf79))
* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly to v1.220.0 ([fe4cfc2](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/fe4cfc2143085f2baeb2847265120b32dd2af4d3))
* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly to v1.221.0 ([8c6268f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/8c6268f801e3e51964b01964334581f42deaa26a))
* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly to v1.222.0 ([e7e4225](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/e7e422585e88f7dcfde7d8fc1e0a321d5e664136))
* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly to v1.224.2 ([aa49e52](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/aa49e5252f491969c762494dabd0c072ed0ad625))
* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly-cardscript-plugin to v1.36.2 ([14c5041](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/14c5041ced454a44c34949d6af534e46d57367f4))
* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly-cardscript-plugin to v1.37.0 ([f914f59](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f914f5933f2f9a3d188d038bc5243f6d74250d8e))
* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly-test-helpers to v1.11.0 ([a7d2bb8](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/a7d2bb82f478c353342a3841d859ca5df56de8c8))
* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly-test-helpers to v1.13.0 ([3c6a9bb](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3c6a9bb60fb85fbb6c85876669985ea92823091d))
* **deps-dev:** update dependency chai to v4.3.5 ([be17772](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/be1777272b3a2df16a85531ebe25cedf670dc27b))
* **deps-dev:** update dependency chai to v4.3.6 ([3446eb9](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3446eb915271ac534edc60f6903ee00b6760c7d7))
* **deps-dev:** update dependency mocha to v9.1.4 ([1bd5d55](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/1bd5d554b4e84902724731eeb2d795c09e9a4510))
* **deps-dev:** update dependency mocha to v9.2.0 ([efa379b](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/efa379b0618b477487281ca44892efcb416b12e7))
* **deps-dev:** update dependency semantic-release to v18.0.1 ([4228e24](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/4228e24f112c67de1b3de4ce4b43cb5733ac6f34))
* **deps-dev:** update dependency semantic-release to v19 ([1142e54](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/1142e54758d760eeef3cc259ac58f0287cc87d4e))
* **deps:** update dependency notifications-node-client to v5.1.1 ([2f01421](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/2f0142155df38f0dc89afe21769bce7ea3bf34c6))

# [1.18.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.17.0...v1.18.0) (2021-11-16)


### ✨ Features

* admin tools ([278a3db](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/278a3db763ccedccde85cb9da20c826bc6f98fd8))


### 🐛 Bug Fixes

* namespace from system to tymly ([685b9a3](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/685b9a3f5f55f4f22ff15e11b40ab2722e47c0f4))
* revert circle config, we don't need pg plugin ([6e33c40](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/6e33c40941edead56344c879b6b5cbd48e8bc692))


### 🛠 Builds

* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.176.1 to 1.177.0 ([b36fd44](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/b36fd44c6dbbd691e25152c4e61c5e6b31a6f0c4))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.177.0 to 1.178.0 ([6093738](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/60937381a66716f5ecbe9695c70cfb4ef0d6d849))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.178.0 to 1.179.0 ([b0999d9](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/b0999d9f01fe4f4ec918f6399369980d82e50b93))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.179.0 to 1.180.0 ([9d584c4](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9d584c4055f4e09c655e1756922b80fea1aaabb6))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.180.0 to 1.181.0 ([45d656c](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/45d656c536fd2d70dbf0c928c53f6ab8cf23bfab))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.181.0 to 1.182.0 ([e5b20a1](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/e5b20a1b94141f15a605caeb519a979e9b624e24))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.182.0 to 1.183.0 ([23f028d](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/23f028d0913d815a9b97c143d7c5b9f5250aebf8))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.183.0 to 1.184.0 ([4a36c91](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/4a36c915fa6b9046668cf35d5709030216a026ef))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.184.0 to 1.185.0 ([1cf1e18](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/1cf1e18db6f6ee95b93ef4a755121c63ed776610))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.185.0 to 1.186.0 ([81aeeff](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/81aeeff54233dc3bdca52c9493d80730b194bb78))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.186.0 to 1.187.0 ([fb2918b](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/fb2918beacc5711cca529d9b7a1777e3c36e7eb7))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.187.0 to 1.188.0 ([3bd204f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3bd204fb2f87c7e47d742a4beb5d13155d58a238))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.188.0 to 1.189.0 ([416261c](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/416261ccd66a99b28597d48ab6c0f8a992db93ce))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.189.0 to 1.190.0 ([6eacac1](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/6eacac1932662378d5e7c5c73974793f2055eb80))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.190.0 to 1.191.0 ([4a407e3](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/4a407e3206f5bba5a833bbb5b6a1030efd229590))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.191.0 to 1.192.0 ([88c4a8b](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/88c4a8b9cd4295bd3bedd172bfbbb87eae8e4ef3))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.192.0 to 1.193.0 ([d8e8e54](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/d8e8e54cc5fe7991a3f0d9c9b42957cdce6d7db0))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.193.0 to 1.194.0 ([37cf6b4](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/37cf6b461a32cdc7f008f226c0c8d9b49a388e19))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.194.0 to 1.195.0 ([752b554](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/752b55424dee30aca66f775e7714ec50c7217da8))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.195.0 to 1.195.1 ([9774866](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9774866ab9afec16e6b329a8f29104f211e2f77f))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.195.1 to 1.196.0 ([f6bb35f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f6bb35f3ba83d6e5a7b4a798a15ce7fcb8e5788e))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.196.0 to 1.197.0 ([488cf5b](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/488cf5b0e6395dbdb493c4c8a90874f79581719b))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.197.0 to 1.198.0 ([fbc8063](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/fbc8063ac8ba494649961f6b6b9c1e44a20abb7b))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.198.0 to 1.199.0 ([e72663d](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/e72663d52e59e3119631604aee9397e1261c42c6))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.199.0 to 1.200.0 ([165e0ec](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/165e0ec1f6dce2fd43f5f0a7b71b52a804cf107e))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.200.0 to 1.201.0 ([bfaef14](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/bfaef141e467af66c5be35c0e67092539c4422dd))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.201.0 to 1.202.0 ([35050aa](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/35050aa789e8f602aa360f3ca2eaa4f1712c4a2f))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.202.0 to 1.203.0 ([a1a2fdb](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/a1a2fdb3662703aa1b1144a63922eee7ba7c000c))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.203.0 to 1.204.0 ([501a101](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/501a1010e15fac934ceba0a2d15e766454c0c361))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.204.0 to 1.205.0 ([868bb27](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/868bb27620e88e67a6126130f6981415711538bd))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.205.0 to 1.206.0 ([590d59b](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/590d59b35a642208ad6498f8aaa2a4044c88fac7))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.206.0 to 1.207.0 ([696847b](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/696847b0db082bffcd966c29bd4469a85b95f2ea))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.207.0 to 1.208.0 ([9b9f122](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9b9f1225f9f9ad63be410c0a2b58d26f56dc7479))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.208.0 to 1.209.0 ([f568fa2](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f568fa2d1c7a190591660c4f93f527b222d630a5))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.209.0 to 1.210.0 ([db6ffea](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/db6ffeab82f5eddd0302e1cee2982fc4f66eb040))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.210.0 to 1.211.0 ([9806fac](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9806fac306caa3cfddc4eae9ae3c8dc6db737019))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.211.0 to 1.212.0 ([b48106f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/b48106fe6a9746b9de42bea8bc537baae843c06b))
* **deps-dev:** Bump chai from 4.2.0 to 4.3.0 ([2b66e9f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/2b66e9f5342f0a07e40b0dd1573d15cb0ca60cda))
* **deps-dev:** Bump chai from 4.3.0 to 4.3.1 ([2e6dd83](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/2e6dd83a889e35100feb878fcfd552566970b973))
* **deps-dev:** Bump chai from 4.3.1 to 4.3.2 ([75a1ce7](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/75a1ce7f9532dfb975020cf33c9a4ec36e6e8cec))
* **deps-dev:** Bump chai from 4.3.2 to 4.3.3 ([a4ae849](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/a4ae849ef39afe45b5099ca7fc5ccfeb8622682a))
* **deps-dev:** Bump chai from 4.3.3 to 4.3.4 ([1690c8d](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/1690c8d718438c0bada616035f83e7bdfaddb477))
* **deps-dev:** Bump codecov from 3.8.1 to 3.8.2 ([8c8ac5b](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/8c8ac5b60be28875be9a0e96d99626226d14d041))
* **deps-dev:** Bump codecov from 3.8.2 to 3.8.3 ([3318692](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3318692b41d471b884b73bdd2f8b598ace249870))
* **deps-dev:** Bump mocha from 8.2.1 to 8.3.0 ([be81906](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/be81906481d02798343369be383b3ff46dccb150))
* **deps-dev:** Bump mocha from 8.3.0 to 8.3.1 ([efbb574](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/efbb57424cd63fbe76dce35dfdd00b0f746f4eea))
* **deps-dev:** Bump mocha from 8.3.1 to 8.3.2 ([8e0c9a0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/8e0c9a090fec94950d40eacdd432149f43c7a23d))
* **deps-dev:** Bump mocha from 8.3.2 to 8.4.0 ([a457947](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/a4579473748a9eccb466f5b4786b3dbd7974463a))
* **deps-dev:** Bump mocha from 8.4.0 to 9.0.0 ([bb5e7e8](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/bb5e7e80fec2a20099eb83dd91c837b3524c160b))
* **deps-dev:** Bump mocha from 9.0.0 to 9.0.1 ([48cb330](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/48cb330e9588ea68de13ba5d55f586ece91e6c67))
* **deps-dev:** Bump mocha from 9.0.1 to 9.0.2 ([c3e436a](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/c3e436a8712f9ac0ae339174f54a91a43e45c83e))
* **deps-dev:** Bump mocha from 9.0.2 to 9.0.3 ([f87db5f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f87db5ff9222890727a7cb7f70733d9a1b3faed3))
* **deps-dev:** Bump semantic-release from 17.3.1 to 17.3.2 ([3add760](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3add760508361fc201454175a7a45ea46d26b957))
* **deps-dev:** Bump semantic-release from 17.3.2 to 17.3.3 ([37cd773](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/37cd7737e5d3d4dcff9613bf985862d0ccc8a518))
* **deps-dev:** Bump semantic-release from 17.3.3 to 17.3.4 ([aae479a](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/aae479ab5bc8f17ccd6813f6964c949cccd5d84c))
* **deps-dev:** Bump semantic-release from 17.3.4 to 17.3.5 ([ecca77b](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ecca77b28a47492483a1f8c0470199dcd88b5d09))
* **deps-dev:** Bump semantic-release from 17.3.5 to 17.3.6 ([9b17073](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9b170736fa970af5cbade86a973f68a99af2046b))
* **deps-dev:** Bump semantic-release from 17.3.6 to 17.3.7 ([f3f0ef4](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f3f0ef4458d00c27c55f02ce3e38638f35203e8f))
* **deps-dev:** Bump semantic-release from 17.3.7 to 17.3.8 ([91d13f3](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/91d13f314736bf3f52b930589f8df86ba97a939f))
* **deps-dev:** Bump semantic-release from 17.3.8 to 17.3.9 ([e0e37bb](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/e0e37bb339f9b7cb331aeab1285893872739c38b))
* **deps-dev:** Bump semantic-release from 17.3.9 to 17.4.0 ([f27261e](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f27261e2314b0e4b69ffc1dd76a9575739d60d73))
* **deps-dev:** Bump semantic-release from 17.4.0 to 17.4.1 ([cd191f5](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/cd191f53377117ecbf1061bf4ab35f7fc1069038))
* **deps-dev:** Bump semantic-release from 17.4.1 to 17.4.2 ([82a038d](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/82a038d15ddbc126eb60922aab8bc0a08ef7ea2b))
* **deps-dev:** Bump semantic-release from 17.4.2 to 17.4.3 ([660cf30](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/660cf30c9cadad833b25f3b1364ccc163023acf5))
* **deps-dev:** Bump semantic-release from 17.4.3 to 17.4.4 ([3fe3180](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3fe318092063112182b8e140b3720c2dab2d53e5))
* **deps-dev:** update dependency [@semantic-release](https://github.com/semantic-release)/changelog to v6 ([9197677](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/91976772dc631bf05bafcd163f2c3c32fd589b5a))
* **deps-dev:** update dependency [@semantic-release](https://github.com/semantic-release)/exec to v6 ([055b58c](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/055b58c93ccc73a59d498d083e63fe9aa846b9ff))
* **deps-dev:** update dependency [@semantic-release](https://github.com/semantic-release)/git to v10 ([bb8a9c7](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/bb8a9c78480d295b57e3c54565d82729a8cbc6cb))
* **deps-dev:** update dependency [@semantic-release](https://github.com/semantic-release)/git to v9.0.1 ([82e7e14](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/82e7e14a1546858583faecc3654a5d6ab559eb45))
* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly to v1.212.2 ([a6d79a7](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/a6d79a7651d17883da36b6da9552ca6e9f045c4e))
* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly to v1.212.3 ([7c8d38a](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/7c8d38af446f8b83c30bd640383c2d1569077d7b))
* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly to v1.212.4 ([a731e00](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/a731e005c40ce39d842988c1165dee63588ab530))
* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly to v1.213.0 ([2e8c554](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/2e8c554a96c11888322c70691b8d2167794696f3))
* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly to v1.216.0 ([7911191](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/791119114346dd5b50fee9d952b3eb35ea4255b3))
* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly to v1.217.0 ([48a45b5](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/48a45b5f90f5a597d53a0c28cee125ccce0aabda))
* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly to v1.218.0 ([25dd4f9](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/25dd4f93cb77c2d68e2edfe40d9f8d7dc5b3d908))
* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/tymly to v1.218.1 ([cfb6624](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/cfb6624eb08eb924fa8cfd68748005d4d3cd0beb))
* **deps-dev:** update dependency mocha to v9.1.0 ([f0453f3](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f0453f38fe4909c1327d507de7b818aadcda852f))
* **deps-dev:** update dependency mocha to v9.1.1 ([5ea50b3](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/5ea50b373566bb295c8da33b2e3b13e94300cf87))
* **deps-dev:** update dependency mocha to v9.1.2 ([16ef878](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/16ef87855a678190254e265ab7afcc190d44ce3b))
* **deps-dev:** update dependency mocha to v9.1.3 ([a269f52](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/a269f52ec7a5f5ccd2117c9c701b8b88427d87e8))
* **deps-dev:** update dependency semantic-release to v17.4.5 ([168ff9f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/168ff9f5f5f898bdc6bfe78e369789a2e93392a3))
* **deps-dev:** update dependency semantic-release to v17.4.6 ([ff9c583](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ff9c5838bd115fd4303783a868493de2db7d3430))
* **deps-dev:** update dependency semantic-release to v17.4.7 ([cd37f96](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/cd37f96574612feb34d2c80f7072fa3cb66a3617))
* **deps-dev:** update dependency semantic-release to v18 ([73513c5](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/73513c5246de678c4833da239f808adc9a6516a5))
* **deps-dev:** update dependency standard to v16.0.4 ([d16eb3d](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/d16eb3d19b9ad6069485d97eaa7fd656cf6464b8))
* **deps-dev:** update semantic-release monorepo ([f29c537](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f29c537211ec960b89bfb05d3e2274067e89f779))


### 🚨 Tests

* add extract plugin paths ([e3e0ab5](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/e3e0ab548d7af4a347f6c9923a1e18adcebfe2ba))
* extract out plugin/blueprint paths ([c63acbf](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/c63acbf3aa2dfcd35bd28e22058e4a95ce9cc9a9))
* try removing pg plugin ([26b72d7](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/26b72d74d3b1bd287882245783e6b97804ecf5a7))


### ⚙️ Continuous Integrations

* **circle:** add build-env-vars context [sc-11392] ([36ad870](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/36ad870efa2217edec5ff4eaae33031e6d1f4957))
* **circle:** add postgres db ([794b501](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/794b501d562360377e6766dbfd1e2a74ab229784))
* **circle:** update npm install command [sc-11392] ([d4d2d83](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/d4d2d83c7b3f9973ebe150f0e50f163511c20c3f))


### ♻️ Chores

* add renovate config [ch6600] ([f1deb97](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f1deb97d7169e961aa786951ac502ac897ccab0b))

# [1.17.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.16.0...v1.17.0) (2021-01-05)


### 🛠 Builds

* **deps:** Bump notifications-node-client from 5.0.0 to 5.1.0 ([cfe82e6](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/cfe82e6b580c9270c17aa6691388d4db6e7c20df))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.165.0 to 1.166.0 ([fc00128](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/fc00128ce1516a5f5e88b7e9ef3f202926f57c08))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.166.0 to 1.168.0 ([9db5442](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9db5442ee8355c91cd291fb2b19a5a7a4d4ad766))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.168.0 to 1.169.0 ([c434544](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/c434544bda48fb79efe2aafa7a374c443980e08f))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.169.0 to 1.170.0 ([50896f2](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/50896f27bc89ea14bb46c8c43b538053e2b5bf85))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.170.0 to 1.171.0 ([b81aa0a](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/b81aa0a4cd75e4249333dbffae572d0f3528f9f4))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.171.0 to 1.172.0 ([a8625f7](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/a8625f7c4ab1ac8f2462596af1291c1baa860842))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.172.0 to 1.173.0 ([e927af0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/e927af0b6e8c1bb55cdaaf731461ecf58eb685ec))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.173.0 to 1.174.0 ([196e3c4](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/196e3c48cb4cc3009184596a2c0ae0a0fcd38719))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.174.0 to 1.174.1 ([d5c1195](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/d5c1195d90ee7984389b355ad329dcc2f0adb76a))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.174.1 to 1.175.0 ([ae0ce38](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ae0ce385cf299a969c376aefebf312830ab4082b))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.175.0 to 1.176.0 ([b4b65fe](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/b4b65fe42abaf8a78d92e9a515afb7b7581cf4a1))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.176.0 to 1.176.1 ([75d1c74](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/75d1c740fb6d08df186503525706e2241a72161e))
* **deps-dev:** Bump codecov from 3.8.0 to 3.8.1 ([258165f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/258165fe70eca39fc9710e8b55cc330241124d41))
* **deps-dev:** Bump mocha from 8.1.3 to 8.2.0 ([8f576c3](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/8f576c35f9be4f960efc611621e003f2a25dec36))
* **deps-dev:** Bump mocha from 8.2.0 to 8.2.1 ([b1faa61](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/b1faa61fcfa71f832eacbf44cc13583ff9d041db))
* **deps-dev:** Bump semantic-release from 17.2.0 to 17.2.1 ([947391b](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/947391b92e7dd21ec90110f79c356043e3180003))
* **deps-dev:** Bump semantic-release from 17.2.1 to 17.2.2 ([febd77d](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/febd77d30e6d15b7bb0389cb8fc1c20e70fcfc14))
* **deps-dev:** Bump semantic-release from 17.2.2 to 17.2.3 ([f92b1a6](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f92b1a627e42dbc58dd31bf130a4f44e246a85b7))
* **deps-dev:** Bump semantic-release from 17.2.3 to 17.2.4 ([4ac319a](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/4ac319a73e1bd41fb78eb46a14a0589b0d9c399e))
* **deps-dev:** Bump semantic-release from 17.2.4 to 17.3.0 ([cf02e4a](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/cf02e4a04b0173884b8a1908a259e112405eb4d8))
* **deps-dev:** Bump semantic-release from 17.3.0 to 17.3.1 ([af476ef](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/af476ef2ddb046f0e93f445e3860925ec79bd43a))
* **deps-dev:** Bump standard from 14.3.4 to 15.0.0 ([0b6442e](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/0b6442e6cb0b35497cdfae849ff172d30f30feb8))
* **deps-dev:** Bump standard from 15.0.0 to 15.0.1 ([288b16d](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/288b16d421ca84c6406c8a28bc8f7ed6891fe097))
* **deps-dev:** Bump standard from 15.0.1 to 16.0.0 ([b36ec0c](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/b36ec0c09f46dedd079bba5de7f9c9ae9a90118d))
* **deps-dev:** Bump standard from 16.0.0 to 16.0.1 ([c130b61](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/c130b61f95d764c292c74c084d783af394a31b60))
* **deps-dev:** Bump standard from 16.0.1 to 16.0.2 ([f02f6f7](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f02f6f70a44c1b5942094d1f9501195b5afaac33))
* **deps-dev:** Bump standard from 16.0.2 to 16.0.3 ([5fff634](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/5fff63407f9ea9265a20dc2475e138189d606cb2))


### 📦 Code Refactoring

* remove standard from npm test script [skip ci] ([8e8103f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/8e8103fbe366de4ce18f4bd1f617607384eebb26))


### ⚙️ Continuous Integrations

* **circle:** authenticate Docker image pull [ch2767] ([37e3198](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/37e3198264797cf577c57c106f06af8269acdc16))
* **circle:** cache dependencies [ch2770] ([02a29ec](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/02a29ecb55e38c9694ed14814f09851709131f9d))
* **circle:** cache dependencies [ch2770] ([87c8777](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/87c8777ddc16b88601222f1242b31deb672df114))
* **circle:** separate lint job [ch1009] ([9d41b80](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9d41b803ed59bec682d07ebe93e6180a5cce1283))
* **circle:** update build environment variable context name [ch2771] ([5bc05af](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/5bc05afad59046a926288e05ccbb3d89e9c1a53a))


### ♻️ Chores

* update docs ([9d4de8e](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9d4de8e30b1a8a0a7399814bad668746151bb169))

# [1.16.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.15.0...v1.16.0) (2020-10-14)


### 🐛 Bug Fixes

* update response ([325e8fe](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/325e8fe5e8d88bcf5382498160deec9ec5e066da))
* update response ([64b02ba](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/64b02ba4247eec5f4baf01c57c6306f516a44dbc))


### 🛠 Builds

* **deps:** Bump notifications-node-client from 4.8.0 to 5.0.0 ([975ff24](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/975ff240f71b9104b8d557ef2e6212f1fb566e47))
* **deps-dev:** [Security] Bump codecov from 3.7.0 to 3.8.0 ([1a4e2b2](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/1a4e2b285ab2637a2fc291eed74d41ac05cc0c43))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.152.0 to 1.157.0 ([e968b29](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/e968b2902a0d239fb4f219651614f559da59015a))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.157.0 to 1.159.0 ([0549ef5](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/0549ef52398e12e6ce0cdad870f1e81d05bc2d61))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.159.0 to 1.164.0 ([5ca05f3](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/5ca05f371abf2d16c4b79e6130761ccc7c0ac9b7))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.164.0 to 1.165.0 ([c606622](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/c606622c3c918cb165f1d92434db2e2637d2167c))
* **deps-dev:** Bump cz-conventional-changelog from 3.2.0 to 3.2.1 ([ae18662](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ae18662ec2538e6896c6161b1dc55fb3fd1ee90a))
* **deps-dev:** Bump cz-conventional-changelog from 3.2.1 to 3.3.0 ([5e913da](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/5e913daeee80b22630957173de9f5e947d9e336e))
* **deps-dev:** Bump mocha from 8.0.1 to 8.1.1 ([48d6611](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/48d6611bb0dd941f20f0db951ea844cde21b7a0a))
* **deps-dev:** Bump mocha from 8.1.1 to 8.1.2 ([7a8d32e](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/7a8d32e1696a9e35859aefc3cf158ff9663478e8))
* **deps-dev:** Bump mocha from 8.1.2 to 8.1.3 ([c6c53c5](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/c6c53c5c1499e12db121371d3414b746841defdc))
* **deps-dev:** Bump semantic-release from 17.1.1 to 17.1.2 ([f5e8f7a](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f5e8f7ae10449eab40eef3215ada6e4a5d3cbbc0))
* **deps-dev:** Bump semantic-release from 17.1.2 to 17.2.0 ([1e7d0be](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/1e7d0be4cf4552d44c7e2d6056a002c02979278f))

# [1.15.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.14.3...v1.15.0) (2020-07-16)


### 🛠 Builds

* **deps:** Bump notifications-node-client from 4.7.3 to 4.8.0 ([5f0f444](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/5f0f444dda9ee29191a3c779a81f66cc891b376a))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.144.0 to 1.145.0 ([392c463](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/392c4638c7c0379e2803888e8d0275ba415a8ad5))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.145.0 to 1.152.0 ([88d7030](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/88d703033cc7a9f2384d4892b81ec1276023a825))
* **deps-dev:** Bump semantic-release from 17.0.8 to 17.1.1 ([ab5b570](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ab5b5705687c074c89c7ab46ac0eebb7cb03a3fd))


### ⚙️ Continuous Integrations

* **circle:** use updated circle node image [skip ci] ([ccafdfd](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ccafdfd9db0399e05a6a90ef9499e2d2ad5ec66a))

## [1.14.3](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.14.2...v1.14.3) (2020-06-25)


### 🐛 Bug Fixes

* check message templates is defined before iterating ([884ce35](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/884ce351140bf62a569650cc16e9f501baeac6a1))


### 🛠 Builds

* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.137.2 to 1.137.3 ([6b7dfca](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/6b7dfca95ed61325e705d9b5fdcb880e58be63ae))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.137.3 to 1.138.0 ([1458406](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/14584060e3d37889ef7dac57c14fba603302af8e))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.138.0 to 1.140.0 ([b120da3](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/b120da3bd27331787f28e54cf2f23589e8018875))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.140.0 to 1.141.0 ([299bcd1](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/299bcd1a2df50ef5ea7d8f8a975163c3130eb43e))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.141.0 to 1.142.0 ([28361df](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/28361dfef3eafcd3751207b34d019ffcde2565f2))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.142.0 to 1.143.0 ([ffe9ae6](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ffe9ae6816d872233fdf9478c5cb44f27b3ca8e7))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.143.0 to 1.144.0 ([3266ab9](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3266ab95bc146f8810eb417dbd86f07f7b05585b))
* **deps-dev:** Bump codecov from 3.6.5 to 3.7.0 ([c30d921](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/c30d9211d58b38b4b64e1fb3d13e88f9406e07ec))
* **deps-dev:** Bump mocha from 7.1.2 to 7.2.0 ([d5a6b0d](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/d5a6b0ddb7c15640e6e58cb3859cbf5baf6fc3d0))
* **deps-dev:** Bump mocha from 7.2.0 to 8.0.1 ([1babafe](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/1babafeab389d9c4c2bc2ccd7c438194e1cf962d))
* **deps-dev:** Bump nyc from 15.0.1 to 15.1.0 ([ac1a08f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ac1a08f0265ec31d2125b174d2a67d8afd0737b8))
* **deps-dev:** Bump semantic-release from 17.0.7 to 17.0.8 ([763ba7b](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/763ba7b16210fd16f5fbdcadf857b0cf81dc32d3))
* **deps-dev:** Bump standard from 14.3.3 to 14.3.4 ([da99a7b](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/da99a7bf2dc5a08f18db0b88bfc3ea0b31b63743))

## [1.14.2](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.14.1...v1.14.2) (2020-05-05)


### 🐛 Bug Fixes

* **notify-service:** Remove redundant boot service parameter ([5a87517](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/5a87517df7af6aa4246a265748ac15fd61c62e96))


### 🛠 Builds

* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.135.1 to 1.135.2 ([72f4efb](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/72f4efbecd877dd7c10e7851e30cb525049e3915))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.135.2 to 1.137.1 ([bb2f726](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/bb2f726f30f6997860f0cfe081b0189b654f9e99))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.137.1 to 1.137.2 ([422b5d2](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/422b5d273180dbfb2fa12657de68ab6cf7c342cf))
* **deps-dev:** Bump cz-conventional-changelog from 3.1.0 to 3.2.0 ([dbdbba4](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/dbdbba4ec20037e1f18f67e0eae6e2362bbc048c))
* **deps-dev:** Bump mocha from 7.1.1 to 7.1.2 ([f75212f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f75212f127eb73c94d63c7610b068db5b82f9c25))
* **deps-dev:** Bump semantic-release from 17.0.6 to 17.0.7 ([d3698a4](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/d3698a42b2c27a7630b3e8e7e9c9186ba0df1b98))


### 📦 Code Refactoring

* **tests:** Flip tymly.boot and statebox.startExecution from callback style to async/await ([aa541df](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/aa541dff9c83eed17deb1756e708ea09992b5d23))
* **tests:** Pop missing await in ([8c884a9](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/8c884a90bb25acc68bdc7add49183bd2ca2e887b))

## [1.14.1](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.14.0...v1.14.1) (2020-04-20)


### 🐛 Bug Fixes

* **state-resource:** Removed callback parameter from init method. ([edc9ea6](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/edc9ea6e3176d26ec04034740b6f1449afdc4dc2))


### 🛠 Builds

* **deps-dev:** Bump semantic-release from 17.0.4 to 17.0.5 ([7cb03b1](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/7cb03b171a36573cf1e486cd4a96309d117d5062))
* **deps-dev:** Bump semantic-release from 17.0.5 to 17.0.6 ([ff27142](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ff27142f3e12210fd8ed9976f27593929f5d8ab3))

# [1.14.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.13.0...v1.14.0) (2020-04-16)


### 🛠 Builds

* **deps:** Bump notifications-node-client from 4.7.2 to 4.7.3 ([ad34aeb](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ad34aebdfcd328fcc911b844534ecba30464487e))
* **deps-dev:** Bump [@semantic-release](https://github.com/semantic-release)/changelog from 5.0.0 to 5.0.1 ([6f276d6](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/6f276d6866c7902753263503ee4548d94635fde0))
* **deps-dev:** Bump [@semantic-release](https://github.com/semantic-release)/exec from 3.3.8 to 5.0.0 ([834157c](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/834157cdb808b5de84758adb36a485bd55e982f8))
* **deps-dev:** Bump [@semantic-release](https://github.com/semantic-release)/git from 7.0.18 to 9.0.0 ([0006d7c](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/0006d7c4c1f2c26ce63f5a57506c7433c86efc78))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.119.0 to 1.120.0 ([4294259](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/429425915b24dbe9a4855eb31726a5c2831a4765))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.120.0 to 1.126.2 ([1efc94f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/1efc94f76f9d2e4fb6447395ae46597c172e01ca))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.126.2 to 1.127.0 ([9cc853f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9cc853f171c8531d2c7071a4929b188117964dad))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.127.0 to 1.128.0 ([2528c0e](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/2528c0e6e8429a277b5cdc0f7522254c64b89aee))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.128.0 to 1.129.0 ([0a94415](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/0a94415896ae9b5d8530153e705278048b7dcb19))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.129.0 to 1.130.0 ([bc91722](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/bc91722920a9662e4d041538a2e9fe46d84590d5))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.130.0 to 1.131.0 ([9a37197](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9a371978f403c1faf3570990936c322cb8dfe031))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.131.0 to 1.135.0 ([3ce47cf](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3ce47cf90fee5e41d458c112568bc3a16e738f25))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.135.0 to 1.135.1 ([8435532](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/84355320579baad139fe022aaa7f432bb327edaf))
* **deps-dev:** Bump codecov from 3.6.4 to 3.6.5 ([8ef735d](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/8ef735dc9762a1219207439abb19e35065a71e21))
* **deps-dev:** Bump conventional-changelog-metahub from 4.0.0 to 4.0.1 ([6e82390](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/6e82390fad53cd91eb7401d594211c3568c3d011))
* **deps-dev:** Bump mocha from 7.0.1 to 7.1.0 ([319184a](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/319184a82948faf69e4dd88e71685be1897b68fb))
* **deps-dev:** Bump mocha from 7.1.0 to 7.1.1 ([8a71b7b](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/8a71b7b88ab9da56c20ded895a9d1b958ef0b699))
* **deps-dev:** Bump nyc from 15.0.0 to 15.0.1 ([151ffe6](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/151ffe68fd4d6f1ccf891612548eaad3cafcd4df))
* **deps-dev:** Bump semantic-release from 15.14.0 to 17.0.4 ([9456f05](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9456f050d6b9fa19a2bda14a4fda5561503db617))
* **deps-dev:** Bump standard from 14.3.1 to 14.3.2 ([7dc71db](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/7dc71db3e972c77ab5d234dd7ebb3276d70b6395))
* **deps-dev:** Bump standard from 14.3.2 to 14.3.3 ([06ad064](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/06ad0645bdff72ee8f7d5fb21f66a1bae4f0a84e))


### ⚙️ Continuous Integrations

* **circle:** add context env var config to config.yml ([bcee282](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/bcee282a5f5a09c1e2a8ec75933628c784dd084e))

# [1.13.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.12.0...v1.13.0) (2020-02-02)


### 🛠 Builds

* **deps:** Bump notifications-node-client from 4.7.0 to 4.7.2 ([8ede88d](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/8ede88dc38729a218d05b198c2c0008b5546fc60))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.117.0 to 1.118.0 ([206f504](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/206f50445b2a35c513d470d2d416ab60aadc4579))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.118.0 to 1.119.0 ([1fa5469](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/1fa5469f0003eca34460b20b38e4345958a718c2))
* **deps-dev:** Bump codecov from 3.6.2 to 3.6.3 ([6e93144](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/6e931447cdd3a9c16a17fd6519bd805851303ee0))
* **deps-dev:** Bump codecov from 3.6.3 to 3.6.4 ([9157b68](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9157b68d3e2e02f743502b0dbe198f1bad4b9909))
* **deps-dev:** Bump cz-conventional-changelog from 3.0.2 to 3.1.0 ([ae3b111](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ae3b1119ef2d2a0dbffc7bc62ba0589ee2850ee0))

# [1.12.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.11.0...v1.12.0) (2020-01-28)


### 🛠 Builds

* **deps:** Bump notifications-node-client from 4.5.2 to 4.7.0 ([9b579fb](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9b579fbe9cba7f3590a16e7d16dd234b6bc1e73f))
* **deps-dev:** Bump [@semantic-release](https://github.com/semantic-release)/changelog from 3.0.6 to 5.0.0 ([36ae63b](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/36ae63bb09d6c1b009d660a6de06da523ef64b1d))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.110.0 to 1.112.0 ([3598f5f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3598f5f0486c44ff25fae4996729f8981526d06b))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.112.0 to 1.112.1 ([3d14438](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3d144388b833c1aa1153a2782af6d34943bc3682))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.112.1 to 1.113.0 ([a8eceb2](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/a8eceb20930da42a0bfe1a312a724f0c56e49b24))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.113.0 to 1.114.0 ([53e3a8d](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/53e3a8d7a341e4195113ec97afa4aa2487115455))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.114.0 to 1.115.0 ([2171c87](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/2171c870ba5e541ec12548f8b4794380c9507724))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.115.0 to 1.116.0 ([12b7a87](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/12b7a874644483fb6a0b5d9c40b3cae832a7c603))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.116.0 to 1.117.0 ([0264fe8](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/0264fe87ba4ecac647c93030ebf76c7da8844e15))
* **deps-dev:** Bump codecov from 3.6.1 to 3.6.2 ([8f55e41](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/8f55e415a461702b93b1312ec9361ff82cd0ed12))
* **deps-dev:** Bump conventional-changelog-metahub from 3.0.0 to 4.0.0 ([e53133f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/e53133f58a5a68b4d3b4f14e5b71ff76f9d429af))
* **deps-dev:** Bump mocha from 7.0.0 to 7.0.1 ([ea026d7](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ea026d7e2b03e36d76fe70eb3bc3ba16240d9fe0))
* **deps-dev:** Update standard requirement from 12.0.1 to 14.3.1 ([4d69daa](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/4d69daa1ea11855fc120e7b834151f513aa14570))


### 💎 Styles

* standard --fix ([6242e26](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/6242e267f275b058d94db1ec493fdfd43ed45669))

# [1.11.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.10.1...v1.11.0) (2020-01-14)


### ✨ Features

* get message status get env var in run function ([ae07c44](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ae07c442646b4b9485b493cedaf97273f62b9245))
* Store data about attempted sent messages whether success/failure ([f5acfec](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f5acfec3e1a6ac8accfe6d9d4e5697f872f99650))


### 🛠 Builds

* **deps-dev:** add [@semantic-release](https://github.com/semantic-release)/exec ([2619cda](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/2619cdae4399928d8ac7bc9e9ceec9cca933cf28))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.103.3 to 1.104.0 ([8d63795](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/8d63795f101056c5244c51022f37108ee71a40a3))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.104.0 to 1.105.0 ([807775b](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/807775b8db023a83eae6b3a6eb3b2453dd8531c1))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.105.0 to 1.106.0 ([8cd2722](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/8cd272257b2adc2e004c7839345faeb541ff3bca))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.106.0 to 1.107.0 ([d072915](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/d072915fd691e7387c4e0f1a820c7c087c37599b))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.107.0 to 1.108.0 ([398a7f2](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/398a7f20e25df30a86e40232905d4163cba24bee))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.108.0 to 1.109.0 ([d8975ac](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/d8975ac7a1354b55a969e293b13a5729b02e322d))
* **deps-dev:** Bump [@wmfs](https://github.com/wmfs)/tymly from 1.109.0 to 1.110.0 ([3f414b1](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3f414b1bf50fa3db0d2ac8ed19af3b152d350432))
* **deps-dev:** Bump mocha from 6.2.2 to 7.0.0 ([ee796d9](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ee796d97e2deb8e5525a7d617f45615ddb47a5c8))
* **deps-dev:** bump packages ([090ffdc](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/090ffdc59d242b0f609fd42cf4fedafbbda8a5ad))


### 🚨 Tests

* update tests ([3a59153](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3a59153af00245a0cd7feb8f444c8986c30b1a4b))


### ⚙️ Continuous Integrations

* **circle:** update config ([05deb25](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/05deb256bca5da8da60078577ce97e37d0db4927))


### ♻️ Chores

* [ch279] ([3cf3566](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3cf3566b5ca00965142f0469e0a936fcb49e4d89))
* add plugin.json ([3ac5315](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3ac53156cf8c605a10f116d2d3059c9636c31e7f))
* add version_plugin script ([6c2d5ac](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/6c2d5ac0fa80d74061da719d06661c3ebb236b03))
* update .releaserc.json ([4d0ba2e](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/4d0ba2efc01b2d28a4009d3433537fee69d1ca8b))

## [1.10.1](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.10.0...v1.10.1) (2019-11-14)


### 🐛 Bug Fixes

* statelint warnings ([](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/b9385be))

# [1.10.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.9.1...v1.10.0) (2019-11-13)


### ✨ Features

* better error display getting from registry ([](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/1d61fd6))
* Notify service to accept different api keys for each service ([](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/bf75416))


### 🛠 Builds

* **dev-deps:** update [@wmfs](https://github.com/wmfs)/tymly to 1.100.0 ([](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f7028d6))


### 💎 Styles

* standard fix ([](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/a99ef5f))

## [1.9.1](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.9.0...v1.9.1) (2019-10-07)


### 🐛 Bug Fixes

* update tests and handle errors ([bf41e68](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/bf41e68))
* use notify client on service ([816275d](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/816275d))


### 🛠 Builds

* **deps-dev:** Update [@semantic-release](https://github.com/semantic-release)/git requirement ([b1a0be9](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/b1a0be9))
* **deps-dev:** Update [@semantic-release](https://github.com/semantic-release)/git requirement ([be2e64a](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/be2e64a))
* **deps-dev:** update dev dependancies ([7c8825e](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/7c8825e))
* **deps-dev:** Update mocha requirement from 5.2.0 to 6.1.4 ([f26a160](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f26a160))
* **deps-dev:** Update nyc requirement from 13.1.0 to 14.1.1 ([ce22de3](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ce22de3))
* **deps-dev:** Update semantic-release requirement ([#151](https://github.com/wmfs/tymly-gov-uk-notify-plugin/issues/151)) ([4ad9930](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/4ad9930))


### 📦 Code Refactoring

* error mesasge a bit more descriptive ([5bd5182](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/5bd5182))
* templates via blueprint dir ([1fbb9e1](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/1fbb9e1))


### 📚 Documentation

* add circleci status [skip ci] ([9ec13b2](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9ec13b2))
* JSDocs for get-message-status-via-service/index ([b93eaab](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/b93eaab))
* JSDocs for sending-message-via-service/index ([7fa54d7](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/7fa54d7))


### 🚨 Tests

* Correct tests - look for the changed error code ([282a941](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/282a941))


### ⚙️ Continuous Integrations

* **circle:** add circle ci config ([4e6ce6f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/4e6ce6f))
* **circle:** Update CircleCI config - Travis migration ([8c35329](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/8c35329))
* **travis:** remove Travis config ([2ce4d5a](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/2ce4d5a))
* **travis:** update travis config ([2ed7da5](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/2ed7da5))


### 💎 Styles

* Lint fix ([6c4958d](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/6c4958d))

# [1.9.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.8.0...v1.9.0) (2018-11-30)


### ✨ Features

* refactor sending message to take event as array ([2c496de](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/2c496de))


### 🛠 Builds

* **deps-dev:** update semantic-release requirement ([cb98b29](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/cb98b29))
* **deps-dev:** update semantic-release requirement ([4f93c82](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/4f93c82))
* **deps-dev:** update semantic-release requirement ([268969f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/268969f))
* **deps-dev:** update semantic-release requirement ([f2049df](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/f2049df))
* **deps-dev:** update semantic-release requirement ([9743a35](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9743a35))

# [1.8.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.7.0...v1.8.0) (2018-11-05)


### 🛠 Builds

* **deps:** update notifications-node-client requirement ([0f85bb2](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/0f85bb2))
* **deps-dev:** update semantic-release requirement ([aaaaadd](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/aaaaadd))

# [1.7.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin.git/compare/v1.6.0...v1.7.0) (2018-10-30)


### ✨ Features

* allow to send sms to multiple phone numbers ([8b8191d](https://github.com/wmfs/tymly-gov-uk-notify-plugin.git/commit/8b8191d))

# [1.6.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin.git/compare/v1.5.0...v1.6.0) (2018-10-30)


### ✨ Features

* allow to send mail to multiple email addresses ([a53102e](https://github.com/wmfs/tymly-gov-uk-notify-plugin.git/commit/a53102e))


### 🛠 Builds

* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/changelog requirement ([6a90743](https://github.com/wmfs/tymly-gov-uk-notify-plugin.git/commit/6a90743))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement ([f093276](https://github.com/wmfs/tymly-gov-uk-notify-plugin.git/commit/f093276))
* **deps-dev:** update chai requirement from 4.1.2 to 4.2.0 ([26a3764](https://github.com/wmfs/tymly-gov-uk-notify-plugin.git/commit/26a3764))
* **deps-dev:** update nyc requirement from 13.0.1 to 13.1.0 ([6ba05e4](https://github.com/wmfs/tymly-gov-uk-notify-plugin.git/commit/6ba05e4))
* **deps-dev:** update semantic-release requirement ([ce078f9](https://github.com/wmfs/tymly-gov-uk-notify-plugin.git/commit/ce078f9))
* **deps-dev:** update semantic-release requirement ([ca3a47a](https://github.com/wmfs/tymly-gov-uk-notify-plugin.git/commit/ca3a47a))
* **deps-dev:** update semantic-release requirement ([204374b](https://github.com/wmfs/tymly-gov-uk-notify-plugin.git/commit/204374b))
* **deps-dev:** update semantic-release requirement ([de45e5e](https://github.com/wmfs/tymly-gov-uk-notify-plugin.git/commit/de45e5e))
* **deps-dev:** update semantic-release requirement ([c024263](https://github.com/wmfs/tymly-gov-uk-notify-plugin.git/commit/c024263))
* **deps-dev:** update semantic-release requirement ([186b006](https://github.com/wmfs/tymly-gov-uk-notify-plugin.git/commit/186b006))

# [1.5.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.4.0...v1.5.0) (2018-09-14)


### 🛠 Builds

* **deps:** update notifications-node-client requirement ([5d1eb11](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/5d1eb11))

# [1.4.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.3.0...v1.4.0) (2018-09-14)


### 🛠 Builds

* **deps:** update notifications-node-client requirement ([0c647d1](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/0c647d1))

# [1.3.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.2.0...v1.3.0) (2018-09-12)


### 🛠 Builds

* **deps:** update notifications-node-client requirement ([77d8684](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/77d8684))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement ([15fcc90](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/15fcc90))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement from 1.21.0 to 1.22.0 ([64c8adf](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/64c8adf))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement from 1.22.0 to 1.23.0 ([8e78145](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/8e78145))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement from 1.23.0 to 1.24.0 ([fd39974](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/fd39974))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement from 1.24.0 to 1.25.0 ([518c5f7](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/518c5f7))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement from 1.25.0 to 1.26.0 ([5bd4b69](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/5bd4b69))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement from 1.26.0 to 1.26.1 ([c848712](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/c848712))
* **deps-dev:** update nyc requirement from 12.0.2 to 13.0.1 ([d528e85](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/d528e85))
* **deps-dev:** update semantic-release requirement ([bbaba9c](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/bbaba9c))
* **deps-dev:** update semantic-release requirement ([a58d77e](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/a58d77e))
* **dev-deps:** move to standard 12.0.1 ([b648b32](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/b648b32))

# [1.2.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.1.2...v1.2.0) (2018-09-05)


### 🛠 Builds

* **deps:** update notifications-node-client requirement from 4.1.0 to 4.3.0 ([d2c2a8a](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/d2c2a8a))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement from 7.0.1 to 7.0.2 ([ee68491](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ee68491))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement from 7.0.2 to 7.0.3 ([1f9bb8d](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/1f9bb8d))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement from 1.16.0 to 1.16.2 ([3a47c3f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3a47c3f))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement from 1.16.2 to 1.17.0 ([6afa3ed](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/6afa3ed))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement from 1.17.0 to 1.19.0 ([3721283](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/3721283))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement from 1.19.0 to 1.20.0 ([e545c80](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/e545c80))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement from 1.20.0 to 1.21.0 ([a13ee5a](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/a13ee5a))
* **deps-dev:** update codecov requirement from 3.0.4 to 3.1.0 ([d3ddb6c](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/d3ddb6c))
* **deps-dev:** update semantic-release requirement from 15.9.11 to 15.9.12 ([2986a43](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/2986a43))
* **deps-dev:** update semantic-release requirement from 15.9.9 to 15.9.11 ([6f35d94](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/6f35d94))

## [1.1.2](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.1.1...v1.1.2) (2018-08-22)


### 🐛 Bug Fixes

* Rework so that missing API key is the first check performed ([19da8f4](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/19da8f4))


### 🛠 Builds

* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement from 1.14.0 to 1.15.0 ([cede7e0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/cede7e0))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement from 1.15.0 to 1.15.1 ([7bd4abb](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/7bd4abb))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement from 1.15.1 to 1.15.2 ([0b8a467](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/0b8a467))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement from 1.15.2 to 1.16.0 ([5c5ba18](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/5c5ba18))
* **deps-dev:** update semantic-release requirement from 15.9.5 to 15.9.6 ([d91c403](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/d91c403))
* **deps-dev:** update semantic-release requirement from 15.9.6 to 15.9.8 ([ef14900](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ef14900))
* **deps-dev:** update semantic-release requirement from 15.9.8 to 15.9.9 ([2d5a71b](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/2d5a71b))

## [1.1.1](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.1.0...v1.1.1) (2018-08-06)


### 🐛 Bug Fixes

* personalisation passed properly ([45ce1c3](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/45ce1c3))


### 📦 Code Refactoring

* tidy up ([72bffd7](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/72bffd7))

# [1.1.0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/compare/v1.0.3...v1.1.0) (2018-08-06)


### ✨ Features

* added ability to use params ([7514d83](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/7514d83))
* pass input into send message ([6c79d6b](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/6c79d6b))


### 🐛 Bug Fixes

* return the cb ([867a6e4](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/867a6e4))


### 🛠 Builds

* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/changelog requirement to 2.1.2 ([119664a](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/119664a))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/changelog requirement to 3.0.0 ([ddb3367](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/ddb3367))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement to 6.0.2 ([620cd14](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/620cd14))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement to 7.0.0 ([df8a8d2](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/df8a8d2))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement to 7.0.1 ([621bdce](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/621bdce))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement to 1.10.0 ([d28d733](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/d28d733))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement to 1.11.0 ([4ed8400](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/4ed8400))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement to 1.12.0 ([8481d4d](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/8481d4d))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement to 1.12.1 ([4e3404c](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/4e3404c))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement to 1.13.0 ([af38944](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/af38944))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement to 1.13.1 ([255d865](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/255d865))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement to 1.14.0 ([9bb370e](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/9bb370e))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement to 1.6.0 ([e73edfb](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/e73edfb))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement to 1.8.0 ([2a810d3](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/2a810d3))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/tymly requirement to 1.9.0 ([975748d](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/975748d))
* **deps-dev:** update devDeps ([cbe64a0](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/cbe64a0))
* **deps-dev:** update semantic-release requirement from 15.9.3 to 15.9.5 ([d40b72e](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/d40b72e))
* **deps-dev:** update semantic-release requirement to 15.7.2 ([338483c](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/338483c))
* **deps-dev:** update semantic-release requirement to 15.8.0 ([c531d0f](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/c531d0f))
* **deps-dev:** update semantic-release requirement to 15.8.1 ([d2bd113](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/d2bd113))
* **deps-dev:** update semantic-release requirement to 15.9.1 ([d093d67](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/d093d67))
* **deps-dev:** update semantic-release requirement to 15.9.2 ([844a1eb](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/844a1eb))
* **deps-dev:** update semantic-release requirement to 15.9.3 ([26c34ac](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/26c34ac))


### 🚨 Tests

* Skip tests which rely on GOV_UK_NOTIFY_API_KEY ([e2b04e6](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/e2b04e6))


### ⚙️ Continuous Integrations

* remove deps-dev scoping release ([060d9f8](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/060d9f8))
* update semantic-release script ([2b08c6e](https://github.com/wmfs/tymly-gov-uk-notify-plugin/commit/2b08c6e))
