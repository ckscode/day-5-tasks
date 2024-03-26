const request = new XMLHttpRequest();

request.open("GET","./data.json",true);

request.send();

request.onload = function(){
    const data = JSON.parse(request.response);
     
    //for loop
    console.log("for loop--")
    for(let i =0;i<data.length;i++){
    console.log(`${data[i].profile.name} is a ${data[i].profile.job}`)
    }

    //for in loop
    console.log("for in loop--")
    for(let key in data){
        console.log(`${data[key].profile.name} is a ${data[key].profile.job} `)
    }

    //for of loop
    console.log("for of loop--")
    for(let obj of data){
        console.log(`${obj.profile.name} is a ${obj.profile.job} `)
    }
    
   //forEach loop
    console.log("forEach loop--")
    data.forEach((item)=>console.log(`${item.profile.name} is a ${item.profile.job}`))
}