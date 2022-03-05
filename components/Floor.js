import React from "react";
import { View } from "react-native";
import Matter from "matter-js";

const Floor = (props) => {
  const color = props.color;
  const widthBody = props.body.bounds.max.x - props.body.bounds.min.x;
  const heightBody = props.body.bounds.max.y - props.body.bounds.min.y;
  const xBody = props.body.position.x - widthBody / 2;
  const yBody = props.body.position.y - heightBody / 2;

  return (
    <View
      style={{
        backgroundColor: color,
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
  const initialFloor = Matter.Bodies.rectangle(
    pos.x,
    pos.y,
    size.width,
    size.height,
    {
      label: "Floor",
      isStatic: true,
    }
  );

  Matter.World.add(world, initialFloor);

  return {
    body: initialFloor,
    color,
    pos,
    renderer: <Floor />,
  };
};