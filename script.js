function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
  document.getElementById("copyright").style.visibility = "visible";
}
 
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("copyright").style.visibility = "hidden";
}

function close(){
  window.close()
}

function showTooltip(event, content) {
  const tooltip = document.getElementById('tooltip');
  const tooltipContent = document.getElementById('tooltip_content');
  tooltipContent.innerHTML = "1"; 
  tooltip.style.display = 'block';
}

function closeTooltip() {
  const tooltip = document.getElementById('tooltip');
  tooltip.style.display = 'none';
}
