import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Ranger extends Archetype {
  _energyType: EnergyType;
  static _rangerInstances = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
    Ranger._rangerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._rangerInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}