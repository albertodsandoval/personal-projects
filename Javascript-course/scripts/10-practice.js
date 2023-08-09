const testButtonElement = document.querySelector('.js-button');
console.log(testButtonElement.classList.contains('js-button'));

function isToggled(buttonClass){
  const buttonElement = buttonClass;
  if(!buttonElement.classList.contains('is-toggled')){
    removeAllIsToggled();
    buttonElement.classList.add('is-toggled');
  }
  else if(buttonElement.classList.contains('is-toggled')){
    buttonElement.classList.remove('is-toggled');
  }
}
function removeAllIsToggled(){
  if(document.querySelector('.js-gaming').classList.contains('is-toggled'))
    document.querySelector('.js-gaming').classList.remove('is-toggled');
  if(document.querySelector('.js-music').classList.contains('is-toggled'))
    document.querySelector('.js-music').classList.remove('is-toggled');
  if(document.querySelector('.js-tech').classList.contains('is-toggled'))
    document.querySelector('.js-tech').classList.remove('is-toggled');

}
/*
console.log(document.querySelector('.js-is-toggled').classList.contains('is-toggled'));
document.querySelector('.js-is-toggled').classList.add('is-toggled');
console.log(document.querySelector('.js-is-toggled').classList.contains('is-toggled'));
*/