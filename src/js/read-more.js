function readMore(event) {
  const [dots, more, btn] = event.target.parentElement.children;

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btn.innerHTML = "Читать дальше";
    more.style.display = "none";
  } else {
    dots.style.display = "none";
    btn.innerHTML = "Скрыть";
    more.style.display = "inline";
  }
}
