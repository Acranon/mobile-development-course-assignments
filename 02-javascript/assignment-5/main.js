function calc() {
  var start = document.getElementById("start").value;
  var percent = document.getElementById("percent").value;
  var years = document.getElementById("years").value;
  start = parseFloat(start);
  percent = parseFloat(percent);
  years = parseFloat(years);
  var tabble = "<table><tr><th>Month</th><th>Interest</th><th>Balance</th></tr>";
  var currentnum = start;
  for (var i = 1; i <= years*12; i++) {
    var interest = currentnum * ((percent/100)/12);
    currentnum += interest;
    currentnum = Math.round(currentnum * 100) / 100;
    tabble += "<tr><td>"+i+"</td><td>"+interest.toFixed(2)+"</td><td>"+currentnum.toFixed(2)+"</td>";
  }
  tabble += "</table>";
  document.getElementById("results_table").innerHTML = tabble;
}

function reset() {
  document.getElementById("results_table").innerHTML = "";
}