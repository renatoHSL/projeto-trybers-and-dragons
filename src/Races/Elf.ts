import Race from './Race';

export default class Elf extends Race {
  _maxLifePoints: number;
  static _elfInstances = 0;
  
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 99;
    Elf._elfInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return Elf._elfInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}