const request = new XMLHttpRequest();

request.open("GET","./data.json",true);

request.send();

request.onload = function(){
    const data = JSON.parse(request.response);
    console.log(`${data[0].profile.name} is a ${data[0].profile.job}`)
}