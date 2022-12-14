<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>

[travis-image]: https://api.travis-ci.org/nestjs/nest.svg?branch=master
[travis-url]: https://travis-ci.org/nestjs/nest
[linux-image]: https://img.shields.io/travis/nestjs/nest/master.svg?label=linux
[linux-url]: https://travis-ci.org/nestjs/nest
  
  <p align="center">A progressive <a href="http://nodejs.org" target="blank">Node.js</a> framework for building efficient and scalable server-side applications, heavily inspired by <a href="https://angular.io" target="blank">Angular</a>.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore"><img src="https://img.shields.io/npm/dm/@nestjs/core.svg" alt="NPM Downloads" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://api.travis-ci.org/nestjs/nest.svg?branch=master" alt="Travis" /></a>
<a href="https://travis-ci.org/nestjs/nest"><img src="https://img.shields.io/travis/nestjs/nest/master.svg?label=linux" alt="Linux" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#5" alt="Coverage" /></a>
<a href="https://gitter.im/nestjs/nestjs?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=body_badge"><img src="https://badges.gitter.im/nestjs/nestjs.svg" alt="Gitter" /></a>
<a href="https://opencollective.com/nest#backer"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec"><img src="https://img.shields.io/badge/Donate-PayPal-dc3d53.svg"/></a>
  <a href="https://twitter.com/nestframework"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Eat-beat restaurant api

## Dependencies

* Installed [node.js](https://nodejs.org/uk/download/)

* Installed [docker](https://docs.docker.com/compose/install/)

* Installed [docker-compose](https://docs.docker.com/compose/install/)

* Installed [db connector](https://dbeaver.io/download/)

## Installation

```bash
$  npm install --legacy-peer-deps
```
# Running 
## db
  * cd docker-compose

    `docker-compose -f docker-compose.dev.yml up`

  * in root folder
      ```bash
      npm run db:init:dev

## app
### check that port for nodejs server is available
 
    netstat -ano | find "LISTENING" | find "3000"

####If the port is busy

taskkill /F /PID <PID value (last number in span with using port)>

####for example in the !!!

    netstat -ano | find "LISTENING" | find "8081"
    
    TCP    0.0.0.0:8081           0.0.0.0:0              LISTENING       8384
    
    ===============================================
    
    taskkill /F /PID 18564
    
    SUCCESS: The process with PID 18564 has been terminated.

###start app
```bash
# development
$ npm run start

# watch mode
$ npm run start:dev
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

# Stop 
### Attention! If db name will be changed. db should be stopped and then should be run again 
## db
* cd docker-compose

  `docker-compose -f docker-compose.dev.yml down`

#Swagger
http://localhost:3000/api/

# Tools
## DBeaver
**Open DBeaver**

**In the toolbar** `File>Import DBeaver>Project` 

Press Button `Next`

Import `File` nest-prototype-20210312.dbp

Choose checkbox at the `Projects`

Press button `Finish`

**In the toolbar** `Window>Projects`

Choose project in the left sidebar


## Postman
**Open Postman**

**In the toolbar** `File>Import>File`

Press button **Upload Files** and choose file **EAT-BEAT_DBeaver.dbp**



**In the toolbar** `File>Import>File`

Press button **Upload Files** and choose file **nest-prototype.postman_environment.json**
