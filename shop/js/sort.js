document.querySelector('#sort-to-max').onclick = sortToMax;
document.querySelector('#sort-to-min').onclick = sortToMin;
document.querySelector('#reset').onclick = reset;
function sortToMax(){
    let items = document.querySelector('.item-container');
    for (let i = 0; i<items.children.length; i++){
        for (let j = i; j<items.children.length; j++){
            if (+items.children[i].getAttribute('data-sort') > +items.children[j].getAttribute('data-sort')){
                replaceNode = items.replaceChild(items.children[j], items.children[i]);
                pushElem(replaceNode, items.children[i]);
            }

        }
    }
} 

document.querySelector('.option-bar__form--gender').onclick = chooseGender;

function chooseGender() {
    let chooseGenderElem = document.querySelector('input[name="gender"]:checked').value;

    let it = document.querySelector(".item-container");
    for (let i = 0; i<it.children.length; i++){
        if (chooseGenderElem == 'all') {
            it.children[i].style.display='inline-block';
        }
        else if (it.children[i].dataset.gender!=chooseGenderElem) {
            it.children[i].style.display='none';
        }
        else {
            it.children[i].style.display='inline-block';
        }
    }
}
function sortToMin() { 
    let items = document.querySelector('.item-container');
    for (let i = 0; i<items.children.length; i++){
        for (let j = i; j<items.children.length; j++){
            if (+items.children[i].getAttribute('data-sort') < +items.children[j].getAttribute('data-sort')){
                replaceNode = items.replaceChild(items.children[j], items.children[i]);
                pushElem(replaceNode, items.children[i]);
            }   
        }
    }
   
} 
  
function reset()  {
    location.reload();
}

function pushElem(elem, repElem) {
    return repElem.parentNode.insertBefore(elem, repElem.nextSibling);
}