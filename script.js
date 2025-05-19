document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".box");

  boxes.forEach((box) => {
    const header = box.querySelector(".box-header");
    const radio = box.querySelector(".box-radio");

    header.addEventListener("click", function () {
      // Collapse all boxes and uncheck radios
      boxes.forEach((b) => {
        b.classList.remove("active");
        b.querySelector(".box-radio").checked = false;
      });

      // Expand this one and check its radio
      box.classList.add("active");
      radio.checked = true;
    });
  });
});
