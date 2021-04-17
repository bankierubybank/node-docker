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
$ docker images
```

Open Web Browser and go to
- [localhost](http://localhost:49160/)

### Node.js Module
| Module Name | Source | Description |
| ------ | ------ | ------ |
| node-powershell | [node-powershell] | Invoke PowerShell Commands on Node.js |
| express | [express] | Create REST Server |
| jsonwebtoken | [jsonwebtoken] | Maintain user's web token |
| body-parser | [body-parser] | Parse HTTP Request's Body |
| cors | [cors] | Enable CORS in Node.js |
| morgan | [morgan] | HTTP Request Logger |
| node-schedule | [node-schedule] | Schedule Jobs in Node.js |
| helmet | [helmet] | Middleware for more Security |
| compressing | [compressing] | Compress files into .zip |
| winston | [winston] | Log errors to Console and Files |
| mongoose | [mongoose] | MongoDB ODM for Node.js |
| compression | [compression] | Compress Response's Body |
| googleapis | [googleapis] | Upload backup files to Google Drive |
| ldapjs-client | [ldapjs-client] | Authentication with Active Directory |
| nodemailer | [nodemailer] | Send E-Mail |

### JS Style Guide
Strict to Google JS Style Guide: https://google.github.io/styleguide/jsguide.html with [eslint].

   [Vue.js]: <https://vuejs.org/>
   [Vue CLI]: <https://cli.vuejs.org/>
   [PowerShell Core]: <https://docs.microsoft.com/en-us/powershell/scripting/setup/installing-powershell?view=powershell-6>
   [PowerCLI]: <https://blogs.vmware.com/PowerCLI/2017/04/powercli-install-process-powershell-gallery.html>
   [node.js]: <http://nodejs.org>
   [MongoDB]: <https://www.mongodb.com/download-center/community>
   
   [node-powershell]: <https://github.com/rannn505/node-powershell>
   [node-schedule]: <https://github.com/node-schedule/node-schedule>
   [express]: <https://github.com/expressjs/express>
   [body-parser]: <https://github.com/expressjs/body-parser>
   [cors]: <https://github.com/expressjs/cors>
   [morgan]: <https://github.com/expressjs/morgan>
   [helmet]: <https://github.com/helmetjs/helmet>
   [compressing]: <https://github.com/node-modules/compressing>
   [compression]: <https://github.com/expressjs/compression>
   [mongoose]: <https://github.com/Automattic/mongoose>
   [googleapis]: <https://github.com/googleapis/google-api-nodejs-client>
   [ldapjs-client]: <https://github.com/zont/ldapjs-client>
   [jsonwebtoken]: <https://github.com/auth0/node-jsonwebtoken>
   [nodemailer]: <https://github.com/nodemailer/nodemailer>
   
   [winston]: <https://github.com/winstonjs/winston>
   [pm2]: <https://github.com/Unitech/pm2>
   [eslint]: <https://github.com/eslint/eslint>
