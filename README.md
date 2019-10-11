# Node, Express, MongoDB and Redis

[![Greenkeeper badge](https://badges.greenkeeper.io/alpersonalwebsite/node-express-mongo-db.svg)](https://greenkeeper.io/)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)


`Node + Express` (locally) connecting, querying, parsing and retrieving to /x endpoint *22 users* from an external sever (`mLab`).

## Installation
```
yarn install
```
## Running the server

### Development
```
yarn run dev
```

### Production
```
yarn start
```

## API endpoints or routes 

### Home or / 
Returns: `object`
```
{
    "message": "Node.js, Express, and MongoDB API!"
}
```
### Users or /users
Returns: 1000 records - `array of objects`
```json
[
    {
        "_id": 0,
        "index": 0,
        "guid": "3f049239-fc26-4ec0-9a15-c36bc9f78e21",
        "isActive": true,
        "age": 38,
        "name": "Frances",
        "lastname": "Tyler",
        "gender": "female",
        "company": "FROLIX",
        "email": "francestyler@frolix.com",
        "phone": "+1 (957) 595-3029",
        "address": "261 Jefferson Avenue, Terlingua, Kentucky, 8445"
    },
    {
        "_id": 1,
        "index": 1,
        "guid": "21491c1e-3c76-490a-8ed8-3769a2aa4447",
        "isActive": true,
        "age": 33,
        "name": "Coleman",
        "lastname": "Kemp",
        "gender": "male",
        "company": "POLARIA",
        "email": "colemankemp@polaria.com",
        "phone": "+1 (958) 454-2237",
        "address": "815 Fairview Place, Machias, Minnesota, 6497"
    }
    ...
    ...
    ...
]
```

#### Query string parameters

**Limit users**

Returns `n` record(s) where `n` is the value (type: Number) of the `limit` key.

Example: `users?limit=1`

Result
```json
[
    {
        "_id": 0,
        "index": 0,
        "guid": "3f049239-fc26-4ec0-9a15-c36bc9f78e21",
        "isActive": true,
        "age": 38,
        "name": "Frances",
        "lastname": "Tyler",
        "gender": "female",
        "company": "FROLIX",
        "email": "francestyler@frolix.com",
        "phone": "+1 (957) 595-3029",
        "address": "261 Jefferson Avenue, Terlingua, Kentucky, 8445"
    }
]
```

Wrong type for `n` value will return *all the users*.
Example: `users?limit=%27Hello%27`

**Setting offset**

Returns from `n` (PRIMARY KEY) where `n` is the value (type: Number) of the `offset` key.

Example: `users?offset=10`

Result:
```json
[
    {
        "_id": 10,
        "index": 10,
        "guid": "8f27a843-f873-496e-a65c-e92f951c7309",
        "isActive": false,
        "age": 22,
        "name": "Olive",
        "lastname": "Holman",
        "gender": "female",
        "company": "XUMONK",
        "email": "oliveholman@xumonk.com",
        "phone": "+1 (851) 470-3513",
        "address": "960 Pulaski Street, Malott, Virginia, 6802"
    },
    {
        "_id": 11,
        "index": 11,
        "guid": "297c956a-9372-4259-8687-0b9d6827586b",
        "isActive": true,
        "age": 25,
        "name": "Craig",
        "lastname": "Holloway",
        "gender": "male",
        "company": "SURELOGIC",
        "email": "craigholloway@surelogic.com",
        "phone": "+1 (996) 546-3352",
        "address": "626 Oxford Walk, Jacksonwald, Washington, 9040"
    }
  ...
  ...
  ...
]
```

## Mongoose deprecations
https://mongoosejs.com/docs/deprecations.html

To avoid...
```shell
(node:17009) DeprecationWarning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
connected to the database
```

We will use:
```javascript
mongoose.set('useUnifiedTopology', true);
```

... before `mongoose.connect()`