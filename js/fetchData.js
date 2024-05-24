async function getData(url) {
  const response = await fetch(`https://vvri.pythonanywhere.com/api/${url}`);
  const data = await response.json();
  return data;
}


async function postStudent(nev, kurzusId) {
  try {
    const response = await fetch(`https://vvri.pythonanywhere.com/api/students`, {
      method: "post",
      body: JSON.stringify({
        course_id: kurzusId,
        name: nev,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    console.log("STUDENT POST OK");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

async function postCourse(nev, diakok) {
  console.log(diakok);

  try {
    const response = await fetch(`https://vvri.pythonanywhere.com/api/courses`, {
      method: "post",
      body: JSON.stringify({
        name: nev,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    console.log("OK AT CREATING NEW COURSE");
    const data = await response.json();

    for (const diak of diakok) {
      await putStudent(diak.id, diak.name, data.id);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}



async function putStudent(id, nev, kurzusId) {
  try {
    const response = await fetch(`https://vvri.pythonanywhere.com/api/students/${id}`, {
      method: "put",
      body: JSON.stringify({
        course_id: kurzusId,
        name: nev,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    console.log("STUDENT PUT OK");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}


async function updateCourse(id, diakok, toroltDiakok) {
  try {
    const removeStudentsPromises = toroltDiakok.map(diak => putStudent(diak.id, diak.name, 0));
    const updateStudentsPromises = diakok.map(diak => putStudent(diak.id, diak.name, id));

    // Wait for all putStudent calls to complete
    await Promise.all([...removeStudentsPromises, ...updateStudentsPromises]);

    console.log("Course update complete");
  } catch (error) {
    console.error("Error updating course:", error);
  }
}


async function deleteData(url, id) {
  try {
    const response = await fetch(`https://vvri.pythonanywhere.com/api/${url}/${id}`, {
      method: "delete",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    alert("Törlés sikerűlt!");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}
