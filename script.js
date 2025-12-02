const animateTextTyping = (node) => {
  const text = node.textContent;
  const chars = text.split("");

  node.textContent = "";
  node.classList.add("typing");
  let i = 0;

  const addNextChar = () => {
    const nextChar = chars[i] === "\n" ? "<br>" : chars[i];
    node.insertAdjacentHTML("beforeend", `<span>${nextChar}</span>`);

    if (i < chars.length - 1) {
      i++;
      // 4× faster typing speed
      setTimeout(addNextChar, 10 + Math.random() * 50);
    } else {
      setTimeout(() => {
        node.classList.remove("typing");
      }, 10 + Math.random() * 112);
    }
  };

  addNextChar();
};

window.onload = () => {
  animateTextTyping(document.getElementById("text"));
};
