document.addEventListener('DOMContentLoaded', function() {
    closeNav()
    const copyrightElement = document.getElementById('copyright');
    copyrightElement.textContent = '© 糯竹 2022-2025';
});

function openNav() {
  document.getElementById("sideNavigator").style.width = "250px";
  const links = document.getElementById("links");
  links.classList.remove("hidden");
  links.style.visibility = "visible"; 
  const copyrightContainer = document.getElementById("copyrightContainer");
  setTimeout(() => { 
    copyrightContainer.style.visibility = "visible";
    copyrightContainer.classList.remove("hidden");
   }, 150)
}
    
function closeNav() {
    const sideNav = document.getElementById("sideNavigator");
    const links = document.getElementById("links");
    const copyrightContainer = document.getElementById("copyrightContainer");
    
    links.classList.add("hidden");
    copyrightContainer.classList.add("hidden");
    
    // 延迟关闭侧边栏，让内容隐藏动画先完成
    setTimeout(() => {
        sideNav.style.width = "0";
    }, 50);
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

function showTooltip(intent) {
   const tooltipContent = document.getElementById("tooltipContent");
   const tooltip = document.getElementById("tooltip");
   let content = "无结果"
   
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
            content = "<center><font style=\'align:center; color: gold;\'>强力突袭</font></center><br>（2件套）增加1206生命上限<br>（3件套）增加1096耐力上限<br>（4件套）增加129武器伤害和法术伤害<br>（5件套）当你在战斗中施放一个突袭技能时，你和12米内至多5名小队成员获得307武器伤害和法术伤害，持续15秒。";
            break;
          case "完美穿刺疗愈":  
            content = "<center><font style=\'align:center; color: gold;\'>完美穿刺疗愈</font></center><br>（2件完美套）增加3％受到的治疗<br>（2件套）当你用穿刺造成伤害时，你将治疗自身2653点生命，并获得相当于治疗量或过度治疗量的法术和物理抗性，持续5秒。治疗受你的生命上限影响。";
            break;
          case "法力治愈":  
            content = "<center><font style=\'align:center; color: gold;\'>法力治愈</font></center><br>（2件套）增加1096魔力上限<br>（3件套）增加1096魔力上限<br>（4件套）增加129武器伤害和法术伤害<br>（5件套）当你对自己或盟友过量治疗时，治疗目标会获得高级勇气，使其武器伤害和法术伤害提高430，持续5秒。";
            break;
          case "完美劫掠者的收获":  
            content = "<center><font style=\'align:center; color: gold;\'>完美劫掠者的收获</font></center><br>（2件套）增加4%造成的治疗<br>（3件套）永久获得次级庇护，使你在地下城、试炼和竞技场中受到的怪物伤害降低5%。<br>（4件套）增加1096魔力上限<br>（5件完美套）增加129魔力恢复<br>（5件套）战斗中施放终极技能时，将消耗的终极点的2%分配给12米内最多11名其他队伍成员，每2秒触发一次，持续10秒。队伍成员每45秒只能受此套装增益一次。";
            break;
          case "完美决胜时机":  
            content = "<center><font style=\'align:center; color: gold;\'>完美决胜时机</font></center><br>（2件套）增加1487攻击穿透<br>（3件套）永久获得次级杀戮，使你对地下城、试炼、竞技场怪物造成的伤害提高5%<br>（4件套）增加129武器伤害和法术伤害<br>（5件完美套）增加1096魔力上限<br>（5件套）完成蓄满力的重攻击之后，你和最多5名小队成员获得高级杀戮，对地下城、试炼、竞技场怪物造成的伤害提高10%，每600法术伤害或拥有6300魔力可使效果持续1秒。每个目标每22秒仅能受到一次决胜时机影响。最多持续12秒。";
            break;
          case "约尔沃德的指引":  
            content = "<center><font style=\'align:center; color: gold;\'>约尔沃德的指引</font></center><br>（2件套）增加129魔力恢复<br>（3件套）增加129魔力恢复<br>（4件套）增加4%造成的治疗<br>（5件套）战斗时，所有你对自己和友方施加的高级增益、次级增益和伤害护盾的持续时间提高40%。";
            break;
          case "建筑大师":  
            content = "<center><font style=\'align:center; color: gold;\'>建筑大师</font></center><br>（2件套）增加1096魔力上限<br>（3件套）永久获得次级杀戮，使你对地下城、试炼、竞技场怪物造成的伤害提高5%。<br>（4件套）增加129武器伤害和法术伤害<br>（5件套）当你在战斗中使用终极技能时，每消耗10点终极点，自身和周围28米内最近的5名队伍成员就能获得1秒的高级杀戮，使你们对地下城、试炼、竞技场怪物造成的伤害提高10%。";
            break;
          case "完美奥尔奥瑞姆的法衣":  
            content = "<center><font style=\'align:center; color: gold;\'>完美奥尔奥瑞姆的法衣</font></center><br>（2件套）增加129魔力恢复<br>（3件套）永久获得次级庇护，使你在地下城、试炼和竞技场中受到的怪物伤害降低5%。<br>（4件套）增加129魔力恢复<br>（5件完美套）增加1096魔力上限<br>（5件套）在战斗中施放会在地面上留下效果的技能会产生一个力量之环，持续5秒。你和圆环内的队伍成员会获得高级勇气，持续20秒，使武器伤害和法术伤害提高430，持续20秒。该效果每10秒可触发一次。";
            break;
          case "空心牙之渴":  
            content = "<center><font style=\'align:center; color: gold;\'>空心牙之渴</font></center><br>（2件套）增加657暴击率<br>（3件套）增加1096魔力上限<br>（4件套）增加657暴击率<br>（5件套）对目标造成暴击治疗或暴击伤害时，在目标位置生成一个血球。2秒后血球爆炸，为你和血球6米范围内的队伍成员恢复1750魔力，并附加次级活力，持续9秒，其受到的治疗和伤害护盾强度提高6%。该效果每9秒可触发一次。";
            break;
          case "凛冬之憩":  
            content = "<center><font style=\'align:center; color: gold;\'>凛冬之憩</font></center><br>（2件套）增加129魔力恢复<br>（3件套）增加1096魔力上限<br>（4件套）增加1096魔力上限<br>（5件套）在战斗中，施放可在地面上留下效果的技能时会召唤出一个治疗寒霜之环，持续10秒。在该圆环内时，每2秒可为你和队伍成员恢复1125生命。该效果每10秒可以生效一次，且受魔力上限或耐力上限中较高的数值影响。";
            break;
          case "大德鲁伊德维里克":  
            content = "<center><font style=\'align:center; color: gold;\'>大德鲁伊德维里克</font></center><br>（1件套）增加1487攻击穿透<br>（2件套）使用重攻击造成伤害时，1.2秒后对目标7米乘5米区域内至多6名敌人造成650电击伤害伤害，并施加持续7秒的高级脆弱，其所受伤害提高10%。该效果每15秒仅生效一次，且受武器伤害或法术伤害中较高的数值影响。";
            break;
          case "地血":  
            content = "<center><font style=\'align:center; color: gold;\'>地血</font></center><br>（1件套）增加4%造成的治疗<br>（2件套）当你治疗自己或一名生命值低于50%的队伍成员时，你会在其下方召唤一个血池，立即移除所有有害范围效果，并在2秒后治疗该区域内生命值最低的队伍成员，每2秒治疗1702点生命，持续8秒。该效果每20秒可触发一次，并受魔力上限或耐力上限中较高的数值影响。";
            break;
          case "夜焰":  
            content = "<center><font style=\'align:center; color: gold;\'>夜焰</font></center><br>（1件套）增加1096魔力上限<br>（2件套）对自己或友方使用治疗技能时有20%几率召唤一个图腾，持续6秒。该图腾每1秒治疗其5米范围内的友方704生命。该效果每10秒生效一次，且受魔力上限或耐力上限中较高的一项影响。";
            break;
          case "炼狱奥泽赞":  
            content = "<center><font style=\'align:center; color: gold;\'>炼狱奥泽赞</font></center><br>（1件套）增加129魔力恢复<br>（2件套）对你或一名盟友造成过量治疗后，其将获得4272护甲，持续1.1秒。受到治疗的目标获得次级活力，持续1.1秒，受到的治疗和伤害护盾强度提高6%。";
            break;
          case "利刃交响曲":  
            content = "<center><font style=\'align:center; color: gold;\'>利刃交响曲</font></center><br>（1件套）增加4%造成的治疗<br>（2件套）治疗主要资源不足50%的小队成员时，对其施加美瑞蒂亚之援助，每1秒回复570魔力或耐力，持续6秒。该效果每个目标每6秒可生效一次，无法作用于自身，且回复的资源取决于目标的最高资源上限。";
            break;
          case "完美盛大复苏":  
            content = "<center><font style=\'align:center; color: gold;\'>完美盛大复苏</font></center><br>（2件完美套）增加877魔力上限<br>（2件套）大治疗术的初始治疗给予你和受影响的队伍成员盛大复苏，持续6秒，每2秒回复224点魔力和耐力。";
            break;
          case "完美治疗师结界":  
            content = "<center><font style=\'align:center; color: gold;\'>完美治疗师结界</font></center><br>（2件完美套）增加103魔力恢复<br>（2件套）坚固结界为目标施加高级活力，持续4秒，其受到的治疗和伤害护盾强度提高12%。";
            break;
          case "毁灭肩甲":  
            content = "<center><font style=\'align:center; color: gold;\'>毁灭肩甲</font></center><br>（1件套）激活蹲伏姿态可打开或关闭范围12米的尊严光环。光环内最多6名小队成员可获得260武器伤害和法术伤害。每有一名受益于尊严光环的目标，你的生命回复、魔力回复和耐力回复将会降低70。";
            break;
          case "埃尔诺菲的珍珠项链":  
            content = "<center><font style=\'align:center; color: gold;\'>埃尔诺菲的珍珠项链</font></center><br>（1件套）每当你在战斗中使用资源施放治疗技能，且主要资源低于50%时，获得高级英勇，持续1.5秒，每1.5秒获得3终极点。";
            break;     
          case "石头盟约":  
            content = "<center><font style=\'align:center; color: gold;\'>石头盟约</font></center><br>（2件套）增加1096魔力上限<br>（3件套）增加4%造成的治疗<br>（4件套）增加1096魔力上限<br>（5件套）在使用范围效果治疗时，施加次级狂怒和次级信念给被治疗的盟友，持续4秒。如果被治疗的盟友已经拥有来自石头盟约的次级狂怒或次级信念，则恢复550点魔力。该项恢复每5秒可触发一次。";
            break;        
          case "初学者护甲":  
            content = "<center><font style=\'align:center; color: gold;\'>初学者护甲</font></center><br>（1件套）增加1454生命上限<br>（2件套）增加1454生命上限<br>（3件套）增加1454耐力上限";
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
