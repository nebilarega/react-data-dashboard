import React from "react";

const DataTypeColor = (Props) => {
  const styles = {
    text: {
      backgroundColor: "green",
      color: Props.color,
      borderRadius: "1rem",
      padding: ".5rem",
    },
  };
  return <div style={styles.text}>{Props.text}</div>;
};

export default DataTypeColor;
