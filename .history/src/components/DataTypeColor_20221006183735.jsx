import React from "react";

const DataTypeColor = (Props) => {
  const styles = {
    text: {
      backgroundColor: Props.backgroundColor,
      color: Props.color,
      borderRadius: "20%",
      padding: ".8rem",
    },
  };
  return <div style={styles.text}>{Props.text}</div>;
};

export default DataTypeColor;
