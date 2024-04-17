kivalasztottDiakok = []

diakok =[]

function Frissites(){
  fetchData('students')
  .then(data => {

    diakok = data;
  })
  .catch(error => {
    console.error(error);
  });
}

function UjInput(event){
    const input = event.target.value.toLowerCase();
    const helyettesitesekContainer = document.getElementById("helyetessitesek");

    //0 a kitöltéseket
    helyettesitesekContainer.innerHTML = "";

    if(!input){return;}


    //AUTOCOMPLE
    diakok.forEach(diak => {
        nev = diak.name.toLowerCase();

        //Ha nincsen meg a kivalasztottak között és megegyezik a szokezdesevel akkor jelenitjuk meg
        if(!kivalasztottDiakok.includes(nev) && nev.startsWith(input)){

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
    nev = diak.name

    kivalasztottDiakok.push(nev.toLowerCase());

    const kivalaszottakContainer = document.getElementById("kivalaszottak");
    const tag = document.createElement("div");

    tag.classList.add("kivalasztott");
    tag.innerHTML = `<span class="tag-text">${nev}</span><span class="removeTag" onclick="removeTag(event, '${nev}')">&times;</span>`;

    kivalaszottakContainer.appendChild(tag);
  }
  
  function removeTag(event, diak) {
    const index = kivalasztottDiakok.indexOf(diak.toLowerCase());
    if (index !== -1) {
      kivalasztottDiakok.splice(index, 1);
      event.target.parentElement.remove();
    }
  }
  
  document.addEventListener("click", function (event) {
    const autocompleteList = document.getElementById("helyetessitesek");
    if (event.target !== autocompleteList && event.target !== document.getElementById("myInput")) {
      autocompleteList.innerHTML = '';
    }
  });