var screenWidth = document.getElementById('wrapper').offsetWidth;
var size;
size = screenWidth + 5;
function test() {
  if (screenWidth < 500) { 
    document.getElementById('wall').style.top = size + 'px';
  }
}

test();

var displayStart = document.getElementById('display-start'),
    displayAction = document.getElementById('display-action'),
    displayGameOver = document.getElementById('display-game-over'),
    textMoney = document.getElementById('money'),
    panelHealth = document.getElementById('panelHealth'),
    textDamage = document.getElementById('textDamage'),
    level = 0,
    money = 0,
    health = 0,
    weaponLevel = 0,
    gameStatus = false,
    weapon1 = true,
    weapon2 = false,
    weapon3 = false,
    weapon4 = false,
    priceWeapon_1 = 0,
    priceWeapon_2 = 150,
    priceWeapon_3 = 500,
    priceWeapon_4 = 750;

displayStart.style.display = 'block';

function updateHPandMoney() {
  textMoney.innerHTML = money;
  document.getElementById('panelHealth').style.width = ((health/10)*2)+ "px";
}

function deleteDamageInfo() {
  document.getElementById('damageInfo').style.display = 'none';
}

function checkWeapon(weaponID) {
  if(weaponID == 1) {
    alert("Назначено 1");
    weaponLevel = 1;
    document.getElementById('slot1').classList.add('checked');
    document.getElementById('slot2').classList.remove('checked');
    document.getElementById('slot3').classList.remove('checked');
    document.getElementById('slot4').classList.remove('checked');
  } else if(weaponID == 2 && weapon2 == false && weaponLevel != 2) {
    if(money < priceWeapon_2) {
      alert("Нету денег на покупку!");  
    } else {
      money -= priceWeapon_2;
      weapon2 = true;
      weaponLevel = 2;
      document.getElementById('slot1').classList.remove('checked');
      document.getElementById('slot2').classList.add('checked');
      document.getElementById('slot3').classList.remove('checked');
      document.getElementById('slot4').classList.remove('checked');
      document.getElementById('invMoney2').innerHTML = '';  
      
      alert("Куплено 2"); 
    }
  } else if(weaponID == 2 && weapon2 == true) {
    alert("Установлено 2");  
    weaponLevel = 2;
    document.getElementById('slot1').classList.remove('checked');
    document.getElementById('slot2').classList.add('checked');
    document.getElementById('slot3').classList.remove('checked');
    document.getElementById('slot4').classList.remove('checked');
  } else if(weaponID == 3 && weapon3 == false && weaponLevel != 3) {
    if(money < priceWeapon_3) {
      alert("Нету денег на покупку!");  
    } else {
      money -= priceWeapon_3;
      weapon3 = true;
      weaponLevel = 3;
      document.getElementById('slot1').classList.remove('checked');
      document.getElementById('slot2').classList.remove('checked');
      document.getElementById('slot3').classList.add('checked');
      document.getElementById('slot4').classList.remove('checked');
      document.getElementById('invMoney3').innerHTML = '';  
      
      alert("Куплено 3"); 
    }
  } else if(weaponID == 3 && weapon3 == true) {
    alert("Установлено 3");  
    weaponLevel = 3;
    document.getElementById('slot1').classList.remove('checked');
    document.getElementById('slot2').classList.remove('checked');
    document.getElementById('slot3').classList.add('checked');
    document.getElementById('slot4').classList.remove('checked');
  } else if(weaponID == 4 && weapon4 == false && weaponLevel != 4) {
    if(money < priceWeapon_4) {
      alert("Нету денег на покупку!");  
    } else {
      money -= priceWeapon_4;
      weapon4 = true;
      weaponLevel = 4;
      document.getElementById('slot1').classList.remove('checked');
      document.getElementById('slot2').classList.remove('checked');
      document.getElementById('slot3').classList.remove('checked');
      document.getElementById('slot4').classList.add('checked');
      document.getElementById('invMoney4').innerHTML = '';  
      
      alert("Куплено 4"); 
    }
  } else if(weaponID == 4 && weapon4 == true) {
    alert("Установлено 4");  
    weaponLevel = 4;
    document.getElementById('slot1').classList.remove('checked');
    document.getElementById('slot2').classList.remove('checked');
    document.getElementById('slot3').classList.remove('checked');
    document.getElementById('slot4').classList.add('checked');
  } 
  
  updateHPandMoney();
}

