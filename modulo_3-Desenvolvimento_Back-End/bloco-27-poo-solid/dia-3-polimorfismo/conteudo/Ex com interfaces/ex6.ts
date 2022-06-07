import CharacterService from "./CharacterService_ex3e4";
import LocalDbModel from './LocalDbModel_ex2';
import MockDbModel from "./MockedDbModel_ex5";

const A = new CharacterService(new LocalDbModel());
A.getAll().then(console.log);

const B = new CharacterService(new MockDbModel());
B.getAll().then(console.log);