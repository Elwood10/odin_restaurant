import loadHomePage from "./loadHomePage";
import loadContactPage from "./loadContactPage";
import loadMenuPage from "./loadMenuPage";

//loads home page on start up//
loadHomePage();

//sets up buttons to load named button page//
const homeBtn = document.getElementById("home");
const menuBtn = document.getElementById("menu");
const contactBtn = document.getElementById("contact");

homeBtn.addEventListener("click", function(){
document.getElementById("content").innerHTML = "";
loadHomePage();
});

menuBtn.addEventListener("click", function(){
    document.getElementById("content").innerHTML = "";
    loadMenuPage();
    });

    contactBtn.addEventListener("click", function(){
        document.getElementById("content").innerHTML = "";
        loadContactPage();
        });