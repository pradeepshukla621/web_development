// ############ For Header Part ############

let menuItem2 = ["About", "Services", "Portfolio", "Login"]
let menuDom = document.getElementById('menu')
for (let i = 0; i < 4; i++) {
    let para = document.createElement("p");
    para.innerHTML = menuItem2[i];
    para.className = 'menu-item';
    // Now will add this node or append this to menu 
    menuDom.appendChild(para);
}



// ############ For Other Data API Hit ########
userData = [];

async function bringData() {
    // Another way to hit API in javascript 
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/familyMember");
    xhr.onload = async () => {
        let data = xhr.response
        userData = JSON.parse(data);
        console.log("API Hit Response:-", userData);

        // OUR LOGIC FOR DISPLAYING DATA 
        let divOfUserData = document.getElementById('userData');
        let d = '';
        for (let ele = 0; ele < userData.length; ele++) {
            data = userData[ele].name + '--------' 
            d = d +  data
        }
        divOfUserData.innerHTML = d;
    }
    xhr.send();
}

bringData();