function toMainScene() {
  displayStart.style.display = 'block';
  displayGameOver.style.display = 'none';
  displayAction.style.display = 'none';  
}

function setWall() {
  document.getElementById('wall').src="images/wall.png";
}

function start() {
  //alert("start");
  
  displayStart.style.display = 'none';
  displayGameOver.style.display = 'none';
  displayAction.style.display = 'block';
  
  level = 1;
  money = 0;
  gameStatus = true;
  health = 1000;
  weaponLevel = 1;
  weapon1 = true;
  weapon2 = false;
  weapon3 = false;
  weapon4 = false;
  
  document.getElementById('slot1').classList.add('checked');
  document.getElementById('slot2').classList.remove('checked');
  document.getElementById('slot3').classList.remove('checked');
  document.getElementById('slot4').classList.remove('checked');
  
  document.getElementById('invMoney1').innerHTML = priceWeapon_1 + '$'; 
  document.getElementById('invMoney2').innerHTML = priceWeapon_2 + '$'; 
  document.getElementById('invMoney3').innerHTML = priceWeapon_3 + '$'; 
  document.getElementById('invMoney4').innerHTML = priceWeapon_4 + '$'; 
  
  updateHPandMoney();
}

function clickCastle() {
  var damage = 0,
      getMoney = 0;

  if(gameStatus) {
    if(health < 0 && level == 1) {
      alert("level 2");
      level++;
      health = 1000;
      document.getElementById('wall').style.display = 'none';
    } else if(health < 0 && level == 2) {
      // game over 
      //alert("game over");
      gameStatus = true;
      displayStart.style.display = 'none';
      displayGameOver.style.display = 'block';
      displayAction.style.display = 'none';
    }
    
    if(level == 1) {
      damage = (Math.floor(Math.random() * 20) + 1) + weaponLevel;  
      getMoney = Math.round((damage+Math.floor(Math.random() * 5) + 1)/5);
    } else if(level == 2) {
      damage = (Math.floor(Math.random() * 10) + 1) + weaponLevel;  
      getMoney = Math.round((damage+Math.floor(Math.random() * 5) + 1));
    }
    
    health = health - damage;
    money = money + getMoney;
    
    //alert(size);
    document.getElementById('damageInfo').style.display = 'block';
    textDamage.innerHTML = '-' + damage;
    if (screenWidth < 500) {
      var posTop = [20,40,60,80,100],
          posLeft = [20,60,100,140,180];
      
      var posDamageTop,
          posDagameLeft;
      posDamageTop = size - posTop[Math.floor(Math.random() * 5)];
      posDagameLeft = posLeft[Math.floor(Math.random() * 5)];
      document.getElementById('damageInfo').style.top = posDamageTop + 'px';
      document.getElementById('damageInfo').style.left = posDagameLeft + 'px';
    } else {
      var posTop = [250,350,450,300,400],
          posLeft = [50,100,150,200,250];
      
      var posDamageTop,
          posDagameLeft;
      posDamageTop = posTop[Math.floor(Math.random() * 5)];
      posDagameLeft = posLeft[Math.floor(Math.random() * 5)];
      document.getElementById('damageInfo').style.top = posDamageTop + 'px';
      document.getElementById('damageInfo').style.left = posDagameLeft + 'px'; 
    }
    
    document.getElementById('wall').src="images/wall_black.png";
    setTimeout(setWall,500);
    setTimeout(deleteDamageInfo, 1000);
    
    
    updateHPandMoney();
  }
}