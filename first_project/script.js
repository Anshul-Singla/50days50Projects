const panels = document.querySelectorAll('.panel');
panels.forEach(panel => 
    panel.addEventListener('click',()=>{
        removeClassAvtive()
        panel.classList.add('active');
    })
)
function removeClassAvtive(){
    panels.forEach(panel=>
        panel.classList.remove('active')
    )
}