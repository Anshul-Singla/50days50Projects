const soundsButtons = ['Applause' , 'Boo' , 'GASP' , 'TaDa' , 'Victory' , 'Wrong'];

soundsButtons.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound ;
    document.getElementById('buttons').append(btn)
})