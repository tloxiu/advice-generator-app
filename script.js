const adviceTitle = document.querySelector(".advice-title");
const adviceText = document.querySelector(".advice-text");
const getDataBtn = document.querySelector(".get-data"); 


window.addEventListener("load", getData);

getDataBtn.addEventListener("click", function(){
    getData();
})


function getData(){
    fetch("https://api.adviceslip.com/advice").then(response => {
    return response.json();
}).then(adviceData => {
    const adviceObject = adviceData.slip;
    adviceText.innerHTML = `"${adviceObject.advice}"`;
    adviceTitle.innerHTML = `Advice #${adviceObject.id}`;
}).catch(error => {
    console.log(error);
});
}