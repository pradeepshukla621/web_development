// let menuItem = ["About", "Services", "Portfolio", "Login"]

let menuItem2 = [
    {
        name:"About",
        className:"menu-item"
    },
    {
        name:"Services",
        className:"menu-item"
    },
    {
        name:"Portfolio",
        className:"menu-item"
    },
    {
        name:"Login",
        className:"menu-item"
    }
]


let menuDom = document.getElementById('menu')

// for (let i = 0; i < menuItem.length; i++) {
//     let para = document.createElement("p");
//     para.innerHTML = menuItem[i];
//     para.className = "menu-item";
//     // Now will add this node or append this to menu 
//     menuDom.appendChild(para);
// }

for (let i = 0; i < menuItem2.length; i++) {
    let para = document.createElement("p");
    para.innerHTML = menuItem2[i].name;
    para.className = menuItem2[i].className;
    // Now will add this node or append this to menu 
    menuDom.appendChild(para);
}



