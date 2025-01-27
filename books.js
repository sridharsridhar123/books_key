var add=document.getElementById('add-popup-button');


var box=document.querySelector('.popup-box');

var overlay=document.querySelector('.poppup-overlay');

function visible()
{

    box.style.display="block";
    overlay.style.display="block";

}


let container=document.querySelector('.container');

let addbook=document.getElementById('add');

let title=document.getElementById('book-title');

let author=document.getElementById('book-author');

let description=document.getElementById('book-description');

let del=document.getElementById('delete');


addbook.addEventListener("click",function(event)
{
    event.preventDefault()
    let  div=document.createElement("div");
    div.setAttribute("class","book-container")
    div.innerHTML=`<h2>${title.value}</h2>
    <h4>${author.value}</h4>
    <p>${description.value}</p>
<button id="delete"onclick="lee(event)">Delete</button>`


    
    container.append(div);
    box.style.display="none";
    overlay.style.display="none";

    


})



let book=document.querySelector('.book-container');


function lee(event)
{
    event.target.parentElement.remove();
}

