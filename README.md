# QUBICA FrontEnd Automation Testing using Cypress.io

Cypress.io is a **free** basic tool that can be used in automation testing through JavaScript coding.
Cypress is a powerful tool (so they say), that can keep a step-by-step before and after every event.


## Pre-requirements
---
1. NodeJS v12.16.3 (based on the version during development time)  
2. NPM 6.14.4 (based on the version during development time)  
3. Chrome browser (latest)  


## How to use
---
If its your first time to clone *automation*, you will need to install all dependencies required by typing "```npm install```" in terminal (same folder you find package.json)  
In order to run Cypress GUI, using terminal go to <repo folder>/automation/web where you can type "```npx cypress open```", that will start Cypress GUI, were you can see all Spec(s) that you can run.  

Once Cypress GUI shows up you will get see all test specs which exist inside "integration" folder, any extra files such as images to be used in test, or input file and so on will exist inside "fixtures" folder.  
"Support" folder will contains any customized functions that can be used by cypress in testing, so we create new cypress command in support folder ```.js``` file and it will be picked up by cypress and used on the go.

Once you select a test Spec to run, Cypress will open a new chrome browser, with 2 frames.
The right frame will have the tests and all event steps, the left is the actual test running visually.

Cypress shows all steps taken within a test, and it will record before and after each step (but does not save the run).

In order to run test specs in CLI, type "```npx cypress run```" will execute all test specs.  

## Reporters
---

The reports of the executions are saved in the file /mochawesome-report after the execution of the tests.
