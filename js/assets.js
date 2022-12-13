let sprites = {}
let assetsStillLoading = 0

const loadingText = document.getElementById('loadingText')

function assetsLoadingLoop(callback) {

  if(assetsStillLoading) {
    loadingText.style.visibility = 'visible'
    requestAnimationFrame(assetsLoadingLoop.bind(this, callback));
  } else {
    loadingText.style.visibility = 'hidden'
    requestAnimationFrame(mainLoop)
  }
}

function loadAssets(callback) {
  function loadSprite(fileName) {
    assetsStillLoading++

    let spriteImage = new Image()
    spriteImage.src = "images/" + fileName

    spriteImage.onload = function() {
      assetsStillLoading--
    }
    return spriteImage
  }

  sprites.background = loadSprite("bg.jpg")
  sprites.bgArena = loadSprite("bgarena.jpg")
  sprites.ikon = loadSprite('ikonhero.png')
  sprites.laserIkon = loadSprite('laserikon.png')
  sprites.weakLaser = loadSprite('weaklasers.png')
  sprites.magicalLaser = loadSprite('magicallaser.png')
  sprites.mediumLaser = loadSprite('medium.png')
  sprites.rustyArmorTop = loadSprite('rustyarmortop.png')
  sprites.junkArmorTop = loadSprite('junkarmortop.png')
  sprites.coin = loadSprite('coin.png')
  sprites.vignette = loadSprite('vignette.png')
  sprites.loz = loadSprite('lof.png')
  sprites.trifekta = loadSprite('trifekta.png')
  sprites.swift = loadSprite('swift.png')
  sprites.steelArmor = loadSprite('steelshield.png')
  sprites.spinningDash = loadSprite('spinningdash.png')
  sprites.whirlwind = loadSprite('whirlwind.png')
  sprites.invaura = loadSprite('invigoratingaura.png')
  sprites.uniaura = loadSprite('unifaura.png')
  sprites.evade = loadSprite('evade.png')
  sprites.rune = loadSprite('rune.png')
  sprites.dest = loadSprite('dest.png')
  sprites.emptiestSlot = loadSprite('emptyslot.png')
  sprites.slot = loadSprite('iconslot.png')
  sprites.armorSlot = loadSprite('armorslot.png')
  sprites.diskSlot = loadSprite('diskslot.png')
  sprites.interiorArmor = loadSprite('interiorarmorslot.png')
  sprites.sideSlot = loadSprite('sideslot.png')
  sprites.topGreenFront = loadSprite('topgreenfront.png')

  assetsLoadingLoop(callback)

}

// ARMOR SETS

// TOP ARMOR DISPLAY

const greenTopView = new Image()
greenTopView.src = "images/turquoisetopview.png"

const yellowTopView = new Image()
yellowTopView.src = "images/yellowtopview.png"

const dentedUpPlay = new Image()
dentedUpPlay.src = "images/junkarmortop.png"

const rustyTopPlay = new Image()
rustyTopPlay.src = "images/rustyarmortop.png"

const topMediumPlay = new Image()
topMediumPlay.src = "images/platearmortop.png"

// TOP ARMOR INVENTORY

const greenTop = new Image()
greenTop.src = "images/turqoisetop.png"


const yellowTop = new Image()
yellowTop.src = "images/yellowtop.png"


const dentedUp = new Image()
dentedUp.src = "images/dentedtop.png"


const topMedium = new Image()
topMedium.src = "images/topmediumarmor.png"

const rustyTop = new Image()
rustyTop.src = "images/rustytop.png"


// CENTER ARMOR

const centerArmor = new Image()
centerArmor.src = "images/centerarmor.png"

const centerArmorGreen = new Image()
centerArmorGreen.src = "images/centerarmorgreen.png"

const centerArmorYellow = new Image()
centerArmorYellow.src = "images/centerarmoryellow.png"

const centerArmorMetal = new Image()
centerArmorMetal.src = "images/centerarmormetal.png"

const centerArmorRusty = new Image()
centerArmorRusty.src = "images/centerarmorusty.png"


// BOTTOM ARMOR

const greenBottom = new Image()
greenBottom.src = "images/turquoisebottom.png"

const dentedBottom = new Image()
dentedBottom.src = "images/dentedbottom.png"

const bottomYellow = new Image()
bottomYellow.src = "images/yellowbottom.png"

const bottomMedium = new Image()
bottomMedium.src = "images/bottommediumarmor.png"

const rustyBottom = new Image()
rustyBottom.src = "images/rustybottom.png"

// UI ARMOR DISPLAY BIGGER
// BOTTOM

