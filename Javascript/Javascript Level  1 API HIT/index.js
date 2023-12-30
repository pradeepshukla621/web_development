// let menuItem = ["About", "Services", "Portfolio", "Login"]

let menuItem2 = []


async function bringData() {
    // To Bring Data from Hitting API 
    // await fetch("http://example.com/movies.json").then((res) => {
    //     menuItem2 = res.json();
    //     console.log(res.json());
    // }).catch((err) => {
    //     console.log(err);
    // })

    // Another way to hit API in javascript 
    let xhr = new XMLHttpRequest();
    xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
    xhr.onload = async () => {
        let data = xhr.response
        menuItem2 = JSON.parse(data);
        console.log("API Hit Response:-", menuItem2);

        let menuDom = document.getElementById('menu')
        for (let i = 0; i < 4; i++) {
            let para = document.createElement("p");
            para.innerHTML = menuItem2[i].username;
            para.className = 'menu-item';
            // Now will add this node or append this to menu 
            menuDom.appendChild(para);
        }
    }
    xhr.send();

}

bringData();






