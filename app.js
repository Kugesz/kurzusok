window.onload = function () {
    let kurzusok;
    (async () => {
      kurzusok = await getData('courses');
      if(typeof kurzusok == "object"){
        console.log("Kurzusok siekres betoltese!")
        kurzusokFrissitese(kurzusok);
      }
    })();
  };
  
  function szinKikeverese(str) {
    if(!str){
      return `rgb(256,256,256)`;
    }

    letters = str.split("").splice(0,3)
    const red = (letterToNumber(letters[0]) / 17) * 256;
    const green = (letterToNumber(letters[1]) / 17) * 256;
    const blue = (letterToNumber(letters[2]) / 17) * 256;
    return `rgb(${red},${green},${blue})`;


    //Gyorsan lopott kod :)
    function letterToNumber(letter) {

      //Ellenorzes mivel sok az emoji a nevek kozott
      if(!/^[A-Za-z]$/.test(letter)){
        return 13;
      }
      letter = letter.toUpperCase();
      var asciiA = 'A'.charCodeAt(0);
      var asciiLetter = letter.charCodeAt(0);
      var position = asciiLetter - asciiA + 1;
      
      return position;
    }
  }
  
  function kurzusokFrissitese(kurzusok) {
    container = document.getElementById("kurzusok");
    container.innerHTML = "";
    kurzusok.forEach((kurzus) => {
      container.innerHTML += `
        <div class="kurzus" data-id = "${kurzus.id}">
            <div class="szin" style="background-color: ${szinKikeverese(kurzus.name)};">
                <h2>${stringRovidetes(kurzus.name)}</h2>
            </div>
            <div class="line"></div>
            <button class="addButton" onClick="diakKurzushozAdasa('${kurzus.id}','${kurzus.name}')">+</button>
        </div>`;
    });
  }

  function stringRovidetes(str){
    if(str.length > 19){
      return str.split("").splice(0,16).join("") + "..."
    }
    return str;
  }

  let jelenlegiKurzusID;

  function diakKurzushozAdasa(kurzusID, kurzusNeve){
    openPopup("kurzusDiakHozzadasPopUp");

    //Kurzus nev megjelenitese
    document.getElementById("popUpKurzusNeve").innerText = kurzusNeve;

    // Kurzus torlesenek adatai beallitasa
    document.getElementById("torlesButton").setAttribute("onClick", `deleteData('courses', ${kurzusID})`);
    jelenlegiKurzusID = kurzusID;
    let kurzusDiakai;

    //Kurzushoz tartozo diakok lekerese
    (async () =>{
      response = await getData(`courses/${kurzusID}`);
      kurzusDiakai = await response.students;

      letezoAdatokBetoltese(kurzusDiakai);
    })();
  }

  function Hozzaadas(id){
    switch(id){
      case "kurzusNev": postCourse(document.getElementById("kurzusNev").value, kivAdatok); closePopup("kurzusPopUp"); break;
      case "diakNev": postStudent(document.getElementById("diakNev").value, kivAdatok[0].id); closePopup("diakPopUp"); break;
      case "kurzusFrissites": updateCourse(jelenlegiKurzusID, kivAdatok, toroltAdatok); break;
    }
  }