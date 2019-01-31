# calendar
### calendar - Schedule event’s

# start project - docker
### `docker-compose up`

# start project - without docker
### requirements
```js
install:
    - node
    - npm
    - mongo
    - redis
configs:
    - calendar/calendar-server/config/default.json
```
### client
```js
cd calendar-client
npm i
npm run start
```
### server
```js
cd calendar-server
npm i
npm run dev
```