const bottomGreenFront = new Image()
bottomGreenFront.src = "images/bottomgreenfront.png"

const bottomMediumFront = new Image()
bottomMediumFront.src = "images/bottommediumfront.png"

const bottomYellowFront = new Image()
bottomYellowFront.src = "images/bottomyellowfront.png"

const bottomJunkArmor = new Image()
bottomJunkArmor.src = "images/bottomjunkfront.png"

const bottomRustyFront = new Image()
bottomRustyFront.src = "images/bottomrustyfront.png"

const bottomDentedFront = new Image()
bottomDentedFront.src = "images/bottomdentedfront.png"

// CENTER

const centerMediumFront = new Image()
centerMediumFront.src = "images/centermediumfront.png"

const centerGreenFront = new Image()
centerGreenFront.src = "images/centergreenfront.png"

const centerYellowFront = new Image()
centerYellowFront.src = "images/centeryellowfront.png"

const centerJunkFront = new Image()
centerJunkFront.src = "images/centerjunkfront.png"

const centerDentedFront = new Image()
centerDentedFront.src = "images/centerdentedfront.png"

const centerPlatinumFront = new Image()
centerPlatinumFront.src = "images/centerplatinumfront.png"

// TOP

const topJunkFront = new Image()
topJunkFront.src = "images/topjunkfront.png"

const topMediumFront = new Image()
topMediumFront.src = "images/topmediumfront.png"

const topRustyFront = new Image()
topRustyFront.src = "images/toprustyfront.png"

const topYellowFront = new Image()
topYellowFront.src = "images/topyellowfront.png"

const topGreenFront = new Image()
topGreenFront.src = "images/topgreenfront.png"

const topDentedFront = new Image()
topDentedFront.src = "images/topdentedfront.png"






// ICONS

const pointsIcon = new Image()
pointsIcon.src = "images/plusicon.png"

const entangledIcon = new Image()
entangledIcon.src = "images/entangled.png"

const confusionIcon = new Image()
confusionIcon.src = "images/confusion.png"

const healingIcon = new Image()
healingIcon.src = "images/healing.png"

const shrouderSkin = new Image()
shrouderSkin.src = "images/shrouderskin.png"




const weakLaser = new Image()
weakLaser.src = "images/weaklasers.png"

const mediumLaser = new Image()
mediumLaser.src = "images/medium.png"

const magicalLaser = new Image()
magicalLaser.src = "images/magicallaser.png"

const visorYellow = new Image()
visorYellow.src = "images/visoryellow.png"

const visorBlue = new Image()
visorBlue.src = "images/visorblue.png"

const visorTurquoise = new Image()
visorTurquoise.src = "images/visorturquoise.png"

const visorRed = new Image()
visorRed.src = "images/visorred.png"

const visorPurple = new Image()
visorPurple.src = "images/visorpurple.png"

const visorOrange = new Image()
visorOrange.src = "images/visororange.png"

const visorGreen = new Image()
visorGreen.src = "images/visorgreen.png"

const visorMagenta = new Image()
visorMagenta.src = "images/visormagenta.png"

const coin = new Image()
coin.src = "images/coin.png"

const spriteStats = new Image()
spriteStats.src = "images/statsicon.png"

const spriteInv = new Image()
spriteInv.src = "images/inventoryicon.png"

const sideSlots = new Image()
sideSlots.src = "images/sideslot.png"

const diskSlot = new Image()
diskSlot.src = "images/diskslot.png"

const armorSlot = new Image()
armorSlot.src = "images/armorslot.png"

const invSlot = new Image()
invSlot.src = "images/iconslot.png"

const intArmor = new Image()
intArmor.src = "images/interiorarmorslot.png"


const emptySlot = new Image()
emptySlot.src = "images/emptyslot.png"

// SKILLS

const loz = new Image()
loz.src = "images/lof.png"

const trifekta = new Image()
trifekta.src = "images/trifekta.png"

const swift = new Image()
swift.src = "images/swift.png"

const steelArmor = new Image()
steelArmor.src = "images/steelshield.png"

const spinningdash = new Image()
spinningdash.src = "images/spinningdash.png"

const whirlwind = new Image()
whirlwind.src = "images/whirlwind.png"

const invaura = new Image()
invaura.src = "images/invigoratingaura.png"

const uniaura = new Image()
uniaura.src = "images/unifaura.png"

const fixaura = new Image()
fixaura.src = "images/fixingaura.png"

const evadeSkill = new Image()
evadeSkill.src = "images/evade.png"

const smoke = new Image()
smoke.src = "images/smoke.png"

let ikon = new Image()
ikon.src = "images/junkarmortop.png"
