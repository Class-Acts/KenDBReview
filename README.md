# Project Name

> Clone of a poroduct page from the REI website specifically for boots.

## Related Projects

  - https://github.com/lokisscepter/3-Hz-service.git -> ED
  - https://github.com/lokisscepter/bschaaf1017-service.git -> ME
  - https://github.com/lokisscepter/sq-service.git -> SAM
  - https://github.com/lokisscepter/pvl-serve.git -> PAUL

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> After cloning down this repo this and after running (npm install)

the first thing youll need to do is seed the database.
I have my seed script set up to drop the db if it already exists then create it then create the schema.
The picture URLs for the boot and backpacks are saved in json files and already imported into the seed.js file
so you wont need to worry about a pixabay api key or anything like that.

So Before running the seeding script youll need to be connected to the server to that run (npm run start-prod)
if the console doesnt log "Connected to mySQL" make sure you have mySQL running and
try again then you can run (npm run seed) this should do it for you you can open the mySQL terminal and
run these commands just to double chack and make sure everything is there (SELECT * FROM products;), (SELECT * FROM features;), (SELECT * FROM backpacks;)

the next thing is webpack...
currently the mode for webpack is set to production so if you want to change any react code and want webpack to watch youll need to open the webpack.config.js file and on line 41 change (mode: 'production') to (mode: 'development') then youll want to run (npm run watch) other wise just run (npm run build) and you should be good to go...

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

(psql -U KenSakama postgres < server/postgres/schema.sql)

