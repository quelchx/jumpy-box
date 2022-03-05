import React from "react";
import { View } from "react-native";
import Matter from "matter-js";

const Box = (props) => {
  const color = props.color;
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;
  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: color,
        borderStyle: "solid",
        position: "absolute",
        left: xBody,
        top: yBody,
        width: widthBody,
        height: heightBody,
      }}
    />
  );
};

export default (world, color, pos, size) => {
  // this is basically the hitbox of the object
  const initialBox = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    { label: "Box" }
  );

  Matter.World.add(world, initialBox);

  return {
    body: initialBox,
    color,
    pos,
    renderer: <Box />,
  };
};
