const loadContactPage = () => {
   // alert("Hi, i'm a Contact page");
const content = document.getElementById('content');
const words = document.createElement('div');
words.classList.add("contact");
const text = document.createElement('p');
text.classList.add("contactText");
text.textContent = "-- Open Tuesday through Sunday - come by and see us";
const email = document.createElement("p");
email.textContent = "-- Send us a email at tacos.u.like@gmail.com";
const phone =  document.createElement("p");
phone.textContent = "ph. 509.555.4321 (we don't ever actually answer the phone.)"


words.appendChild(text);
words.appendChild(email);
words.appendChild(phone);
content.appendChild(words);




}
export default loadContactPage;