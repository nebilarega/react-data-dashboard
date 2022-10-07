import React from "react";
import fileHierarchy from "./FileHierarchy";
import { makeStyles } from "@material-ui/styles";
import { Typography } from "@material-ui/core";

const fileSystemWidth = 270;
const useStyles = makeStyles({
  root: {
    width: fileSystemWidth,
    height: "100%",
    backgroundColor: "blue",
  },
});
const FileSystem = () => {
  return (
    <div>
      <Typography component="h1" variant="h6">
        Files
      </Typography>
    </div>
  );
};

export default FileSystem;
