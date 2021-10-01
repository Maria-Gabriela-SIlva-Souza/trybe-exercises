const getUserName = require('./03-getUserName');

//3 - Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await .
// Dica: Utilize o try/catch para o caso de erro.

describe('getUserName - async/await', () => {
  describe('when the user id exists', () => {
    it('returns the user name', async () => {
      const data = await getUserName(1)
      expect(data).toEqual('Mark')
    });
  });

  describe('when the user id does not exists', () => {
    it('returns an error', async () => {
      expect.assertions(1);
      try {
        await getUserName(3)
      } catch(error) {
        expect(error.message).toMatch('User with 3 not found.');
      }
    });
  });
});