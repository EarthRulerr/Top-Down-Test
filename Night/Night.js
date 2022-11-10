/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Night extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("night", "./Night/costumes/night.svg", {
        x: 350.6006006006005,
        y: 322.8228250000002
      })
    ];

    this.sounds = [new Sound("pop", "./Night/sounds/pop.wav")];

    this.triggers = [];
  }
}
