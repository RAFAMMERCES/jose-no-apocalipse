var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2ed8687f-0fc8-4148-a2db-c21ddc3d68b9","c7b92b40-e159-412b-b0d7-d402e7603aad","40300162-348c-4cb7-8805-66fea51bb28d","d1bcaee8-6cb0-4993-a980-0e43423784df","6f237842-19c8-447b-bc8f-d3e5961c77c5"],"propsByKey":{"2ed8687f-0fc8-4148-a2db-c21ddc3d68b9":{"name":"rpgcharacter_05_1","sourceUrl":"assets/api/v1/animation-library/gamelab/NVWLyQ7eFA78l2aOE1XO4ZMdIKEXp338/category_fantasy/rpgcharacter_05.png","frameSize":{"x":214,"y":209},"frameCount":1,"looping":true,"frameDelay":2,"version":"NVWLyQ7eFA78l2aOE1XO4ZMdIKEXp338","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":214,"y":209},"rootRelativePath":"assets/api/v1/animation-library/gamelab/NVWLyQ7eFA78l2aOE1XO4ZMdIKEXp338/category_fantasy/rpgcharacter_05.png"},"c7b92b40-e159-412b-b0d7-d402e7603aad":{"name":"rpgcharacter_10_1","sourceUrl":null,"frameSize":{"x":264,"y":243},"frameCount":1,"looping":true,"frameDelay":12,"version":"xejgSnQOoL_6cLri5jDkhqtc5Zw6GzJ9","categories":["fantasy"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":243},"rootRelativePath":"assets/c7b92b40-e159-412b-b0d7-d402e7603aad.png"},"40300162-348c-4cb7-8805-66fea51bb28d":{"name":"gameplayadventure_06_1","sourceUrl":null,"frameSize":{"x":441,"y":588},"frameCount":1,"looping":true,"frameDelay":12,"version":"3eIosUgeo2OjSuZnVifmq6oDRiZgYVH6","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":441,"y":588},"rootRelativePath":"assets/40300162-348c-4cb7-8805-66fea51bb28d.png"},"d1bcaee8-6cb0-4993-a980-0e43423784df":{"name":"mom.jpg","sourceUrl":null,"frameSize":{"x":441,"y":588},"frameCount":1,"looping":true,"frameDelay":12,"version":"2WZjAw4S3.OGmcasJyQ8HVbC2izBe0Up","loadedFromSource":true,"saved":true,"sourceSize":{"x":441,"y":588},"rootRelativePath":"assets/d1bcaee8-6cb0-4993-a980-0e43423784df.png"},"6f237842-19c8-447b-bc8f-d3e5961c77c5":{"name":"vini","sourceUrl":null,"frameSize":{"x":170,"y":287},"frameCount":1,"looping":true,"frameDelay":12,"version":"Q.rfnx5ang.V0fM8QLz_jm_Hmjb1R_Ds","loadedFromSource":true,"saved":true,"sourceSize":{"x":170,"y":287},"rootRelativePath":"assets/6f237842-19c8-447b-bc8f-d3e5961c77c5.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;

var jose_o_salvador = createSprite(200,390,20,20);
jose_o_salvador.setAnimation("rpgcharacter_10_1");
jose_o_salvador.scale = 0.3


var muie_em_perigo = createSprite(200,30,20,20);
muie_em_perigo.setAnimation("gameplayadventure_06_1");
muie_em_perigo.scale = 0.2


var zombie1 = createSprite(390,285,20,20);
zombie1.velocityX = -5;
zombie1.setAnimation("rpgcharacter_05_1");
zombie1.scale = 0.3




var zombie4 = createSprite(10,140,20,20);
zombie4.velocityX = +5;
zombie4.setAnimation("rpgcharacter_05_1");
zombie4.scale = 0.3







function draw() {
  background("yellow");
  drawSprites();
  
  createEdgeSprites();
  
  jose_o_salvador.bounceOff(edges);
  
  zombie1.bounceOff(edges);
  
  zombie4.bounceOff(edges);
  
  
  
  
  if(keyDown("w")){
   jose_o_salvador.y=jose_o_salvador.y-3;
   } 
  
    if(keyDown("s")){
   jose_o_salvador.y=jose_o_salvador.y+3;
   } 
  
    if(keyDown("a")){
   jose_o_salvador.x=jose_o_salvador.x-3;
   } 
  
    if(keyDown("d")){
   jose_o_salvador.x=jose_o_salvador.x+3;
   } 
  
  
  if(jose_o_salvador.isTouching(zombie1)||jose_o_salvador.isTouching(zombie4)){
    jose_o_salvador.x = 200
    jose_o_salvador.y = 390
    life = life +1
    
   }
  
  textSize(20)
  fill("black")
  text("Mortes: " + life,260,30)
  
  if(jose_o_salvador.isTouching(muie_em_perigo)){
   fill("green")
   textSize(30)
   text("você salvou a muié",80,200);
   
  }
  
  
  
}  
  
  
  
  
  
  
  
  
  
  
  
  


// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
