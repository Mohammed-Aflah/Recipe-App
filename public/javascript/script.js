const btn = document.querySelector("#add-btn");
const minusBtn=document.querySelector('#minus-btn')
const IngredientList = document.querySelector("#ingList");
const IngredientDiv = document.querySelector("#ingDiv");
const ingD=document.getElementById('iD')
btn.addEventListener("click", (e) => {
  e.preventDefault()
  let newIngredient = ingD.cloneNode(true);
  let input=newIngredient.getElementsByTagName("input")[0];
  input.value='';
  ingD.appendChild(newIngredient);
  // newIngredient.getElementsByClassName('second_select')[0].disabled=true;
  // alert('d')
});
minusBtn.addEventListener('click',(e)=>{
  e.preventDefault()
  ingD.lastChild.remove()
})
