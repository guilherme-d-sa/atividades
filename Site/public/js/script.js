let mostrar = true;

const menuSection = document.querySelector('.menu');

const Toggle = menuSection.querySelector('.toggle');

Toggle.addEventListener("click", () => {

  document.body.style.overflow = mostrar ? "hidden" : "";

  menuSection.classList.toggle("on", mostrar);
  mostrar = !mostrar;
});


// const masks = {
//   tell(value) {

//     console.log(value);
//     return value;
//   }
// }
// document.querySelectorAll('input').forEach(($input) => {

//   const fi = $input.dataset.js;

//   $input.addEventListener('input', (e) => {
//     e.target.value = masks.tell(e.target.value)
//   }, false)

// });