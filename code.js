var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["74842b55-e234-4cc7-b290-aa31c1d4ba54","20d8e430-a6a6-4a22-9bf7-78a8927d45f2","53c0966f-1399-4120-89d5-e480c3996a57"],"propsByKey":{"74842b55-e234-4cc7-b290-aa31c1d4ba54":{"name":"car_blue_1","sourceUrl":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"lHG1XFlqFup4wzdHby85uHkMnnYotG1g","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/lHG1XFlqFup4wzdHby85uHkMnnYotG1g/category_vehicles/car_blue.png"},"20d8e430-a6a6-4a22-9bf7-78a8927d45f2":{"name":"carblack","sourceUrl":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png","frameSize":{"x":71,"y":131},"frameCount":1,"looping":true,"frameDelay":2,"version":"CSqSIJEb65ONvhatlX8ENonwX._VZQ_n","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":131},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CSqSIJEb65ONvhatlX8ENonwX._VZQ_n/category_vehicles/car_black.png"},"53c0966f-1399-4120-89d5-e480c3996a57":{"name":"sam","sourceUrl":"assets/api/v1/animation-library/gamelab/FGd.xwvKrpdqQks6CQstgdotKRmQc3_y/category_germs/gameplaywacky_02.png","frameSize":{"x":397,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"FGd.xwvKrpdqQks6CQstgdotKRmQc3_y","categories":["germs"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":397,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/FGd.xwvKrpdqQks6CQstgdotKRmQc3_y/category_germs/gameplaywacky_02.png"}}};
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
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  sam.setAnimation("sam");
  sam.scale = 0.09;
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car1.setAnimation("car_blue_1");
  car1.scale=0.12;
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car2.setAnimation("carblack");
  car2.scale = 0.12;
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
  
  car1.velocityY = 8;
  car2.velocityY = 8;
  car3.velocityY = -8;
  car4.velocityY = -8;
 

function draw() {
  background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  
 
  if(keyDown("right")){
    sam.x = sam.x + 2;
  }
  if(keyDown("left")){
    sam.x = sam.x - 2;
  }
  
  if(
     sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4))
  {
     sam.x = 20;
     sam.y = 190;
     life = life + 1;
  }
  
 drawSprites();
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
