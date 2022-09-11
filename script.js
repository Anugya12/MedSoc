$('a').click(function(e){
    e.preventDefault();
    $('body, html').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 120
    }, 1000);
});
/*****************register******************/
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
