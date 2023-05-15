fotos = [
    {foto:"picture/Picture-Task-8/1.jpg"},
    {foto:"picture/Picture-Task-8/2.jpg"},
    {foto:"picture/Picture-Task-8/3.jpg"},
    {foto:"picture/Picture-Task-8/4.jpg"},
    {foto:"picture/Picture-Task-8/5.jpg"},
    {foto:"picture/Picture-Task-8/6.jpg"},
    {foto:"picture/Picture-Task-8/7.jpg"},
    {foto:"picture/Picture-Task-8/8.jpg"},
]
let i = 0;
function toBack() {
    i--
    if(i==-1){
        i=7
    }
    imgg.src = fotos[i].foto;
}

function toNext() {
    i++
    if(i==fotos.length){
        i=0
    }
    imgg.src = fotos[i].foto;
}