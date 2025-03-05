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

 function showTooltip(valueName) {
      const tooltipContent = document.getElementById("tooltipContent");
      const tooltip = document.getElementById("tooltip");

      if (tooltipContent && tooltip) {
        switch (valueName) {
          case "蛊惑的糖果骷髅头":
            val content ="<center><font style=\'align:center; color: gold;\'>蛊惑的糖果骷髅头</font></center><br>提升<font style=\'color: red;\'>生命上限</font>4620点，<font style=\'color: DeepSkyBlue;\'>法力上限</font>和<font style=\'color: green;\'>耐力上限</font>4250点，<font style=\'color: red;\'>生命回复</font>462点，持续2小时";
            break;
        }
        tooltipContent.innerHTML = content; // 设置传入的内容
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

