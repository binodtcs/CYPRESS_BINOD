const dummy = require('dummynator');
const fullname = dummy.person.firstName() + ' ' + dummy.person.lastName()

describe('My First test case for Prod', function(){
    it('Open the page & take screenshot',function(){
        
        cy.Open_page_screenshot('testdataprd')
        cy.screenshots_datetime_format('Initial_screenshot')
                     
    })

    it('Enter the experience',function(){
        cy.get('#exp').type(dummy.random.number())
    })
    
    it('Enter other details',function(){
        cy.get('#check_javascript').check()
 //    cy.get('#notes').type(fullname)
        cy.get('#notes').type(Cypress.env('Notes'),{log: false})
        cy.get('#upload_cv').click()
    })

    it('Upload a pic',function(){
        cy.upload_validate('Paw2.PNG')
    })

})

describe('Choose the language',()=>{
    it('language selected', ()=>{
        cy.choose_language('testdataprd') 
        cy.screenshots_datetime_format('Choose_lang') 
         
    })
})