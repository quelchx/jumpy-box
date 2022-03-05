import Constants from "../constants";

export const getRandom = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
export const getPipeSizePosPair = (addToPosX = 0) => {
  let yPosTop = -getRandom(300, Constants.SCREEN_HEIGHT - 100);

  const pipeTop = {
    pos: { x: Constants.SCREEN_WIDTH + addToPosX, y: yPosTop },
    size: { height: Constants.SCREEN_HEIGHT * 2, width: 75 },
  };
  
  const pipeBottom = {
    pos: {
      x: Constants.SCREEN_WIDTH + addToPosX,
      y: Constants.SCREEN_HEIGHT * 2 + 200 + yPosTop,
    },
    size: { height: Constants.SCREEN_HEIGHT * 2, width: 75 },
  };

  return { pipeTop, pipeBottom };
};
