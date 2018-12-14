console.log("my code is here!!!");

function greet(name, time) {
  console.log('Good ' + time +" "+ name);
}

function setClassWarning(event) {
  let el = document.getElementById('mypara');
  el.className = 'warning';
}

function clearClass(event) {
  let el = document.getElementById('mypara');
  el.className = '';
}

function setClassTip(event){
  let el = document.getElementById('mypara');
  el.className = 'tip';
}
