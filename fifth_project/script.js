const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg')
// to map a range of number to another range of number;
const scale = (num , in_min , in_max , out_min , out_max)=>{
    return (num - in_min)*(out_max - out_min) / (in_max - in_min) + out_min;
}
let load = 0
let id = setInterval(blurring , 30)
function blurring(){
    load++;
    if(load == 100){
        clearInterval(id);
    }
    // console.log(load)
    loadText.innerText = `${load}%`
    loadText.style.opacity = scale(load , 0 , 100 , 1 , 0 )
    bg.style.filter = `blur(${scale(load , 0 , 100 , 30 , 0)}px)`
}