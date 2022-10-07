const fileHierarchy = {
  root: {
    folders: [
      {
        name: "models",
        folders: [
          {
            name: "1_simple_examples",
            files: [
              {
                name: "dataset_1",
                file_type: "SQL",
              },
              {
                name: "dataset_2_with_ref",
                file_type: "SQL",
              },
            ],
          },
          {
            name: "2_advanced_examples",
            files: [
              {
                name: "dataset_3_increased",
                file_type: "SQL",
              },
              {
                name: "dataset_4_increased",
                file_type: "JS",
              },
            ],
          },
        ],
      },
    ],
  },
};
export default fileHierarchy;
