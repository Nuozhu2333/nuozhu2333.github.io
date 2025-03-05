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
   let content = "No eligible items found"
   
      if (tooltipContent && tooltip) {
        switch (valueName) {
          case "蛊惑的糖果骷髅头":  
            content = "<center><font style=\'align:center; color: gold;\'>蛊惑的糖果骷髅头</font></center><br>提升<font style=\'color: red;\'>生命上限</font>4620点，<font style=\'color: DeepSkyBlue;\'>法力上限</font>和<font style=\'color: green;\'>耐力上限</font>4250点，<font style=\'color: red;\'>生命回复</font>462点，持续2小时";
            break;
          case "欧佐加的烟熏熊臀":  
            content = "<center><font style=\'align:center; color: gold;\'>欧佐加的烟熏熊臀</font></center><br>提升<font style=\'color: red;\'>生命上限</font>4312点，<font style=\'color: red;\'>生命回复</font>406点，<font style=\'color: DeepSkyBlue;\'>法力回复</font>和<font style=\'color: green;\'>耐力回复</font>369点，持续2小时";
            break;
          case "暴政宝石":  
            content = "<center><font style=\'align:center; color: purple;\'>暴政宝石</font></center><br>提升<font style=\'color: red;\'>生命上限</font>3927点，<font style=\'color: DeepSkyBlue;\'>法力回复</font>和<font style=\'color: green;\'>耐力回复</font>357点，持续2小时";
            break; 
          case "逆转潮汐":  
            content = "<center><font style=\'align:center; color: gold;\'>逆转潮汐</font></center><br>（2件套）增加1206生命上限<br>（3件套）增加1096耐力上限<br>（4件套）增加1206生命上限<br>（5件套）格挡时，获得持续10秒的流水，使你下次猛击对5乘10米范围内最多6名敌人造成2964魔法伤害，并在10秒内施加高级脆弱，提高10%受到的伤害。该效果15秒仅生效一次，且受你的生命上限影响。";
            break;
          case "完美珠光结界":  
            content = "<center><font style=\'align:center; color: gold;\'>完美珠光结界</font></center><br>（2件套）增加1206生命上限<br>（3件套）永久获得次级庇护，使你在地下城、试炼和竞技场中受到的怪物伤害降低5%<br>（4件套）增加4％受到的治疗<br>（5件完美套）增加1206生命上限<br>（5件套）给予你和最多11位小队成员珠光结界。这一增益可持续到角色死后。珠光结界将基于存活的小队成员人数提升武器伤害和法术伤害，最高可达180。当前武器伤害和法术伤害为180。珠光结界将基于已死小队成员人数，提升对非玩家敌人的减伤，效果不超过66%。当前减伤为0%。";
            break;
          default:
            console.log("值不在预期范围内");
        }        
        
        tooltipContent.innerHTML = content;
        tooltip.style.display = "block";
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

