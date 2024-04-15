kivalasztottDiakok = []

function UjInput(event){
    diakok = [{"id": 3, "name": "Cedric"}, {"id": 4, "name": "Daniel"}, {"id": 5, "name": "Edgar"}, {"id": 8, "name": "J\u00f3n\u00e1s"}, {"id": 9, "name": "Benedek"}, {"id": 10, "name": "string"}]

    const input = event.target.value.toLowerCase();
    const helyettesitesekContainer = document.getElementById("helyetessitesek");

    //0 a kitöltéseket
    helyettesitesekContainer.innerHTML = "";

    if(!input){return;}


    //AUTOCOMPLE
    diakok.forEach(diak => {
        nev = diak.name.toLowerCase();
        console.log(input)

        //Ha nincsen meg a kivalasztottak között és megegyezik a szokezdesevel akkor jelenitjuk meg
        if(!kivalasztottDiakok.includes(nev) && nev.startsWith(input)){
            console.log("Egyezes: " + nev, input)

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
    tag.innerHTML = `<span class="tag-text">${nev}</span><span class="close" onclick="removeTag(event, '${nev}')">&times;</span>`;

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