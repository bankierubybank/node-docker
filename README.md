# My nodejs docker lab

### Just to understand how to deploy nodejs as container

### Deployment
* CentOS 7 with docker installed
   * Edit config file at /config/environments/config.json

### Docker Cheat Sheet   
```sh
$ docker build -t netpoleon/node-docker .
$ docker images
$ docker run -p 49160:8080 -d netpoleon/node-docker
$ docker ps
```

Open Web Browser and go to
- [localhost:49160](http://localhost:49160/)

### Node.js Module
| Module Name | Source | Description |
| ------ | ------ | ------ |
| express | [express] | Create REST Server |
| cors | [cors] | Enable CORS in Node.js |
| morgan | [morgan] | HTTP Request Logger |
| helmet | [helmet] | Middleware for more Security |
| winston | [winston] | Log errors to Console and Files |
| compression | [compression] | Compress Response's Body |

### JS Style Guide
Strict to Google JS Style Guide: https://google.github.io/styleguide/jsguide.html with [eslint].
   
   [express]: <https://github.com/expressjs/express>
   [cors]: <https://github.com/expressjs/cors>
   [morgan]: <https://github.com/expressjs/morgan>
   [helmet]: <https://github.com/helmetjs/helmet>
   [compression]: <https://github.com/expressjs/compression>
   
   [winston]: <https://github.com/winstonjs/winston>
   [eslint]: <https://github.com/eslint/eslint>
