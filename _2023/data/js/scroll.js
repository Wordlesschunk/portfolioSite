var scrollElements = ["contact", "experience", "knowledge", "about"];

window.onscroll = function(e) {
  for (var elid of scrollElements)
    document.getElementById(elid + "-ref").classList.remove("selected");

  if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
    document.getElementById(scrollElements[0] + "-ref").classList.add("selected");
    return;
  }
  
  for (var elid of scrollElements) {
    if ((window.scrollY + 130) > document.getElementById(elid).offsetTop) {
      document.getElementById(elid + "-ref").classList.add("selected");
      break;
    }
  }
};

for (var elid of scrollElements)
  document.getElementById(elid + "-ref").onclick = function(e) {
    e.preventDefault();
    window.scroll({
      top: document.querySelector(this.getAttribute("href")).offsetTop - 100,
      behavior: "smooth"
    });
  };
