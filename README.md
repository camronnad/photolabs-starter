# PhotoLabs 📸

## Overview

PhotoLabs is your go-to single-page application for all things photography. Built with React, our platform gives users the ultimate experience for exploring and interacting with an extensive collection of photographs.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)

## Features

- **Dynamic Home Feed**: Fresh photos loaded straight from our API.
- **Photo Categories**: Explore different styles and themes.
- **Detailed Views**: Click to see every detail and related photos.
- **Love It, Save It**: Like photos to view them anytime.
- **Notifications**: Heart icon in the navigation alerts you to new likes.

## Screenshots

![Homepage](https://github.com/camronnad/photolabs-starter/blob/main/frontend/docs/photo-list-main.png?raw=true)
![Photo Detail](https://github.com/camronnad/photolabs-starter/blob/main/frontend/docs/photo-details.png?raw=true)
![Liked Photos](https://github.com/camronnad/photolabs-starter/blob/main/frontend/docs/liked-photo.png?raw=true)

## Tech Stack

- React.js
- Create React App
- Express.js
- Webpack
- PostgreSQL
- Babel

## Installation

### Pre-requisites

- Node.js
- PostgreSQL

### Steps

1. **Clone the repo**

   \`\`\`
   git clone https://github.com/camronnad/photolabs-starter
   \`\`\`

2. **Navigate to both frontend and backend folders**

   \`\`\`
   cd PhotoLabs/frontend
   cd PhotoLabs/backend
   \`\`\`

3. **Install dependencies**

   Run `npm install` in both directories.

## Usage

### Frontend

1. **Navigate to frontend folder**

   \`\`\`
   cd frontend
   \`\`\`

2. **Start the development server**

   \`\`\`bash
   npm start
   \`\`\`

### Backend

1. **Database Setup**

   - Log in to PostgreSQL: `psql -U development`
   - Create a database: `CREATE DATABASE photolabs_development;`

2. **Environment Variables**

   Copy `.env.example` to `.env.development` and update the values.

3. **Seeding the Database**

   Navigate to `http://localhost:8001/api/debug/reset` in your browser.

4. **Start the backend server**

   \`\`\`
   npm start
   \`\`\`
