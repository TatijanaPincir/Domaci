/// <reference types= "cypress" />
import {loginPage} from '../page_object/loginPage'
import {creategallery} from "../page_object/createNewGallery"
import { faker } from '@faker-js/faker'


beforeEach(() => {
    cy.visit("https://gallery-app.vivifyideas.com/login")
    loginPage.AuthLogin('tatianapintir@gmail.com', '23jul2022')
});


describe('Create a new gallery', () => {
it ('create new gallery successfully',()=> { 

        creategallery.createButton.click ()
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/create')
        creategallery.titleInput.should ('be.visible')
        creategallery.descriptionInput.should ('be.visible')
        creategallery.imageUrlInput.should ('be.visible')
        creategallery.SubmitBtn.should ('be.visible')
        creategallery.titleInput.type('Hello world')  
        creategallery.descriptionInput.type ('Today is a windy day')
        creategallery.imageUrlInput.type ('https://www.shutterstock.com/image-vector/hello-world-text-speech-bubble-260nw-1162382866.jpg')
        creategallery.SubmitBtn.click ()
    });
       
    it ('Create new gallery when gallery title contains 2 characters',()=> { 
        creategallery.createButton.click ()
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/create')
        creategallery.titleInput.type('He')
        creategallery.titleInput.should('have.value', 'He')
        creategallery.descriptionInput.type ('Today is a windy day')
        creategallery.descriptionInput.should('have.value', 'Today is a windy day')
        creategallery.imageUrlInput.type ('https://www.shutterstock.com/image-vector/hello-world-text-speech-bubble-260nw-1162382866.jpg')
        creategallery.imageUrlInput.should('be.visible')
        // .and('contain', '.jpg');
        creategallery.SubmitBtn.click ()
    });

    it('Create new gallery when gallery name contains 255 characters',()=> { 
        creategallery.createButton.click ()
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/create')
        creategallery.titleInput.type(faker.random.alpha(255))
        creategallery.titleInput.should('have.length.of.at.most', 255)
        creategallery.imageUrlInput.type ('https://www.shutterstock.com/image-vector/hello-world-text-speech-bubble-260nw-1162382866.jpg')
        creategallery.SubmitBtn.click ()
        cy.url().should('eq', 'https://gallery-app.vivifyideas.com/')
    });

//?kako proveriti da li su dve stvarno dve slike
     it ('successfully create new gallery with more than one image',()=> { 
      creategallery.createButton.click ()
       creategallery.titleInput.type('dve slike')
  creategallery.imageUrlInput.type ('https://www.shutterstock.com/image-vector/hello-world-text-speech-bubble-260nw-1162382866.jpg')
  creategallery.imageUrlInput.should ('have.value', 'https://www.shutterstock.com/image-vector/hello-world-text-speech-bubble-260nw-1162382866.jpg')
        creategallery.addImageBtn.click()
          creategallery.newImageUrlInput.should ('exist')
      creategallery.newImageUrlInput.type ('https://www.shutterstock.com/image-vector/hello-world-text-speech-bubble-260nw-1162382866.jpg')
      creategallery.newImageUrlInput.should ('have.value', 'https://www.shutterstock.com/image-vector/hello-world-text-speech-bubble-260nw-1162382866.jpg')
     creategallery.SubmitBtn.click ()
     });

//iz nekog razloga nakon klika na cancle, galerija se objavi?
it.only ('cancel after opening create new gallery page',()=> { 
   creategallery.createButton.click ()
   cy.url().should('eq', 'https://gallery-app.vivifyideas.com/create')
    creategallery.titleInput.type('hit the cancle button')
creategallery.imageUrlInput.type ('https://www.shutterstock.com/image-vector/hello-world-text-speech-bubble-260nw-1162382866.jpg')
creategallery.cancleBtn.should ('be.visible')
     creategallery.cancleBtn.click ()

  });

  it ('Try to create new gallery when gallery title is empty',()=> { 
    creategallery.createButton.click ()
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/create')
    creategallery.titleInput.clear()
    creategallery.titleInput.should('be.empty')
    creategallery.imageUrlInput.type ('https://www.shutterstock.com/image-vector/hello-world-text-speech-bubble-260nw-1162382866.jpg')
    creategallery.SubmitBtn.click()
    cy.url().should('eq', 'https://gallery-app.vivifyideas.com/create')
});

it ('Try to create new gallery when gallery name contains 1 character',()=> { 
    creategallery.createButton.click ()
    creategallery.titleInput.type('h')
    creategallery.titleInput.should('have.length.of.at.most', 1)
    creategallery.imageUrlInput.type ('https://www.shutterstock.com/image-vector/hello-world-text-speech-bubble-260nw-1162382866.jpg')
    creategallery.SubmitBtn.click ()
    creategallery.alert.should('be.visible')
        .and('have.text', 'The title must be at least 2 characters.')
        .and('have.css', 'color', 'rgb(114, 28, 36)')
        .and('have.css', 'background-color', 'rgb(248, 215, 218)')
        .and ('have.css', 'border-color', 'rgb(245, 198, 203)')
});

it('Try to create new gallery when gallery name contains 256 characters',()=> { 
    creategallery.createButton.click ()
     creategallery.titleInput.type(faker.random.alpha(256))
     creategallery.titleInput.should('have.length.of.at.most', 256)
    creategallery.imageUrlInput.type ('https://www.shutterstock.com/image-vector/hello-world-text-speech-bubble-260nw-1162382866.jpg')
    creategallery.SubmitBtn.click ()
    creategallery.alert.should('be.visible')
    .and('have.text', 'The title may not be greater than 255 characters.')
    .and('have.css', 'color', 'rgb(114, 28, 36)')
    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
    .and ('have.css', 'border-color', 'rgb(245, 198, 203)')
});

it   ('Try to create new gallery when description contains 1001 characters',()=> { 
    creategallery.createButton.click ()
     creategallery.titleInput.type('hallo world')
     creategallery.descriptionInput.type (faker.random.alpha(1001))
     creategallery.descriptionInput.should('have.length.of.at.most', 1001)
    creategallery.imageUrlInput.type ('https://www.shutterstock.com/image-vector/hello-world-text-speech-bubble-260nw-1162382866.jpg')
    creategallery.SubmitBtn.click ()
    creategallery.alert.should('be.visible')
    .and('have.text', 'The description may not be greater than 1000 characters.')
    .and('have.css', 'color', 'rgb(114, 28, 36)')
    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
    .and ('have.css', 'border-color', 'rgb(245, 198, 203)')
});

it  ('Try to create new gallery with invalid image format',()=> { 
    creategallery.createButton.click ()
     creategallery.titleInput.type('hallo world')
     creategallery.descriptionInput.type ("zdravo")
    creategallery.imageUrlInput.type ('https://media.tenor.com/o6aj3W2I7rMAAAAM/dev.gif')
    creategallery.SubmitBtn.click ()
    creategallery.alert.should('be.visible')
    .and('have.text', 'Wrong format of image')
    .and('have.css', 'color', 'rgb(114, 28, 36)')
    .and('have.css', 'background-color', 'rgb(248, 215, 218)')
    .and ('have.css', 'border-color', 'rgb(245, 198, 203)')
});
});