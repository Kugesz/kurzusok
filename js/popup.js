function openPopup(id) {
  document.getElementById(id).style.display = "flex";
  console.log("open popup");
  Alaphelyzet(id);
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

function hibaEllenorzese(id) {
  console.log("hibaEllenorzese");
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
  id = id.replace("PopUp" , "")
  console.log("Alaphelyzet");
  console.log(id)
  try{
  document.getElementById(`${id}Nev`).value = "";
  }catch(err){console.log(err);}

  switch(id){
    case "diak":
      id = "Kurzus";
      document.getElementById("kurzusInput").style = "display: inline-block";
      break;
    case "kurzus": id = "Diak"; break;
    case "kurzusDiakHozzadas": document.getElementById("kurzusDiakPopUp").innerHTML = ``;  return; break;
  }
  document.getElementById(`kiv${id}`).innerHTML = ``;
}