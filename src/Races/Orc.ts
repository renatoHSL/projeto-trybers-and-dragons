import Race from './Race';

export default class Orc extends Race {
  _maxLifePoints: number;
  static _orcInstances = 0;
  
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 74;
    Orc._orcInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return Orc._orcInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}