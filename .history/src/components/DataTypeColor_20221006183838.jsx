import React from "react";

const DataTypeColor = (Props) => {
  const styles = {
    text: {
      backgroundColor: "green",
      color: Props.color,
      borderRadius: "20%",
      padding: ".5rem",
    },
  };
  return <div style={styles.text}>{Props.text}</div>;
};

export default DataTypeColor;
