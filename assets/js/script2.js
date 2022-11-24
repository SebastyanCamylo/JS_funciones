const box1 = document.querySelector('#caja1');
const box2 = document.querySelector('#caja2');
const box3 = document.querySelector('#caja3');
const box4 = document.querySelector('#caja4');

/* Caja1 color gray / gris */
box1.style.backgroundColor = 'gray';
box1.style.width = '150px';
box1.style.height = '150px';


/* Caja2 color red / rojo*/
box2.style.backgroundColor = 'red';
box2.style.width = '150px';
box2.style.height = '150px';

/* Caja3 color indigo / morado */
box3.style.backgroundColor = 'indigo';
box3.style.width = '150px';
box3.style.height = '150px';

/* Caja4 color orange / naranjo */
box4.style.backgroundColor = 'orange';
box4.style.width = '150px';
box4.style.height = '150px';



const letraA = 'teal';
const letraS = 'cyan';
const letraD = 'yellow';


document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
        box1.style.backgroundColor=letraA;
    } else if (event.key === 's') {
        box2.style.backgroundColor=letraS;
    } else if (event.key === 'd'){
        box3.style.backgroundColor=letraD;
    }
})