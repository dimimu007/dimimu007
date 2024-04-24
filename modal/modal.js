var open = document.getElementById("open-btn");
var close = document.getElementById("close-btn");
var modal = document.getElementById("modal-container");

open.addEventListener("click", function () {
  modal.style.display = "block";
});

close.addEventListener("click", function () {
  modal.style.display = "none";
});

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});
