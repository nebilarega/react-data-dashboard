import React from "react";

const DataTypeColor = (Props) => {
  const styles = {
    text: {
      backgroundColor: Props.backgroundColor,
      color: Props.color,
      borderRadius: "1rem",
      padding: ".5rem",
      lineHeight: "1.1",
      textAlign: "center",
    },
  };
  return <div style={styles.text}>{Props.text}</div>;
};

export default DataTypeColor;
