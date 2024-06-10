beforeEach(() => {
  cy.visit('/')
})

describe('login', () => {
  it('Страница видна', () => {
    cy.get('span[class="ml-2"]').contains('Books list').should('be.visible')
  })

  it('Правильный логин', () => {
    cy.login('test@test.com', 'test')
    cy.contains('Добро пожаловать test@test.com').should('be.visible')
  })

  it('Пустое имя пользователя', () => {
    cy.login(null, 'test')
    cy.get('#mail').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })

  it('Пустой пароль', () => {
    cy.login('test@test.com', null)
    cy.get('#pass').then((elements) => {
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql('Заполните это поле.')
    })
  })
})

describe('favourites', () => {
  let title = 'The Silmarillion'
  let description = 'Collection of myths and legends of Middle-earth'
  let author = 'J. R. R. Tolkien'

  beforeEach(() => {
    cy.login('bropet@mail.ru', '123')
  })

  it('Добавление книги', () => {
    cy.addBook(title, description, author)
    cy.contains(title).should('be.visible')
  })

  it('Просмотр информации о книге', () => {
    cy.contains(title).click()
    cy.visibilityValidation(title, description, author)
  })

  it('Удаление книги из избранного', () => {
    cy.contains('Delete from favorite').click()
    cy.contains('Add to favorite').should('be.visible')
  })
})