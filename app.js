let p1 = document.querySelector('#para1');
let p2 = document.querySelector('#para2');


let url = "https://catfact.ninja/fact";
fetch(url)
.then((res) =>{
    console.log(res)
    return res.json();
})
.then((data) =>{
    p1.innerText = data.fact;
    changeColor("blue", p1);
    return fetch(url);
})
.then((res) =>{
    return res.json()
})
.then((data2) =>{
    p2.innerText = data2.fact;
    changeColor("red", p2);
    
    
})
.catch((err) =>{
    console.log("Error",err);
})


let changeColor = function(color, vari){
    setTimeout(() =>{
        vari.style.color = color;
    }, 250);
}

//Added main branch


//Added feature branch

//Hello! Alpha change in *main branch
