let btnAdd = document.getElementById('add')
let board = document.getElementById('board')
let input = document.getElementById('novaTarefa')

function send(){

    if(input.value.trim().length == 0){
        return `
        ${novaTarefa.style.border = "solid 1px red"}
        ${setTimeout (function (){
        alert('Digite algo antes de enviar!')
        },100)}`        
    }
    novaTarefa.style.border = "none"

    board.innerHTML += ` 

    <div class="tarefa">
        <div class="col-md-8">${input.value}</div>
        <div class="col-md-2" id="remove">
            <img class="icon" src="img/check.png">
        </div>
    </div>
    `
    input.value = ''
}

btnAdd.addEventListener('click',send)

input.addEventListener('keydown',function(e){
    if(e.keyCode === 13){
        send()
    }
})


board.addEventListener('click',function(e){
    if(e.target.tagName == 'IMG'){
        e.path[2].remove()
    }
})
