function addToList() {
    let newItem = document.querySelector('#newItem').value;
    let li = document.createElement('li');
    li.innerHTML = newItem;

    document.querySelector('#itemList').appendChild(li);
}

window.onload = (event) => {
    console.log('page is loaded');
    document.getElementById('demo').addEventListener('click', addToList);    
}
