function openPopup(id) {
  document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

function Hozzaadas(id) {
  input = document.getElementById(id).value;

  //Ha nem megfelelő a megadott input hiba kiirasa
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
  }
  switch (id) {
    case "kurzusNev":
      document.getElementById("errorKurzus").innerText = "";
      break;
    case "diakNev":
      document.getElementById("errorNev").innerText = "";
      postStudent(input);
      break;
  }
}
