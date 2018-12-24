// the className :"is the class name that we want to assign it to the element."
function setClass(className) {
  //let el = document.getElementById('mypara');
  //el.className = className;
  //Method and Property Chaining
  document.getElementById('mypara').className = className;
}

document.addEventListener('DOMContentLoaded', function (event){
  //let makeWarning = document.getElementById('make-warning');
  //makeWarning.addEventListener('click', function (event){
  //Method and Property Chaining
  document.getElementById('make-warning').addEventListener('click', function (event){
    setClass('warning');
  });

  //Method and Property Chaining
  //let makeTip = document.getElementById('make-tip');
  //makeTip.addEventListener('click', function (event){
  document.getElementById('make-tip').addEventListener('click', function (event){
    setClass('tip');
  });

  //Method and Property Chaining
  //let makeNormal = document.getElementById('make-normal');
  //makeNormal.addEventListener('click', function (event){
  document.getElementById('make-normal').addEventListener('click', function (event){
    setClass('');
  });
});