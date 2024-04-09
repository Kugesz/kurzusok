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


function Kurzusok_frisitese(kurzusok){
    container = document.getElementById("kurzusok");
    container.innerHtml = "";
    console.log(kurzusok)

}