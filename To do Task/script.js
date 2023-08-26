const addButton = document.getElementById('add');
const inputField = document.getElementById("inputField");
const valueList = document.getElementById('valueList');
const clear = document.getElementById('clear');
addButton.addEventListener("click", () => {
    const value = inputField.value;
    if (value.trim() !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = value;
        valueList.append(listItem);
        inputField.value = '';
    }
})

clear.addEventListener("click", () => {
    valueList.innerHTML = '';
})