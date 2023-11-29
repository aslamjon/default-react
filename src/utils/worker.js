function getOneFromList({ data, id }) {
  if (Array.isArray(data)) {
    const index = data.findIndex((item) => item.id === id);
    return { result: data[index], index };
  }
  return null;
}

onmessage = function (event) {
  const { type, data } = event.data;

  // console.log(type, data);
  if (type === "getOneFromList") {
    const result = getOneFromList(data);
    postMessage(result);
  }
};
