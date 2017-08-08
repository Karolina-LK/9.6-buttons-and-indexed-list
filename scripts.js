var list = document.getElementById('list'),
    add = document.getElementById('addElem');

add.addEventListener('click', function(e) {
  var liElement = document.createElement('li');
   
  var liAllElements = document.getElementsByTagName('li');
  var liNumber = liAllElements.length;
  liElement.innerHTML = 'item ' + liNumber;
 
  list.appendChild(liElement);
});