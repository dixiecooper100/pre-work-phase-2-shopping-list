window.onload = function () {
    initShoppingList();
};
function initShoppingList() {
    let form = document.getElementById("item-form")

    form.addEventListener("submit", (event) =>{
      handleItemForm(event, form);

    });
}
function handleItemForm (event, formRef) {
if(event.preventDefault) {
    event.preventDefault();
}
    addItemToShoppingList();
formRef.reset();
return false;
}
function addItemToShoppingList() {
    let itemName =document.getElementById("item-name");
    let itemAmount = document.getElementById("item-amount");
    let id= getRandomInt(0,10000000);

    let itemHtml = createListItemHTML(itemName.value, itemAmount.value);
    console.log ("Item HTML: ", itemHtml);
    let itemListRef = document.getElementById("shopping-list");
    itemListRef.insertAdjacentHTML("afterend", itemHtml);

    setDeleteButtonEvent(id);
}

function setDeleteButtonEvent(id) {
let deleteButton = document.getElementById ("button"+id)
    deleteButton.addEventListener("click", () => {
    removeListItem(id);
    });
}

function createListItemHTML(itemName, itemAmount) {
    return  `<li id ="items${id}"> 
        ${itemName} - ${itemAmount}
        <button type ="bottom"> Delete Item</button>
        </li>`;

}
function removeListItem (id) {
    let listItem = document.getElementById(item +id);
    listItem.parentNode.removeChild (listItem);
}

      
    function getRandomInt(min, max) {
    
    }
        
