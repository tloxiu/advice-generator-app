const adviceTitle = document.querySelector(".advice-title");
const adviceText = document.querySelector(".advice-text");
const getDataBtn = document.querySelector(".get-data"); 


window.addEventListener("load", getData);

getDataBtn.addEventListener("click", function(){
    getData();
})


function getData(){
    const randomId = Math.floor(Math.random() * 1000000);
    const apiUrl = `https://api.adviceslip.com/advice?random=${randomId}`;

    fetch(apiUrl).then(response => {
    return response.json();
}).then(adviceData => {
    console.log("After API Call");
    console.log("adviceData:", adviceData);

    const adviceObject = adviceData.slip;

    console.log("adviceObject:", adviceObject);

    adviceText.innerHTML = `"${adviceObject.advice}"`;
    adviceTitle.innerHTML = `Advice #${adviceObject.id}`;
}).catch(error => {
    console.log(error);
});
}
