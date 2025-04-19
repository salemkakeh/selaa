
function change () {
  let pass  = document.getElementById("password").value;
  let email = document.getElementById("email").value;
  let sub   = document.getElementById("sub");
  const emailRegex =/^\w+([\.-]?\w+)*@\w+(\.\w{2,3})+$/;
  if(pass.length >=8 && emailRegex.test(email)) {
    if(sub.disabled) {
      sub.removeAttribute("disabled");
    }
  } else {
    if(!sub.disabled) {
      sub.disabled = true;
    }
  }
}
document.getElementById("password").addEventListener("input",change);
document.getElementById("email").addEventListener("input",change);




function formValidate () {
  let name  = document.getElementById("text").value;
  let phone = document.getElementById("phone").value;
  let next = document.getElementById("next");

  const nameRegex = /^[a-zA-Zا-ي\s]+$/;
  if(phone.length >= 10 && nameRegex.test(name)) {
    
    if(next.disabled) {
      next.removeAttribute("disabled");
    }
  }  else {
      next.disabled = true;
  }

}
document.getElementById("text").addEventListener("input",formValidate);
document.getElementById("phone").addEventListener("input",formValidate);



let next = document.getElementById("next");
let section_1 = document.getElementById("section_1");
let section_2 = document.getElementById("section_2");
let sub   = document.getElementById("sub");
let back_form   = document.getElementById("back-form");
let steps = document.querySelectorAll("#sections .steps .step");
let span = document.querySelectorAll("#sections .steps span");


next.onclick = function () {
  section_2.removeAttribute("hidden");
  section_1.hidden = true;
  next.hidden = true;
  sub.removeAttribute("hidden");
  back_form.removeAttribute("hidden");
  steps[1].classList.toggle("active");
  span[0].classList.toggle("active-full");
  span[0].classList.toggle("active");
}

back_form.onclick = function () {
  section_1.removeAttribute("hidden");
  section_2.hidden = true;
  sub.hidden = true;
  next.removeAttribute("hidden");
  back_form.hidden = true;
  steps[1].classList.toggle("active");
  span[0].classList.toggle("active-full");
  span[0].classList.toggle("active");
}