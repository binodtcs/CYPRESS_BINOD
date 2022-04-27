// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
Cypress.Commands.add('upload_validate',(picfile)=>{
    cy.get('#upload_cv').attachFile(picfile)
    cy.get('#validate_cv').contains(picfile)
})
//
Cypress.Commands.add('Open_page_screenshot',(inputfile)=>{
    cy.fixture(inputfile).then(data =>{
        cy.visit(data.url)
        })
        cy.screenshot({overwrite: true}) 
})

Cypress.Commands.add('choose_language',(inputfile)=>{
    cy.fixture(inputfile).then(data=>{
        cy.get('select[id="select_lang"]').select(data.language)
        cy.get('#select_lang_validate').contains(data.language,{matchCase: false}) 
        cy.screenshot({overwrite: true})   
    })

})

// Multiple file upload & validate

//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

