import Matter from "matter-js";
import Box from "../components/Box";
import Floor from "../components/Floor";
import Obstacle from "../components/Obstacle";

import Constants from "../constants/";

import { getPipeSizePosPair } from "../utils/random";

export default (restart) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;

  engine.gravity.y = 0.4;

  const pipeSizePosA = getPipeSizePosPair();
  const pipeSizePosB = getPipeSizePosPair(Constants.SCREEN_WIDTH * 0.9);

  return {
    physics: { engine, world },

    Box: Box(world, "green", { x: 50, y: 300 }, { height: 40, width: 40 }),

    Floor: Floor(
      world,
      "brown",
      { x: Constants.SCREEN_WIDTH / 2, y: Constants.SCREEN_HEIGHT },
      { height: 40, width: Constants.SCREEN_WIDTH }
    ),

    ObstacleTop1: Obstacle(
      world,
      "ObstacleTop1",
      "red",
      pipeSizePosA.pipeTop.pos,
      pipeSizePosA.pipeTop.size
    ),
    ObstacleBottom1: Obstacle(
      world,
      "ObstacleBottom1",
      "red",
      pipeSizePosA.pipeBottom.pos,
      pipeSizePosA.pipeBottom.size
    ),

    ObstacleTop2: Obstacle(
      world,
      "ObstacleTop2",
      "red",
      pipeSizePosB.pipeTop.pos,
      pipeSizePosB.pipeTop.size
    ),

    ObstacleBottom2: Obstacle(
      world,
      "ObstacleBottom2",
      "red",
      pipeSizePosB.pipeBottom.pos,
      pipeSizePosB.pipeBottom.size
    ),
  };
};
