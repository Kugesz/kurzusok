kivAdatok = [];
adatok = [];

marKivalasztottak = [];

toroltAdatok = [];

let helyContainer;
let kivContainer;

function Frissites(id) {
  kivAdatok = [];
  switch (id) {
    case "kurzusPopUp":
      id = "students";
      helyContainer = document.getElementById("helyetessitesekDiak");
      kivContainer = document.getElementById("kivalaszottakDiak");
      break;
    case "diakPopUp":
      id = "courses";
      helyContainer = document.getElementById("helyetessitesekKurzus");
      kivContainer = document.getElementById("kivalaszottakKurzus");
      break;
  }

  //Adatok kikerese
  (async () => {
    adatok = await getData(id);
    if(typeof adatok == "object"){
      console.log("Szukseges adatok sikeres betoltese az automatikus kitolteshez!")
    }
  })();
};

function LetezoAdatokBetoltese(marKivalasztot){
  kivAdatok = [];
  marKivalasztottak = marKivalasztot;
  helyContainer = document.getElementById("helyetessitesekDiakKurzusban");
  kivContainer = document.getElementById("kivalaszottakDiakKurzusban");

  //Betoltes
  marKivalasztottak.forEach(adat =>{
    nev = adat.name;
    const tag = document.createElement("div");
    tag.classList.add("kivalasztott");
    tag.innerHTML = `<span class="tag-text">${nev}</span><span class="removeTag" onclick="removeTag(event, '${nev}')">&times;</span>`;
  
    kivContainer.appendChild(tag);
  });
}


function UjInput(event) {
  const input = event.target.value.toLowerCase();
  

  //0 a kitöltéseket
  helyContainer.innerHTML = "";

  if (!input) {
    return;
  }

  //AUTOCOMPLE
  adatok.forEach((diak) => {
    nev = diak.name.toLowerCase();

    //Ha nincsen meg a kivalasztottak között és megegyezik a szokezdesevel akkor jelenitjuk meg
    if (!kivAdatok.map(x => x.name).includes(nev) && nev.startsWith(input)) {
      const item = document.createElement("div");
      item.textContent = diak.name;
      item.addEventListener("click", () => {
        addTag(diak);
        event.target.value = "";
        helyContainer.innerHTML = "";
      });

      helyContainer.appendChild(item);
    }
  });
}

function addTag(diak) {
  nev = diak.name;

  kivAdatok.push(diak);

  const tag = document.createElement("div");

  tag.classList.add("kivalasztott");
  tag.innerHTML = `<span class="tag-text">${nev}</span><span class="removeTag" onclick="removeTag(event, '${nev}')">&times;</span>`;

  kivContainer.appendChild(tag);
  if (helyContainer.id == "helyetessitesekKurzus") {
    document.getElementById("kurzusInput").style = "display: none";
  }
}

function removeTag(event, diak) {
  nevekKiv = kivAdatok.map(x => x.name);
  const indexKiv = nevekKiv.indexOf(diak);

  nevekMeg = marKivalasztottak.map(x => x.name);
  const indexMeg = nevekMeg.indexOf(diak);
  if (indexKiv !== -1) {
    kivAdatok.splice(indexKiv, 1);
    event.target.parentElement.remove();
  }

  if(indexMeg !== -1){
    toroltAdatok.push(marKivalasztottak[indexMeg])
    marKivalasztottak.splice(indexMeg, 1);
    event.target.parentElement.remove();
  }

  if (helyContainer.id == "helyetessitesekKurzus") {
    document.getElementById("kurzusInput").style = "display: inline-block";
  }
}

// document.addEventListener("click", function (event) {
//   if (
//     event.target !== helyContainer &&
//     event.target !== document.getElementById("myInput")
//   ) {
//     helyContainer.innerHTML = "";
//   }
// });
