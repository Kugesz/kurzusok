function getData(url) {
    return fetch(`https://vvri.pythonanywhere.com/api/${url}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        return data;
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
}

function postStudent(nev) {
  let highestId;

  (async () => {
    response = await fetch("https://vvri.pythonanywhere.com/api/students");
    data = await response.json();
    highestId = data.sort((a, b) => b.id - a.id)[0].id;
  })();

  return fetch(`https://vvri.pythonanywhere.com/api/${url}`, {
    method: "post",
    body: JSON.stringify({
      id: utolsoID + 1,
      name: nev,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
