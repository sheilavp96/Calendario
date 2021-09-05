const btnMeses = document.querySelectorAll('.meses');
const btnCloses = document.querySelectorAll('.close');
// const body = document.querySelector('body');
btnMeses.forEach((btn) => {
    btn.addEventListener('click', () => {
        const mes = btn.textContent.toLocaleLowerCase().trim();
        const calendarioMes = document.querySelector(`.${mes}`);
        calendarioMes.classList.remove('hidden');
        // document.querySelector('.titulo-container').style.backgroundColor = '#00FF7F';
        document.querySelector('body').style.backgroundColor = '#51565d';
        document.querySelector('header').style.backgroundColor = '#51565d';
        document.querySelectorAll('.meses').style.backgroundColor = '#51565d';

        // body.style.backgroundColor = 'crimsom';
    });
});

btnCloses.forEach(function (c) {
    c.addEventListener('click', function () {
        console.log('entro a close');
        console.log(c);
    });
});

//

// - - - - - - - -

// const close = document.querySelector('.close');
// const enero = document.querySelector('.enero');

/* btnEne.addEventListener('click', function () {
    console.log('btn enero');
    enero.classList.remove('hidden');
});
close.addEventListener('click', function () {
    console.log('entro a close');
    enero.classList.add('hidden');
// // }); */

// // creamos la funcion
// const functionRemove = function (e) {
//     e.classList.remove('hidden');
// };

// const functionClose = function () {
//     close.classList.add('hidden');
// };

// btnEne.addEventListener('click', functionRemove(calendario));
// btnFeb.addEventListener('click', functionRemove);
// close.addEventListener('click', functionClose);
