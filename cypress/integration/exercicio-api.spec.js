/// <reference types="cypress" />

/// <reference types="cypress" />

describe('Testes da Funcionalidade Usuários', () => {
     

     it('Deve validar contrato de usuários', () => {

     });

     it('Deve listar usuários cadastrados', () => {
          cy.request({
               method: 'GET',
               url: 'usuarios'
          }).then((response) => {
               expect(response.body.usuarios[0].nome).to.equal('Fulano da Silva')
               expect(response.status).to.equal(200)
               expect(response.body).to.have.property('usuarios')
               expect(response.duration).to.be.lessThan(15)
          })
     });

     it('Deve cadastrar um usuário com sucesso', () => {
          let usuarios = `Produto EBAC ${Math.floor(Math.random() * 100000000)}`
          cy.request({
               method: 'POST',
               url: 'usuarios',
               body:
               {
                    "nome": usuarios,
                    //TODO
                    "email": "produtonovo7@qa.com.br",
                    "password": "teste",
                    "administrador": "true"
               },

          }).then((response) => {
               expect(response.status).to.equal(201)
               expect(response.body.message).to.equal('Cadastro realizado com sucesso')

          })
     });

     it.only('Deve validar um usuário com email inválido', () => {
          cy.cadastrarProduto('nome', 'email', 'senha')

          .then((response) => {
               expect(response.status).to.equal(400)
               expect(response.body.message).to.equal('Este email já está sendo usado')


          })
     });

     it('Deve editar um usuário previamente cadastrado', () => {
          //TODO: 
     });

     it('Deve deletar um usuário previamente cadastrado', () => {
          //TODO: 
     });
});