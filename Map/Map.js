/* eslint-disable require-yield, eqeqeq */

import {
  Sprite,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Map extends Sprite {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("costume1", "./Map/costumes/costume1.svg", {
        x: 362.115615,
        y: 326.765435
      })
    ];

    this.sounds = [new Sound("pop", "./Map/sounds/pop.wav")];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];
  }

  *whenGreenFlagClicked() {
    this.goto(0, 0);
    while (true) {
      if (this.keyPressed("w")) {
        this.y += -4;
        if (this.touching(this.sprites["Player"].andClones())) {
          this.y += 4;
        }
      } else {
        if (this.keyPressed("a")) {
          this.x += 4;
          if (this.touching(this.sprites["Player"].andClones())) {
            this.x += -4;
          }
        } else {
          if (this.keyPressed("s")) {
            this.y += 4;
            if (this.touching(this.sprites["Player"].andClones())) {
              this.y += -4;
            }
          } else {
            if (this.keyPressed("d")) {
              this.x += -4;
              if (this.touching(this.sprites["Player"].andClones())) {
                this.x += 4;
              }
            }
          }
        }
      }
      yield;
    }
  }
}
