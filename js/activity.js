
let flagList = ['PL', 'UK', "FR", "DE","UA", "BG", "AR", "RU", "BE", "BG", "ES"]
let platformList = ["Stream", "PlayStation", "X-Box"]
let userListBase = ["User332123","fhfgh@sdsfds.com", "Gonzales441", "User54334", "User235532","BigBosss202","mario@mail.com", "User22364","MarianoPol","kobietaMnieBije", "User345436", "User4434", "User34533", "diego@gmail.com", "kacper@gmail.com"]
let userList = [];

addNewUser = () => {
    let randomFlag = Math.floor(Math.random() * (flagList.length));
    let randomPlatform = Math.floor(Math.random() * (platformList.length));
    let randomUser = Math.floor(Math.random() * (userList.length));

    if(userList.length == 0) {
        userList = [...userListBase];
    }
    
    let flag = flagList[randomFlag]
    let platform = platformList[randomPlatform]
    let user = userList[randomUser]
    // prevent to show again this same nickname 
    userList.splice(randomUser,1)
  
    var div = document.createElement("div");
    div.className = 'single-activity';
    div.innerHTML = `<div class='icon-flag icon-flag-${flag}'></div><h5 class='activity-text'><span class='strong'>${user} </span>picked up Cyberpunk 2077 on ${platform}</h5>`
    var parent = document.getElementById("activity");
    parent.appendChild(div);
}


startFunction = () => {
    userList = [...userListBase];
    let interval = 1000;
    setInterval(function() {
        interval =  Math.floor(Math.random() * (5000 - 500 + 1)) + 500;
        setTimeout(addNewUser, interval)
    }, interval)
}

startFunction();