# Cypress Testing Project

This project demonstrates automated end-to-end testing using Cypress and visual testing with Applitools.

## Getting Started

### Prerequisites
- Node.js installed on your machine
- Access to the Applitools platform for visual testing

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <project-directory>

2. Install dependencies:
   ```bash
   npm install
   
3. Install Applitools plugin:
   ```bash
   npm install @applitools/eyes-cypress

4. Set up Applitools
   ```bash
   npx eyes-setup

### Running Tests

1. Headed or Open Mode
   To run test in the interactive mode:
   ```bash
   npx cypress open

2. Headless Mode
   To run test in headless mode:
   ```bash
   npx cypress run
3. Specifying Browser
   To run test in a specific browser (e.g. Firefox):
   ```bash
   npx cypress run --browser firefox

### Visual Testing Steps

1. **Open Applitools**: Use `cy.eyesOpen()` to start visual testing.
2. **Capture Snapshot**: Use `cy.eyesCheckWindow()` to take a snapshot.
3. **Close Applitools**: Use `cy.eyesClose()` to finish visual testing.

### Configuration

Set your Applitools API key as an environment variable:
```bash
export APPLITOOLS_API_KEY=<your-api-key>
```

### Troubleshooting

Use the screenshots generated in the `cypress/screenshots` folder for debugging failed tests.

### Additional Resources

- [Cypress Documentation](https://docs.cypress.io)
- [Applitools Documentation](https://applitools.com/docs)

### Snapshot

![Cypress Snapshot](Cypress%20Snapshot.png)

