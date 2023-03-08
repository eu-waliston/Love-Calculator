const btn = document.getElementById('send');

const modals = document.getElementById('modal');

function sendRsults() {
    let name1 = document.getElementById('name1').value;
    let name2 = document.getElementById('name2').value;

    let myModals = document.createElement('div');
    myModals.classList.add('modal-content')
    myModals.id = "myModal";


    let spanIten = document.createElement('i');
    spanIten.classList.add('close')
    spanIten.innerText = "X"


    let couple = document.createElement('h1')
    couple.classList.add('couple__info')
    couple.innerHTML = `${name1} & ${name2}`

    let count = Math.floor(Math.random() * 100);
    let percent = document.createElement('h1');
    percent.classList.add('couple__result')
    percent.innerText = count + "%";

    myModals.append(spanIten, couple, percent);

    modals.appendChild(myModals)


    spanIten = document.getElementsByClassName("close")[0];

    spanIten.addEventListener('click', () => {
        window.location.reload();
        myModals.style.display = "none";
    })
}


btn.addEventListener('click', sendRsults);




