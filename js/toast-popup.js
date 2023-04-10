//-提示訊息消失_new
var toast = document.querySelector("#msg_board");
window.onload = function () {
  setTimeout(() => {
    toast.classList.add("active");
  }, 500);
  setTimeout(() => {
    toast.classList.remove("active");
    toast.classList.add("hidden");
  }, 3500);
};

toast.addEventListener("click", () => {
  setTimeout(() => {
    toast.classList.add("hidden");
  }, 500);
});
