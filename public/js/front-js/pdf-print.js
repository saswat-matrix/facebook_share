'use strict';

/*(function () {
  window.print();
})();*/

window.onload = function() { 
  document.title = document.getElementById('pdf_name').innerHTML;
  window.print();
  document.execCommand('print');
  window.close();
};