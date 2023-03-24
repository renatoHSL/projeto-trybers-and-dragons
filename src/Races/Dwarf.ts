import Race from './Race';

export default class Dwarf extends Race {
  _maxLifePoints: number;
  static _dwarfInstances = 0;
  
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 80;
    Dwarf._dwarfInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return Dwarf._dwarfInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}