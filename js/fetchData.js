async function getData(url) {
  const response = await fetch(`https://vvri.pythonanywhere.com/api/${url}`);
  const data = await response.json();
  return data;
}


function postStudent(nev, kurzusId) {
  return fetch(`https://vvri.pythonanywhere.com/api/students`, {
    method: "post",
    body: JSON.stringify({
      course_id: kurzusId,
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

function postCourse(nev, diakok){
  console.log(diakok)
  return fetch(`https://vvri.pythonanywhere.com/api/courses`, {
    method: "post",
    body: JSON.stringify({
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
      console.log("OK AT CREATING NEW COURSE")
      return response.json();
    })
    .then((data) => {
      diakok.forEach(diak => {
        putStudent(diak.id, diak.name, data.id)
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function putStudent(id, nev, kurzusId){
  return fetch(`https://vvri.pythonanywhere.com/api/students/${id}`, {
    method: "put",
    body: JSON.stringify({
      course_id: kurzusId,
      name: nev
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      console.log("STUDENT PUT OK")
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}

function updateCourse(id, diakok, toroltDiakok){í
  toroltDiakok.forEach(diak => {
    putStudent(diak.id, diak.name, 0)
  })
  
  diakok.forEach(diak =>{
    putStudent(diak.id, diak.name, id);
  })
}

function deleteData(url,id){
  return fetch(`https://vvri.pythonanywhere.com/api/${url}/${id}`, {
    method: "delete",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      alert("Törlés sikerűlt!")
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}