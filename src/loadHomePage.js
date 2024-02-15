const loadHomePage = () => {
    //alert("Hi, i'm a homepage");
const content = document.getElementById('content');
const words = document.createElement('div');
words.classList.add("homeTitle");
const text = document.createElement('p');
text.textContent = "COMIDA DEL MEXICO";
words.appendChild(text);
content.appendChild(words);
}
export default loadHomePage;