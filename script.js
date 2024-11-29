
const appSettings = {
    databaseURL: "https://shopping-list-app-54ea3-default-rtdb.europe-west1.firebasedatabase.app/";
}
const inputFieldEl = document.getElementById("input-field");
const addButtonEl = document.getElementById("add-button");

addButtonEl.addEventListener("click", function() {
    let inputValue = inputFieldEl.value;
    
    console.log(inputValue);
})