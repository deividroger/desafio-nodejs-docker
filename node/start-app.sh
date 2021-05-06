npm install
dockerize -wait tcp://db:3306 -timeout 60s  node index.js