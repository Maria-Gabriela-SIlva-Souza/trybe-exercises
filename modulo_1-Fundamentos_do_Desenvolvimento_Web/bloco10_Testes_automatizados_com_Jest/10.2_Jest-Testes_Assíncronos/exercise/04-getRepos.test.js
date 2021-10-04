const getRepos = require('./04-getRepos');

//O código abaixo busca no GitHub de um usuário, de acordo com a URL, seus repositórios, e retorna uma lista como resultado. Dada a URL 'https://api.github.com/orgs/tryber/repos' , faça um teste que verifique que os repositórios 'sd-01-week4-5-project-todo-list' e 'sd-01-week4-5-project-meme-generator' se encontram nessa lista.

describe('Dada a URL https://api.github.com/orgs/tryber/repos faça um teste de verificação', () => {
  it('verifique que o repositório sd-01-week4-5-project-todo-list e sd-01-week4-5-project-meme-generator se encontram nessa lista.', () => {
    const url = 'https://api.github.com/orgs/tryber/repos';
    return getRepos(url).then(data => {
      expect(data).toContain('sd-01-week4-5-project-todo-list')
      expect(data).toContain('sd-01-week4-5-project-meme-generator')
    })
  })
})