async function getData(url) {
  const response = await fetch(`https://vvri.pythonanywhere.com/api/${url}`);
  const data = await response.json();
  return data;
}


function postStudent(nev) {
  return fetch(`https://vvri.pythonanywhere.com/api/students`, {
    method: "post",
    body: JSON.stringify({
      id: 0,
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
      console.log("STUDENT POST OK")
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
