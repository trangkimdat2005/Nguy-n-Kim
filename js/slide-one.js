const listImage=document.querySelector('.list-img')
const imgs=document.getElementsByTagName('img')
const btnLeft=document.querySelector('.btn-left')
const btnRight=document.querySelector('.btn-right')
let current=0;
const length=imgs.length
const handleChangeSlide=()=>{
    if(current==length-1){
        current=0;
        let width =imgs[0].offsetWidth
        listImage.style.transform=`translateX(0px)`
        document.querySelector('.activiting').classList.remove('.activiting')
        document.querySelector('.index-item-'+current).classList.add('.activiting')
    }else{  
        current++
        let width =imgs[0].offsetWidth
        listImage.style.transform=`translateX(${width*-1*current}px)`
        document.querySelector('.activiting').classList.remove('activiting')
        document.querySelector('.index-item-'+current).classList.add('activiting')
    }
}

let handleEventChangeSlide= setInterval(handleChangeSlide,4000)

btnRight.addEventListener('click',()=>{
    clearInterval(handleEventChangeSlide)
    handleChangeSlide()
    handleEventChangeSlide=setInterval(handleChangeSlide,4000)
})

btnLeft.addEventListener('click',()=>{
    clearInterval(handleEventChangeSlide)
    if(current==0){
        current=length-1;
        let width =imgs[0].offsetWidth
        listImage.style.transform=`translateX(${width*-1*current}px)`
        document.querySelector('.activiting').classList.remove('activiting')
        document.querySelector('.index-item-'+current).classList.add('activiting')
    }else{  
        current--
        let width =imgs[0].offsetWidth
        listImage.style.transform=`translateX(${width*-1*current}px)`
        document.querySelector('.activiting').classList.remove('activiting')
        document.querySelector('.index-item-'+current).classList.add('activiting')
    }
    handleEventChangeSlide=setInterval(handleChangeSlide,4000)
})