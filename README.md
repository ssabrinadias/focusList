# FocusList

### Description

The project aims to organize tasks in a TODO list format. Each task can be created, modified or completed

### Features

- Add new tasks
- Modify existing tasks
- Mark tasks as completed
- Filter tasks by name

### About

This project is a React application with Vite. It includes various tools and libraries for development, testing, and building the application.

The architecture is based on a Component-Oriented Architecture (COA) where the primary focus is on building the system from modular and independent components. In this approach, each component represents a specific functionality of the system and interacts with other components in a well-defined manner.

This architecture allows for greater modularity, reusability, and maintainability of the system. Components can be developed, tested, and updated separately, promoting a more flexible and scalable system. Changes in one part of the system have a controlled impact on other parts.

### Version

- Project Version: `0.0.0`
- Node Version: `18.18.0`

### Technologies

- React
- Vite
- TypeScript
- Material-UI (v4)
- React Query
- React Router DOM
- Axios
- Formik
- Yup
- React Toastify
- Jest
- React Testing Library
- Storybook
- MSW
- Git Actions
- Husky

## Installation

To get started with the project, you need to have Node.js (v18.18.0) and Yarn installed. Follow the steps below to set up the project:

1. Clone the repository:

   ```bash
   git clone https://github.com/ssabrinadias/focusList
   cd focusList
   ```

2. Install dependencies:

   ```bash
   yarn install
   ```

## Scripts

### Development

To start the development server, run:

```bash
yarn dev
Running on port http://localhost:3001/
```

To start the server pointing to the development mock MSW, run:

```bash
yarn dev:mock
Running on port http://localhost:3001/
```

To run the tests, run:

```bash
yarn test
```

To run the storybook, run::

```bash
 yarn storybook
 Running on port http://localhost:6006/
```

### Running Git Actions

This project is configured to automatically run Git Actions whenever there is a push to the repository. The configured actions are responsible for:

Running automated tests.
Building the project.
This ensures that all submitted changes are tested and the project is ready to use.

### Note

If you need to change the Node.js version, you can use [NVM (Node Version Manager)](https://github.com/nvm-sh/nvm) to manage multiple Node.js versions on your machine.
