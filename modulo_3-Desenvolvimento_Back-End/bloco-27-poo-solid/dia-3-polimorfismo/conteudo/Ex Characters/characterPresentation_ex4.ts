import Character from './Character_ex1';
import MeleeCharacter from './MeleeCharacter_ex2';
import LongRangeCharacter from './LongRangeCharacter_ex3';

function characterPresentation(character: Character) {
  character.talk();
  character.specialMove();
}

const yoshi = new MeleeCharacter('yoshi', 'Super dragon');
const samus = new LongRangeCharacter('samus', 'Zero Laser');

characterPresentation(yoshi);
characterPresentation(samus);