const sendPatchRequest = (recipe, id) => {
  const columnMapping = {
    0: "to-try",
    1: "Monday",
    2: "Tuesday",
    3: "Wednesday",
    4: "Thursday",
    5: "Friday",
  };

  fetch("http://localhost/Tasty-Twist/backend/api/recipe", {
    method: "PATCH",
    body: JSON.stringify({
      recipe,
      status: columnMapping[id],
    }),
  });
};

export default sendPatchRequest;
