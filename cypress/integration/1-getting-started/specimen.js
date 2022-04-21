const dummy = require('dummynator');
const fullname = dummy.person.firstName() + ' ' + dummy.person.lastName()
describe('My first test case', function(){
    it('Open the page playground',function(){
        cy.visit('https://dineshvelhal.github.io/testautomation-playground/forms.html')
        cy.screenshot()
        
                     
    })

    it('Enter the experience',function(){
        cy.get('#exp').type(dummy.random.number())
    })
    
    it('Enter other details',function(){
        cy.get('#check_python').check()
        cy.get('#notes').type(fullname)
        cy.get('#upload_cv').click()
    })

    it('Upload a pic',function(){
        cy.upload_validate('Paw1.PNG')
    })

})