function fetchData(url, method, data) {
    if(!method){
      return fetch(`https://vvri.pythonanywhere.com/api/${url}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          
          return response.json();
        })
        .then(data => {
            console.log("unga bunga")
          return data;
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      }else if(data != ""){
        return fetch(`https://vvri.pythonanywhere.com/api/${url}`, {method: `"${method}"`, data, headers: {
            "Content-type": "application/json; charset=UTF-8"
            }}  )
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
      }else{
        return fetch(`https://vvri.pythonanywhere.com/api/${url}`, {method: `"${method}"`})
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
    }