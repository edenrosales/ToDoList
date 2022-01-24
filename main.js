let todobutton=document.getElementById('addToDo')
let todoinfo = document.getElementById('todos')
let todoinput=document.getElementById('inputToDo')

todobutton.addEventListener('click',function(){
    var paragraph = document.createElement('p')
    paragraph.classList.add('entries')
    paragraph.innerText = todoinput.value
    todoinfo.appendChild(paragraph)
    todoinput.value="";
    paragraph.addEventListener('click',function(){
        paragraph.style.textDecoration = "line-through"
    })
    paragraph.addEventListener('dblclick',function(){
        todoinfo.removeChild(paragraph)
    })
})

