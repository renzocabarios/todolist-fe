import { useSpring, animated, config } from "react-spring";
import { useState, useEffect } from "react";
import "../styles/checkbox.css";

function TaskArchived({ data, task, setData, checked }) {
  const [isChecked, setIsChecked] = useState(checked);
  useEffect(() => {
    setIsChecked(checked);
  }, [checked]);

  const box = {
    backgroundColor: isChecked ? "#000" : "#fff",
  };
  const handleCheckbox = () => {
    setIsChecked(!isChecked);
  };
  const anim = useSpring({
    from: {
      opacity: 0,
      transform: "translate(-20%)",
    },
    to: {
      width: "100%",
      borderBottom: "1px dashed #000",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(255,255,255,.3)",
      opacity: 1,
      transform: "translateX(0%)",
    },
    config: config.gentle,
  });
  return (
    <animated.div style={anim}>
      <div style={parentStyle}>
        <div style={childStyle}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
        </div>
      </div>
    </animated.div>
  );
}

const taskStyle = {
  width: "100%",
  borderBottom: "1px dashed #000",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "rgba(255,255,255,.3)",
};
const parentStyle = {
  width: "100%",
  height: "auto",
  padding: "1rem 2rem",
  margin: ".5rem 0",
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-evenly",
  gap: "1rem",
};

const childStyle = {
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  fontFamily: "Architects Daughter, cursive",
};

export default TaskArchived;
