export const groupRecipesByStatus = (recipes) => {
  const columns = recipes.reduce((acc, recipe) => {
    const { status, ...value } = recipe;
    if (!acc[status]) {
      acc[status] = { key: status, value: [] };
    }
    acc[status].value.push({ status: status, ...value });
    return acc;
  }, {});

  const columnTypes = [
    "to-try",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
  ];

  columnTypes.forEach((columnType) => {
    if (!columns[columnType]) {
      columns[columnType] = { key: columnType, value: [] };
    }
  });

  const sortedColumns = columnTypes.map((columnType) => {
    return columns[columnType];
  });

  return sortedColumns;
};
