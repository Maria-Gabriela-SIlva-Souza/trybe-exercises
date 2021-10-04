// encodeDecode.test.js
const {
    encode,
    decode
} = require('./encodeDecode.js');

describe('Testa a função encode e decode', () => {
    it('Teste se encode e decode são funções', () => {
        expect(typeof encode).toEqual('function');
        expect(typeof decode).toEqual('function');
    })
    it('Para a função encode teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode('a, e, i, o, u')).toEqual('1, 2, 3, 4, 5')
    })
    it('Para a função decode teste se os números 1, 2, 3, 4 e 5 são convertido nas vogais a, e, i, o, u , respectivamente', () => {
        expect(decode('1, 2, 3, 4, 5')).toEqual('a, e, i, o, u')
    })
    it('Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro', () => {
        expect(encode('gabriela').length).toEqual(8)
    })
    it('converte apenas o número 1 na vogal a', () => {
        expect(decode('1n1')).toEqual('ana');
    });
    it('converte apenas o número 2 na vogal e', () => {
        expect(decode('2l2')).toEqual('ele');
    });
    it('converte apenas o número 3 na vogal i', () => {
        expect(decode('x3x3')).toEqual('xixi');
    });
    it('converte apenas o número 4 na vogal o', () => {
        expect(decode('4v4')).toEqual('ovo');
    });
    it('converte apenas o número 5 na vogal u', () => {
        expect(decode('n5')).toEqual('nu');
    });
})