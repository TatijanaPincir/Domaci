//const cypress = require("cypress")
   

class CreateNewGallery {
     
    get createButton (){
        return cy.get ("a[href='/create']")
    };

    get titleInput (){
        return cy.get ("#title")
    };

    get descriptionInput (){
        return cy.get ("#description")
    };

    get imageUrlInput (){
        return cy.get ('.input-group > .form-control')
    };

    get SubmitBtn (){
        return cy.get ('form > :nth-child(4)')
    }
    get addImageBtn (){
        return cy.get('form > :nth-child(3) > :nth-child(3)')
    }
   
    get newImageUrlInput (){
        return cy.get(':nth-child(3) > .input-group > .form-control')
    }

    get cancleBtn (){
        return cy.get('form > :nth-child(5)')
    }

    get alert (){
       return cy.get('.alert')
    }
}

    export const creategallery = new CreateNewGallery ()