window.onload = function () {
    let kurzusok;
    (async () => {
      kurzusok = await getData('courses');
      if(typeof kurzusok == "object"){
        console.log("Kurzusok siekres betoltese!")
        Kurzusok_frisitese(kurzusok);
      }
    })();
  };
  
  function Szin_Kikeverese(str) {
    numbers = str
      .split("")
      .map((c) => c.charCodeAt(0))
      .sort(() => Math.random() - 0.5)
      .join("");
    const red = (parseInt(numbers.slice(0, 3)) / 350) * 256;
    const green = (parseInt(numbers.slice(3, 6)) / 350) * 256;
    const blue = (parseInt(numbers.slice(6, 9)) / 350) * 256;
    return `rgb(${red},${green},${blue})`;
  }
  
  function Kurzusok_frisitese(kurzusok) {
    container = document.getElementById("kurzusok");
    container.innerHTML = "";
    kurzusok.forEach((kurzus) => {
      container.innerHTML += `
        <div class="kurzus" data-id = "${kurzus.id}">
            <div class="szin" style="background-color: ${Szin_Kikeverese(kurzus.name)};">
                <h2>${kurzus.name}</h2>
            </div>
            <div class="line"></div>
            <button class="addButton" onClick="DiakKurzushozAdasa('${kurzus.id}','${kurzus.name}')">+</button>
        </div>`;
    });
  }

  let jelenlegiKurzusID;

  function DiakKurzushozAdasa(kurzusID, kurzusNeve){
    document.getElementById("popUpKurzusNeve").innerText = kurzusNeve;
    jelenlegiKurzusID = kurzusID;
    let kurzusDiakai;
    (async () =>{
      response = await getData(`courses/${kurzusID}`);
      kurzusDiakai = await response.students;

      LetezoAdatokBetoltese(kurzusDiakai);
      openPopup("kurzusDiakHozzadasPopUp");
    })();
  }

  function Hozzaadas(id){
    switch(id){
      case "kurzusNev": postCourse(document.getElementById("kurzusNev").value, kivAdatok); closePopup("kurzusPopUp"); break;
      case "diakNev": postStudent(document.getElementById("diakNev").value, kivAdatok[0].id); closePopup("diakPopUp"); break;
      case "kurzusFrissites": updateCourse(jelenlegiKurzusID, kivAdatok, toroltAdatok); break;
    }
  }