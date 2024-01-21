# Simple Tweet

This project is a simple Twitter clone built with a MERN stack (MongoDB, Express, React, Node.js).

## Live
https://tweetx-liard.vercel.app/


## Project Structure

The project is divided into two main directories:

- `client/`: Contains the frontend code written in React.
- `server/`: Contains the backend code written in Node.js with Express.

## Backend

The backend is a Node.js server built with Express. It uses MongoDB as its database.

### Setup

1. Clone the repository: `git clone https://github.com/apurbar06/MERN_things.git`
2. Navigate to the server directory: `cd Simple_Tweet/server`
3. Install dependencies: `npm install`
4. Create a `.env` file in the root of the `server/` directory with the following variables:

    ```env
    MONGO_URL=<YOUR_MONGODB_URL>
    PORT=3005
    SECRET=G*advd^&jKSAI&^%$
    ```

5. Start the server: `npm run dev`

If everything is set up correctly, the server will run at `http://localhost:3005`.

### API Endpoints

The server provides the following API endpoints:

- `/api/signup`: POST, body: `userName`, `password`, `email`
- `/api/login`: POST, body: `password`, `email`
- `/api/me`: GET, requires authentication
- `/api/users`: GET, requires authentication
- `/api/following`: GET, requires authentication
- `/api/followers`: GET, requires authentication
- `/api/follow`: POST, body: `followinguserCode`, requires authentication
- `/api/tweets`: POST, body: `tweet`, requires authentication
- `/api/tweets`: GET, requires authentication

## Frontend

The frontend is built with React.

### Setup

1. Navigate to the client directory: `cd Simple_Tweet/client`
2. Install dependencies: `npm install`
3. Start the client: `npm start`

If everything is set up correctly, the client will run at `http://localhost:3000`.

## Contributing

Contributions are welcome. Please open a pull request with your changes.

## License

This project is licensed under the terms of the MIT license.