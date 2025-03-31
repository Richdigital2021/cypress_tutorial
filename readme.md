# Cypress Login Tests for SauceDemo

## Overview

This project contains automated tests using [Cypress](https://www.cypress.io/) to verify the login functionality of [SauceDemo](https://www.saucedemo.com/). The tests cover different user scenarios, including successful and failed logins.

## Prerequisites

Before running the tests, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html)

## Installation

1. Clone this repository:
   ```sh
   git clone https://github.com/Richdigital2021/cypress_tutorial.git
   ```
2. Navigate to the project directory:
   ```sh
   cd cypress_tutorial
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Test Structure

The tests are written in JavaScript using Cypress and are stored in the `cypress/integration` folder.

### Test Cases

The `login.spec.js` file contains the following test cases:

1. **Successful Login**: Verifies a standard user can log in successfully.
2. **Failed Login (Locked Out User)**: Ensures an error message is displayed when a locked-out user attempts to log in.
3. **Problem User Login**: Tests the behavior of a `problem_user` login.
4. **Performance Glitch User Login**: Tests the login for `performance_glitch_user`.
5. **Error User Login**: Tests the login for `error_user`.
6. **Visual User Login**: Tests the login for `visual_user`.

## Running the Tests

### Using Cypress Test Runner

Run the following command to open Cypress and execute tests interactively:

```sh
npx cypress open
```

Select the test file (`login.spec.js`) from the Cypress Test Runner UI.

### Running Tests in Headless Mode

To run the tests in headless mode, execute:

```sh
npx cypress run
```

## Fixtures

The project uses Cypress fixtures to store element locators in `cypress/fixtures/elementLocators.json`. This ensures better maintainability and separation of concerns.

## Custom Commands

A custom `cy.login(username, password)` command is used to simplify login steps. This command is defined in `cypress/support/commands.js`.

## Reporting

To generate a report after running the tests, you can use the following command:

```sh
npx cypress run --reporter mocha
```

## Contribution

Feel free to fork this repository and submit pull requests for improvements.

## License

This project is licensed under the MIT License.

---

### Author

Richard Akintunde
