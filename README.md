# Ethereum Express App

## Description
Ethereum Express App is a simple web application built with Node.js and Express that allows users to check the balance of any Ethereum wallet address. Utilizing the Web3.js library, this application connects to the Ethereum blockchain via Infura, providing real-time balance information for specified wallet addresses.

## Features
- **Check Wallet Balance:** Enter any Ethereum wallet address to retrieve its current balance.
- **User-Friendly Interface:** Rendered using EJS for a clean and responsive user experience.
- **Static File Serving:** Easily serve static assets like CSS and JavaScript files from the public directory.

## Technologies Used
- **Node.js:** JavaScript runtime for building the server-side application.
- **Express:** Web framework for Node.js to handle routing and middleware.
- **Web3.js:** Library for interacting with the Ethereum blockchain.
- **EJS:** Templating engine for rendering HTML views.

## Getting Started

### Prerequisites
- Node.js (version 12 or higher)
- npm (Node package manager)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/liteeqation/Ethereum-Express-App.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Ethereum-Express-App
   ```
3. Install the required dependencies:
   ```bash
   npm install
   ```

### Configuration
- Create a `.env` file in the root directory and add your Infura API key:
  ```
  INFURA_API_KEY=your_infura_api_key
  ```

### Running the Application
1. Start the server:
   ```bash
   npm start
   ```
2. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.
