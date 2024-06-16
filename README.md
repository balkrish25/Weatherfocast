# Weather Dashboard

## Overview

Weather Dashboard is a React application that displays the current weather and a 5-day forecast for a given city. It allows users to search for cities, view weather details, and manage a list of favorite cities. The application uses the OpenWeatherMap API to fetch weather data and a JSON server to store favorite cities.

## Features

- Search for a city and display the current weather and 5-day forecast.
- Add cities to a list of favorites.
- Remove cities from the list of favorites.
- Display weather data for favorite cities.
- Toggle between Celsius and Fahrenheit.
- Remember the user's last searched city using local storage.

## Libraries Used

- React: For building the user interface.
- Axios: For making HTTP requests to the OpenWeatherMap API and the JSON server.
- JSON Server: To create a simple REST API for storing and managing favorite cities.
- React Modal: For creating modal dialogs.

## Installation

### Prerequisites

- Node.js (v14 or higher recommended)
- npm (Node package manager)

### Setup

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd <repository-directory>

2. **Install Dependencies**:
   ```bash
    npm install

3. **Create a db.json file**:
   ```bash
   Create a db.json file in the root of your project with the following content:
   {
     "favorites": []
   }

4. **Obtain an OpenWeatherMap API Key**:
   - Go to OpenWeatherMap and sign up for a free account.
   - Once logged in, navigate to the "API keys" tab in your profile.
   - Create a new API key and copy it.
   - Replace the placeholder YOUR_ACTUAL_API_KEY_HERE in the WeatherDashboard component with your actual API key.


### Running the Application


1. **Start the JSON Server**:
   ```bash
   npx json-server --watch db.json --port 5000

2. **Start the React Application**:
   ```bash
   npm start

3. **Access the Application**:
   -Open your web browser and navigate to http://localhost:3000.

