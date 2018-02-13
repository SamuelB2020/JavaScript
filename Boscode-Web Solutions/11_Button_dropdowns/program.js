$(document).ready(function () {
  $('#runButton').click(program);
  $('#selectControl').change(selectControlChanged);
});

var selectControlChanged = function () {
  console.log('changed');
};

var program = function () {
  var $select = $('#selectControl option:selected');
  var selectedValue = $select.val();
  var selectedText = $select.text();
  console.log('value = ' + selectedValue + ' text = ' + selectedText);
};
