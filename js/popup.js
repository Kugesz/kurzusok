function openPopup(id) {
  Frissites(id);

  document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

function Hozzaadas(id) {
  console.log(id);
  input = document.getElementById(id).value;
  if (!input) {
    switch (id) {
      case "kurzusNev":
        document.getElementById("errorKurzus").innerText =
          "A megadott kurzusnév nem megfelelő";
        break;
      case "diakNev":
        document.getElementById("errorNev").innerText =
          "A megadott diknév nem megfelelő";
        break;
    }
    return;
  } else {
    switch (id) {
      case "kurzusNev":
        document.getElementById("errorKurzus").innerText = "";
        break;
      case "diakNev":
        document.getElementById("errorNev").innerText = "";
        break;
    }
  }

  postStudent(input);
}
