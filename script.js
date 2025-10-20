document.getElementById("afficheImage").addEventListener("click", () => {
  document.querySelector(".about img").style.display = "block";
});

const btn = document.getElementById("dark-mode");

btn.addEventListener("click", () => {
  document.body.classList.toggle("dark");

});