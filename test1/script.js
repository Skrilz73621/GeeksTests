const regExp = /^\d+$/g

const containsOnlyDigits = (str) => {
    if(regExp.test(str)){
        return true
    }else{
        return false
    }
}

console.log(containsOnlyDigits('21233'));

/////////////////////////////////////////

function everySecond(){
    setInterval(()=>{
        console.log('Прошла секунда');
    },1000)
}

everySecond()

//////////////////////////////////

const count = () =>{
    let i = 1
    setInterval(()=>{
        if(i <= 10){
            console.log(i);
            i++
        }
    },1000)
}

count()

////////////////////////////////////

const square = document.querySelector('.square')
square.addEventListener('click', ()=>{
    square.classList.toggle('red')
})



/////////////////////////////////////

const request = new XMLHttpRequest()
request.open('GET', 'data.json')
request.setRequestHeader('Content-type', 'application/json')
request.send()

request.onload = () =>{
    const data = JSON.parse(request.response)
    console.log(data);
    
}