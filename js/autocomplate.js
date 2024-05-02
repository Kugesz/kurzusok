kivAdatok = [];
adatok = [];

marKivalasztottak = [];

toroltAdatok = [];

let helyContainer;
let kivContainer;

function Frissites(id) {
  console.log("frissites " + id);
  [kivAdatok, adatok, marKivalasztottak, toroltAdatok] = [[],[],[],[]]
  Alaphelyzet(id);
  switch (id) {
    case "kurzusPopUp":
      id = "students";
      helyContainer = document.getElementById("helyDiak");
      kivContainer = document.getElementById("kivDiak");
      break;
    case "diakPopUp":
      id = "courses";
      helyContainer = document.getElementById("helyKurzus");
      kivContainer = document.getElementById("kivKurzus");
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

function letezoAdatokBetoltese(marKivalasztot){
  console.log("letezo adatok betoltese");
  kivAdatok = [];
  marKivalasztottak = marKivalasztot;
  helyContainer = document.getElementById("helyDiakKurzusban");
  kivContainer = document.getElementById("kurzusDiakPopUp");

  //Betoltes
  marKivalasztottak.forEach(adat =>{
    nev = adat.name;
    const tag = document.createElement("div");
    tag.classList.add("kivalasztott");
    tag.innerHTML = `<span class="tag-text">${nev}</span><span class="removeTag" onclick="removeTag(event, '${nev}')">&times;</span>`;
  
    kivContainer.appendChild(tag);
  });
}


function ujInput(event) {
  console.log("uj input");
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
  if (helyContainer.id == "helyKurzus") {
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

  if (helyContainer.id == "helyKurzus") {
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
