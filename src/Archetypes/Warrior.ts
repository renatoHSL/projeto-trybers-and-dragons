import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  _energyType: EnergyType;
  static _warriorInstances = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'stamina';
    Warrior._warriorInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._warriorInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}