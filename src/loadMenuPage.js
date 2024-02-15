const loadMenuPage = () => {
  //  alert("Hi, i'm a Menu Page");
const content = document.getElementById('content');
const menuWords = document.createElement('div');
menuWords.classList.add("menuContent")
const text = document.createElement('p');
text.classList.add("menuWords");
text.textContent = "Welcome to our Mexican restaurant, where you'll find we only use the finest authentic ingredients for our menu items ( we only sell tacos)." ;
const text1 = document.createElement("p");
text1.classList.add("menuItems");
text1.textContent = "Taco: with seasoned ground beef, tomatoes, lettuce, cheese, dollop of sour cream. - $5.00 ea.";
const text2 = document.createElement("p");
text2.classList.add("kidsTitle");
text2.textContent = "For the Nino's";
const text3 = document.createElement("p");
text3.classList.add("kidsItems");
text3.textContent = "Seasoned ground beef scraped from adult taco, covered with cheese, and some apple slices."

menuWords.appendChild(text);
menuWords.appendChild(text1);
menuWords.appendChild(text2);
menuWords.appendChild(text3);
content.appendChild(menuWords);
}
export default loadMenuPage;