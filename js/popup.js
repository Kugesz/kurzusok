function openPopup(id) {
  document.getElementById(id).style.display = "flex";

  Alaphelyzet(id);
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

function hibaEllenorzese(id) {
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
    return false;
  }
  document.getElementById(id).value = "";
  switch (id) {
    case "kurzusNev":
      document.getElementById("errorKurzus").innerText = "";
      break;
    case "diakNev":
      document.getElementById("errorNev").innerText = "";
      postStudent(input);
      break;
  }
  return true;
}

function Alaphelyzet(id){
  console.log(id)
  console.log("df")
  switch(id){
    case "kurzusPopUp": document.getElementById("kivalaszottakDiak").innerHTML = ``; break;
    case "diakPopUp": document.getElementById.innerHTML = ``; break;
    case "kurzusDiakHozzadasPopUp": document.getElementById("kivalaszottakDiakKurzusban").innerHTML = ``; break;
  }
}