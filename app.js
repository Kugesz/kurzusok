window.onload = function(){
    // fetch('https://vvri.pythonanywhere.com/api/courses', {
    //     mode: 'no-cors'
    //   }).then(response => response.json())
    //     .then(response => {
    //         console.log(response)
    //     })
    //     .catch(error => {
    //       console.error('Error:', error);
    //     });
    Kurzusok_frisitese([{"id": 1, "name": "Math", "students": [{"id": 3, "name": "Cedric"}, {"id": 8, "name": "P\u00e9ter"}]}, {"id": 2, "name": "Biology", "students": [{"id": 1, "name": "Amily"}]}, {"id": 3, "name": "History", "students": [{"id": 4, "name": "Daniel"}, {"id": 5, "name": "Edgar"}]}, {"id": 4, "name": "Irodalom", "students": []}, {"id": 5, "name": "Edging", "students": [{"id": 9, "name": "Benedek"}]}])
};

function fetchData(url) {
    return fetch(`https://vvri.pythonanywhere.com/api/${url}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        return data;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }

function Szin_Kikeverese(str){
    numbers = str.split("").map(c => c.charCodeAt(0)).sort(() => Math.random() - 0.5).join("")
    console.log(numbers)
    const red = (parseInt(numbers.slice(0, 3)) / 350) * 256;
    const green = (parseInt(numbers.slice(3, 6)) / 350) * 256;
    const blue = (parseInt(numbers.slice(6, 9)) / 350) * 256;
    console.log(red,green,blue)
    return `rgb(${red},${green},${blue})`
}

function Kurzusok_frisitese(kurzusok){
    container = document.getElementById("kurzusok");
    console.log(container);
    container.innerHTML = "";
    console.log(kurzusok)
    kurzusok.forEach(kurzus =>{
        container.innerHTML += `
        <div class="kurzus">
            <div class="szin" style="background-color: ${Szin_Kikeverese(kurzus.name)};">
                <h2>${kurzus.name}</h2>
            </div>
            <div class="line"></div>
            <button class="addButton" onClick="Add_student(${kurzus.id})">+</button>
        </div>`
    })
}

function Diakok_Lekerdezese(url){

}