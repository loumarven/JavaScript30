document.addEventListener('keydown', function(e) {
  let keyNode = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (keyNode) {
    let audio = new Audio(keyNode.getAttribute("data-audio"));
    audio.play();

    if (!keyNode.className.includes("playing")) {
      keyNode.classList.add("playing");
    }
  }
});

document.addEventListener('keyup', function(e) {
  let keyNode = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  if (keyNode) {
    keyNode.classList.remove("playing");
  }
});
