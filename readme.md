# Multishare

Multishare is a cloud disk management app, allowing users to browse and manage folders and files. The application is built using React, Redux, and TypeScript, with additional functionality provided by styled-components and socket.io.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Running the Application](#running-the-application)
- [Testing](#testing)
- [Technologies](#technologies)
- [Author](#author)

## Features

- Browse and manage folders and files
- Upload and download content
- View files previews
- Search, sort and filter the content

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/multishare.git
    cd multishare
    ```

2. Install dependencies in the main folder:
    ```bash
    npm install
    ```

3. Install dependencies in the mocked server folder:
    ```bash
    cd src/mocked/server
    npm install
    cd ../../..
    ```

## Running the Application

To start both the frontend and the mocked server simultaneously, use the following command:
    ```bash
    npm run dev
    ```

## Testing

To run the tests, use the following command:
    ```bash
    npm test
    ```

## Technologies

- React
- Redux
- TypeScript
- styled-components
- socket.io

## Author

Bartłomiej Sikora