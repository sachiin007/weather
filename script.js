const api={
	key:"bc051c383277e9a20097f4950c75c1a1",
	base : "https://api.openweathermap.org/data/3.0/"

}
const searchbox=document.querySelector('.search-box');
searchbox.addEventListener('keypress',setQuery);
 
function setQuery(evt){
    if(evt.keyCode==13){
        getResults(searchbox.value);
        console.log(searchbox.value)
    }
}
function getResults(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather=> {
        return weather.json();
    }).then(displayResults);
}
function displayResults(weather){
    console.log(weather);
}