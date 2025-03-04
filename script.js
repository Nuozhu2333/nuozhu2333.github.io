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

    function showTooltip() {
      var content = "<font style='color:red'>这是一个红色文本</font><br>这是一行新的文本！";
      document.getElementById("tooltipContent").innerHTML = content; // 设置传入的富文本内容
      document.getElementById("tooltip").style.display = "block"; // 显示 Tooltip
    }

    // 关闭 Tooltip
    function closeTooltip() {
      document.getElementById("tooltip").style.display = "none"; // 隐藏 Tooltip
    }
