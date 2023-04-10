# Crypto Dashboard

## About

Crypto Dashboard is a TypeScript-based web application built with Node.js and Fastify that fetches data from multiple cryptocurrency exchanges, including Kraken and Binance, and displays it in a centralized dashboard. The purpose of this application is to provide a comprehensive view of your cryptocurrency assets, including spot and staking assets, in one place.

## Getting Started

To run the application, you will need to have Node.js (18 or higher) and NPM installed on your machine.

Clone the repository:

```javascript
~ git clone https://github.com/<username>/crypto-dashboard.git
```

### Server

Install the dependencies by running the following commands:

```javascript
~ npm install
```

Create a .env file in the root directory of the project and add your API keys for each exchange. The following variables are required:

```javascript
KRAKEN_API_KEY=<your-kraken-api-key>
KRAKEN_SECRET=<your-kraken-secret>
```

Start the server by running the following command:

```javascript
npm run start
```

This will start the server on port 3000 by default.

### Client 

Navigate to `client` folder and install the dependencies by running the following commands:

```javascript
~ cd client
~ npm install
```

Start the client app by running the following command:

```javascript
npm run dev
```

## Currently supported exchanges

- [Kraken](https://www.kraken.com/)

## Currently supported endpoints

```javascript
POST /kraken/balance
POST /kraken/staking
POST /kraken/trade-history
POST /kraken/ledgers
```

## Contributing

Contributions are welcome! If you have any ideas or suggestions for improving the application, please open an issue or submit a pull request.
