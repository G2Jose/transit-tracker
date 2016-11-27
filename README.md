# Transit-Tracker 🚎

### A simple React app that shows locations of transit vehicles in real-time using the [Restbus API](http://restbus.info/).

## Running 

### Locally Using Node

1. Install node, npm
2. Install npm dependencies `cd transit-tracker && npm install`
3. Start app in dev mode `npm start`

You can now see the app running at `http://localhost:3000`.
Alternatively, you can also a production build using `npm run build`, which will create a `build` folder. This folder can then be served using a static fileserver of your choice, such as nginx.

### Using Docker (Recommended)

1. Install docker
2. Build and run app using the command `docker build -t transit-tracker . && docker run -i -p 9000:9000 transit-tracker`

You can now view the application at `http://localhost:9000`
