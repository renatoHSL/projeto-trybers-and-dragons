import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  _energyType: EnergyType;
  static _necromancerInstances = 0;

  constructor(_name: string) {
    super(_name);
    this._energyType = 'mana';
    Necromancer._necromancerInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._necromancerInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}