// let jokeEl = document.getElementById('joke');
// let jokeBtn = document.getElementById('jokeBtn');
// jokeBtn.addEventListener('click', ()=>{
//     getJoke()
// })

// // .then syntax
// const getJoke = () => {
//     fetch('https://icanhazdadjoke.com/' , {
//         headers:{
//             Accept : "application/json",
//         },
//     }).then(res => res.json())
//     .then(data => 
//         jokeEl.innerHTML = data.joke
//         )
// };

// // async await syntax
// const getJok = async() => {
//    const res = await fetch('https://icanhazdadjoke.com/' , {
//         headers:{
//             Accept : "application/json",
//         },
//     })
//     const data = await res.json();
//     jokeEl.innerHTML = data.joke
//     // console.log('res:', res)

// };
// getJok();
let jokeEl = document.getElementById('joke');
let jokeBtn = document.getElementById('jokeBtn');
jokeBtn.addEventListener('click', ()=>{
    getJoke()
})

// .then syntax
const getJoke = () => {
    fetch('https://icanhazdadjoke.com/' , {
        headers:{
            Accept : "application/json",
        },
    }).then(res => res.json())
    .then(data => 
        jokeEl.innerHTML = data.joke
        )
};

// async await syntax
const getJok = async() => {
   const res = await fetch('https://icanhazdadjoke.com/' , {
        headers:{
            Accept : "application/json",
        },
    })
    const data = await res.json();
    jokeEl.innerHTML = data.joke
    // console.log('res:', res)

};
getJok();
