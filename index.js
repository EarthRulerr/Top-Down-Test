import { Project } from "https://unpkg.com/leopard@^1/dist/index.esm.js";

import Stage from "./Stage/Stage.js";
import Map from "./Map/Map.js";
import Player from "./Player/Player.js";
import Night from "./Night/Night.js";

const stage = new Stage({ costumeNumber: 1 });

const sprites = {
  Map: new Map({
    x: -156,
    y: 40,
    direction: 90,
    costumeNumber: 1,
    size: 71.67187718725211,
    visible: true,
    layerOrder: 1
  }),
  Player: new Player({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 2
  }),
  Night: new Night({
    x: 0,
    y: 0,
    direction: 90,
    costumeNumber: 1,
    size: 100,
    visible: true,
    layerOrder: 3
  })
};

const project = new Project(stage, sprites, {
  frameRate: 30 // Set to 60 to make your project run faster
});
export default project;
