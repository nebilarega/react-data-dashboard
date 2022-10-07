import colors_m from "../assets/colors";
import FolderIcon from "@material-ui/icons/Folder";

export const colors_of_filetypes = {
  JS: colors_m.JS,
  SQL: colors_m.SQL,
  ops: colors_m.ops,
  assert: colors_m.assert,
  table: colors_m.table,
};
export const folderTypography = (text, IconM) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: ".8rem",
      }}
    >
      <IconM style={{ color: colors_m.darkBluelv_1 }} />
      <div style={{ color: colors_m.darkBluelv_1 }}>{text}</div>
    </div>
  );
};
export const fileTypography = (text, type) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        gap: ".8rem",
      }}
    >
      <div
        style={{
          paddingTop: ".1rem",
          paddingBottom: ".1rem",
          paddingLeft: ".4rem",
          paddingRight: ".4rem",
          borderRadius: "1rem",
          backgroundColor: colors_of_filetypes[type],
        }}
      >
        <div
          style={{
            fontSize: ".8rem",
            display: "flex",
          }}
        >
          {type}
        </div>
      </div>
      <div
        style={{
          fontWeight: "inherit",
          color: colors_m.darkBluelv_1,
        }}
      >
        {text}
      </div>
    </div>
  );
};
