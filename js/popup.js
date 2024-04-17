function openPopup(id) {
  if(id == "kurzusPopUp"){
    Frissites();
  }
  document.getElementById(id).style.display = "flex";
}

function closePopup(id) {
  document.getElementById(id).style.display = "none";
}

function Hozzaadas(id){
  input = document.getElementById(id).text;
  if(!input){
    switch(id){
      case "kurzusNev": document.getElementById("errorNev").innerText = "A megadott kurzusnév nem megfelelő";break;
      case "diakNev": document.getElementById("errorNev").innerText = "A megadott diknév nem megfelelő";break;
    }
    return;
  }


}