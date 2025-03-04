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

 function showTooltip(fixedValue) {
      const tooltipContent = document.getElementById("tooltipContent");
      const tooltip = document.getElementById("tooltip");

      if (tooltipContent && tooltip) {
        tooltipContent.innerHTML = fixedValue; // 设置传入的内容
        tooltip.style.display = "block"; // 显示 Tooltip
      } else {
        console.error("Tooltip elements not found!");
      }
    }

    // 关闭 Tooltip
    function closeTooltip() {
      const tooltip = document.getElementById("tooltip");

      if (tooltip) {
        tooltip.style.display = "none"; // 隐藏 Tooltip
      } else {
        console.error("Tooltip element not found!");
      }
    }

