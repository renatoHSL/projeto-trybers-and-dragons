import Race from './Race';

export default class Halfling extends Race {
  _maxLifePoints: number;
  static _halflingInstances = 0;
  
  constructor(_name: string, _dexterity: number) {
    super(_name, _dexterity);
    this._maxLifePoints = 60;
    Halfling._halflingInstances += 1;
  }
  
  static createdRacesInstances(): number {
    return Halfling._halflingInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}