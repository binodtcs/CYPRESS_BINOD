const dummy = require('dummynator');
const fullname = dummy.person.firstName() + ' ' + dummy.person.lastName()
describe('My first test case', function(){
    it('Open the page & take screenshot',function(){
        cy.Open_page_screenshot('testdata')
                     
    })

    it('Enter the experience',function(){
        cy.get('#exp').type(dummy.random.number())
    })
    
    it('Enter other details',function(){
        cy.get('#check_python').check()
 //    cy.get('#notes').type(fullname)
        cy.get('#notes').type(Cypress.env('Notes'))
        cy.get('#upload_cv').click()
    })

    it('Upload a pic',function(){
        cy.upload_validate('Paw1.PNG')
    })

})

describe('Choose the language',()=>{
    it('language selected', ()=>{
        cy.choose_language('testdata')  
         
    })
})