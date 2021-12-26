import 'bootstrap@4.6.0'
import $ from 'jquery'

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const loot = {
  generate() {
    var itemNum = getRandomInt(11);
    switch(itemNum){
      case 1:
        var itemType = "Armor";
        break;
      case 2:
        var itemType = "Potion";
        break;
      case 3:
        var itemType = "Ring";
        break;
      case 4:
        var itemType = "Rod";
        break;
      case 5:
        var itemType = "Scroll";
        break;
      case 6:
        var itemType = "Staff";
        break;
      case 7:
        var itemType = "Wand";
        break;
      case 8:
        var itemType = "Axe";
        break;
      case 9:
        var itemType = "Belt";
        break;
      case 10:
        var itemType = "Boots";
        break;
      default:
        itemType = "Formula";
    }
var effectNum = getRandomInt(11);
    switch(effectNum){
      case 1:
        var itemEffect = "Health";
        break;
      case 2:
        var itemEffect = "Giant Strength";
        break;
      case 3:
        var itemEffect = "Invulnerability";
        break;
      case 4:
        var itemEffect = "Resistance to Fire";
        break;
      case 5:
        var itemEffect = "Arrow-Catching";
        break;
      case 6:
        var itemEffect = "Speed";
        break;
      case 7:
        var itemEffect = "Defense";
        break;
      case 8:
        var itemEffect = "Flying";
        break;
      case 9:
        var itemEffect = "Blasting";
        break;
      case 10:
        var itemEffect = "Humankind";
        break;
      default:
        itemEffect = "";
    }
    if (itemEffect !== ""){
      itemEffect = " of " + itemEffect
    }

var qualityNum = getRandomInt(11);
    switch(qualityNum){
      case 1:
        var itemQuality = "Bloodthirsty";
        break;
      case 2:
        var itemQuality = "Mysterious";
        break;
      case 3:
        var itemQuality = "Cursed";
        break;
      case 4:
        var itemQuality = "Quirky";
        break;
      case 5:
        var itemQuality = "Dutiful";
        break;
      case 6:
        var itemQuality = "Unbalanced";
        break;
      case 7:
        var itemQuality = "Insecure";
        break;
      case 8:
        var itemQuality = "Incomprehensible";
        break;
      case 9:
        var itemQuality = "Animated";
        break;
      case 10:
        var itemQuality = "Berserker's";
        break;
      default:
        itemQuality = "";
    }

    if (itemQuality !== ""){
      itemQuality = itemQuality + " "
    }
    console.log(itemNum,effectNum,qualityNum);
    return itemQuality + itemType + itemEffect;
  }
};

$('button')
  .html('Decrypt Engram') // Try edit it...
  .on('click', () => $("p").text(loot.generate()))

console.log('App started')