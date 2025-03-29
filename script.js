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

 function showTooltip(intent) {
   const tooltipContent = document.getElementById("tooltipContent");
   const tooltip = document.getElementById("tooltip");
   let content = "No eligible items found"
   
      if (tooltipContent && tooltip) {
        switch (intent) {
          case "属性点：生命":  
            content = "<center><font style=\'align:center; color: red;\'>属性点：生命</font></center><br><font style=\'color: red;\'>生命上限</font>提升122点";
            break;
          case "属性点：耐力":  
            content = "<center><font style=\'align:center; color: green;\'>属性点：耐力</font></center><br><font style=\'color: green;\'>耐力上限</font>提升111点";
            break;
          case "属性点：法力":  
            content = "<center><font style=\'align:center; color: DeepSkyBlue;\'>属性点：法力</font></center><br><font style=\'color: DeepSkyBlue;\'>法力上限</font>提升111点";
            break; 
          case "勇士点数：天马赐福":  
            content = "<center><font style=\'align:center; color: green;\'>勇士点数：天马赐福</font></center><br>脱战移动速度每阶段提高0.4%";
            break;
          case "勇士点数：决斗者的不屑":  
            content = "<center><font style=\'align:center; color: DeepSkyBlue;\'>勇士点数：决斗者的不屑</font></center><br>受到的单体攻击伤害每阶段降低3%";
            break;
          case "勇士点数：持久信念":  
            content = "<center><font style=\'align:center; color: DeepSkyBlue;\'>勇士点数：持久信念</font></center><br>受到的持续伤害每阶段降低3%";
            break;
          case "勇士点数：无懈可击":  
            content = "<center><font style=\'align:center; color: DeepSkyBlue;\'>勇士点数：无懈可击</font></center><br>受到的范围攻击伤害每阶段降低3%";
            break;
          case "勇士点数：壁垒":  
            content = "<center><font style=\'align:center; color: DeepSkyBlue;\'>勇士点数：壁垒</font></center><br>装备盾牌或寒霜法杖时，你的法术和物理抗性提高1900";
            break; 
          case "勇士点数：准备就绪":  
            content = "<center><font style=\'align:center; color: DeepSkyBlue;\'>勇士点数：准备就绪</font></center><br>受到的非玩家伤害每阶段降低5%";
            break;
          case "勇士点数：敏捷":  
            content = "<center><font style=\'align:center; color: red;\'>勇士点数：敏捷</font></center><br>移动速度每阶段提高2%";
            break;
          case "勇士点数：矫健":  
            content = "<center><font style=\'align:center; color: red;\'>勇士点数：矫健</font></center><br>被失能效果影响后，可无消耗自动挣脱束缚。触发该效果后会获得疲惫效果，并在21秒内无法再次触发该效果或其他与之类似的效果";
            break;
          case "勇士点数：专家闪避":  
            content = "<center><font style=\'align:center; color: red;\'>勇士点数：专家闪避</font></center><br>下一次翻滚闪避不产生消耗。该效果使用后，30秒内无法再次获得该效果";
            break;
          case "勇士点数：无限活力":  
            content = "<center><font style=\'align:center; color: red;\'>勇士点数：无限活力</font></center><br>每阶段提高28<font style=\'color: red;\'>生命上限</font>";
            break;
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
          case "娜扎莱":  
            content = "<center><font style=\'align:center; color: gold;\'>娜扎莱</font></center><br>（1件套）增加1206生命上限<br>（2件套）使用终极技能时，12米内最近的6名敌人已承受的高级减益及次级减益每遭受20终极点则延长1秒。该效果对每个目标每30秒生效一次。";
            break;
          case "完美珠光结界":  
            content = "<center><font style=\'align:center; color: gold;\'>完美珠光结界</font></center><br>（2件套）增加1206生命上限<br>（3件套）永久获得次级庇护，使你在地下城、试炼和竞技场中受到的怪物伤害降低5%<br>（4件套）增加4％受到的治疗<br>（5件完美套）增加1206生命上限<br>（5件套）给予你和最多11位小队成员珠光结界。这一增益可持续到角色死后。珠光结界将基于存活的小队成员人数提升武器伤害和法术伤害，最高可达180。当前武器伤害和法术伤害为180。珠光结界将基于已死小队成员人数，提升对非玩家敌人的减伤，效果不超过66%。当前减伤为0%。";
            break;       
          case "强力突袭":  
            content = "<center><font style=\'align:center; color: gold;\'>强力突袭</font></center><br>（2件套）增加1206生命上限<br>（3件套）增加1096耐力上限<br>（4件套）增加129武器伤害和法术伤害<br>（5件套）当你在战斗中施放一个突袭技能时，你和5米内至多12名小队成员获得307武器伤害和法术伤害，持续15秒。";
            break;
          case "完美穿刺疗愈":  
            content = "<center><font style=\'align:center; color: gold;\'>完美穿刺疗愈</font></center><br>（2件完美套）增加3％受到的治疗<br>（2件套）当你用穿刺造成伤害时，你将治疗自身2653点生命，并获得相当于治疗量或过度治疗量的法术和物理抗性，持续5秒。治疗受你的生命上限影响。";
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

