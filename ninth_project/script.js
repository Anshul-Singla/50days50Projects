const soundsButtons = ['Applause' , 'Boo' , 'GASP' , 'TaDa' , 'Victory' , 'Wrong'];

soundsButtons.forEach(sound => {
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound ;

    btn.addEventListener("click" , () => {
        stopSongs();
        document.getElementById(sound).play()
    })

    document.getElementById('buttons').append(btn)
});
const stopSongs = () => {
    soundsButtons.forEach(sound => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0
    })
}