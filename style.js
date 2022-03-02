const btn = document.querySelector("button");
const body = document.body;

btn.addEventListener("click", () => {
  if (document.body.style.backgroundColor === "white") {
    document.body.style.backgroundColor = "black";
    btn.style.backgroundColor = "black";
    btn.classList.add("boxShadow");
    btn.classList.add("boxFont");
    btn.classList.add("btnBorder");
    document.title = "Good Night";
  } else {
    document.body.style.backgroundColor = "white";
    btn.style.backgroundColor = "white";
    btn.classList.toggle("boxShadow");
    btn.classList.toggle("btnBorderWhite");
    btn.classList.remove("boxFont");
    document.title = "Good Morning";
  }
});
