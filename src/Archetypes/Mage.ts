import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Mage extends Archetype {
  _energyType: EnergyType;
  static _mageInstances = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'mana';
    Mage._mageInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._mageInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}