const input = document.getElementById('input');

input.addEventListener('click', clickAlert); 

function clickAlert() {
  alert('I was clicked!');
}

function addingEventListener(){
  
    input.addEventListener('click', clickAlert());
}
