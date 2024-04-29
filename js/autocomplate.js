kivAdatok = [];

adatok = [];

let helyContainer;
let kivContainer;

function Frissites(id) {
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

function LetezoAdatokBetoltese(marKivalasztottak){
  kivAdatok = marKivalasztottak;
  console.log(kivAdatok);
  helyContainer = document.getElementById("helyetessitesekDiakKurzusban");
  kivContainer = document.getElementById("kivalaszottakDiakKurzusban");

  console.log(helyContainer);
  console.log(kivContainer)

  //Betoltes
  kivAdatok.forEach(adat =>{
    console.log(adat)
    const tag = document.createElement("div");
    tag.classList.add("kivalasztott");
    tag.innerHTML = `<span class="tag-text">${nev}</span><span class="removeTag" onclick="removeTag(event, '${nev}')">&times;</span>`;
  
    kivContainer.appendChild(tag);
  });
}


function UjInput(event) {
  console.log(adatok);
  const input = event.target.value.toLowerCase();
  

  //0 a kitöltéseket
  console.log("HTML container: " + helyContainer)
  console.log("ID: " + container)
  helyContainer.innerHTML = "";

  if (!input) {
    return;
  }

  //AUTOCOMPLE
  adatok.forEach((diak) => {
    nev = diak.name.toLowerCase();

    //Ha nincsen meg a kivalasztottak között és megegyezik a szokezdesevel akkor jelenitjuk meg
    if (!kivAdatok.includes(nev) && nev.startsWith(input)) {
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

  kivAdatok.push(nev.toLowerCase());

  const tag = document.createElement("div");

  tag.classList.add("kivalasztott");
  tag.innerHTML = `<span class="tag-text">${nev}</span><span class="removeTag" onclick="removeTag(event, '${nev}')">&times;</span>`;

  kivContainer.appendChild(tag);
  if (container == "helyetessitesekKurzus") {
    document.getElementById("kurzusInput").style = "display: none";
  }
}

function removeTag(event, diak) {
  const index = kivAdatok.indexOf(diak.toLowerCase());
  if (index !== -1) {
    kivAdatok.splice(index, 1);
    event.target.parentElement.remove();
  }

  if (container == "helyetessitesekKurzus") {
    document.getElementById("kurzusInput").style = "display: inline-block";
  }
}

document.addEventListener("click", function (event) {
  if (
    event.target !== helyContainer &&
    event.target !== document.getElementById("myInput")
  ) {
    helyContainer.innerHTML = "";
  }
});
