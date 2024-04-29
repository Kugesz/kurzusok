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
        <div class="kurzus">
            <div class="szin" style="background-color: ${Szin_Kikeverese(kurzus.name)};">
                <h2>${kurzus.name}</h2>
            </div>
            <div class="line"></div>
            <button class="addButton" onClick=DiakKurzushozAdasa("${kurzus.id}","${kurzus.name}")>+</button>
        </div>`;
    });
  }

  function DiakKurzushozAdasa(kurzusID, kurzusNeve){
    document.getElementById("popUpKurzusNeve").innerText = kurzusNeve;
    let kurzusDiakai;
    (async () =>{
      response = await getData(`courses/${kurzusID}`);
      kurzusDiakai = response.students;
      LetezoAdatokBetoltese(kurzusDiakai);
      openPopup("kurzusDiakHozzadasPopUp");
    })();
  }