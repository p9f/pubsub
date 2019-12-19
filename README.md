# In Browser Distributed Key / Value Database

## Goal

Implement a in-browser distributed database, using a socket.io pubsub backend.

### Key / Value Database

```
SET a 2

GET a
// return 2
```

### Distributed

Data can be set no a browser and query from another.

### In Browser

Only file to modiy - `index.html`.

## Get Started

```bash
yarn install
yarn dev
open http://localhost:3000
```

requirements:

- node.js

## Going Further

- handle new node connections / disconnections.
- ACP theorem?
- Partition the data.
- Expirations of keys.
