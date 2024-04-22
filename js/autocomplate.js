kivalasztottDiakok = [];

diakok = [];

let container;
let kivalaszottak;

function Frissites(id) {
  switch (id) {
    case "kurzusPopUp":
      id = "students";
      container = "helyetessitesekDiak";
      kivalaszottak = "kivalaszottakDiak";
      break;
    case "diakPopUp":
      id = "courses";
      container = "helyetessitesekKurzus";
      kivalaszottak = "kivalaszottakKurzus";
      break;
  }
  console.log(id);
  getData(id)
    .then((data) => {
      diakok = data;
    })
    .catch((error) => {
      console.error(error);
    });
}

function UjInput(event) {
  console.log(diakok);
  const input = event.target.value.toLowerCase();
  const helyettesitesekContainer = document.getElementById(container);

  //0 a kitöltéseket
  helyettesitesekContainer.innerHTML = "";

  if (!input) {
    return;
  }

  //AUTOCOMPLE
  diakok.forEach((diak) => {
    nev = diak.name.toLowerCase();

    //Ha nincsen meg a kivalasztottak között és megegyezik a szokezdesevel akkor jelenitjuk meg
    if (!kivalasztottDiakok.includes(nev) && nev.startsWith(input)) {
      const item = document.createElement("div");
      item.textContent = diak.name;
      item.addEventListener("click", () => {
        addTag(diak);
        event.target.value = "";
        helyettesitesekContainer.innerHTML = "";
      });

      helyettesitesekContainer.appendChild(item);
    }
  });
}

function addTag(diak) {
  nev = diak.name;

  kivalasztottDiakok.push(nev.toLowerCase());

  const kivalaszottakContainer = document.getElementById(kivalaszottak);
  const tag = document.createElement("div");

  tag.classList.add("kivalasztott");
  tag.innerHTML = `<span class="tag-text">${nev}</span><span class="removeTag" onclick="removeTag(event, '${nev}')">&times;</span>`;

  kivalaszottakContainer.appendChild(tag);
  if (container == "helyetessitesekKurzus") {
    document.getElementById("kurzusInput").style = "display: none";
  }
}

function removeTag(event, diak) {
  const index = kivalasztottDiakok.indexOf(diak.toLowerCase());
  if (index !== -1) {
    kivalasztottDiakok.splice(index, 1);
    event.target.parentElement.remove();
  }

  if (container == "helyetessitesekKurzus") {
    document.getElementById("kurzusInput").style = "display: inline-block";
  }
}

document.addEventListener("click", function (event) {
  const autocompleteList = document.getElementById(container);
  if (
    event.target !== autocompleteList &&
    event.target !== document.getElementById("myInput")
  ) {
    autocompleteList.innerHTML = "";
  }
});
