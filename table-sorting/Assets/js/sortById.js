function sortTable(id) {
  var direction = "desc";
  var index = 1;

  var table, rows, switching, i, x, y, shouldSwitch;
  let flag = false;
  if (id === 'id') {
    index = 0;
    flag = true;
  }
  if (document.getElementById('asc').checked) {
    direction = document.getElementById('asc').value;
  }
  console.log("index :  " + index + " direction : " + direction)
  table = document.getElementById("studentTale");
  console.log(table);
  switching = true;
  while (switching) {
    switching = false;
    rows = table.rows;
    for (i = 1; i < (rows.length - 1); i++) {

      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[index];
      y = rows[i + 1].getElementsByTagName("TD")[index];
      if (direction === "asc") {
        if(flag){
          if (parseInt(x.innerHTML) > parseInt(y.innerHTML)) {
            shouldSwitch = true;
            break;
        }
      }else{
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }

      } else {
        if(flag){
          if (parseInt(x.innerHTML) < parseInt(y.innerHTML)) {
            shouldSwitch = true;
            break;
        }
      }else{
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }

    }
    if (shouldSwitch) {

      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}