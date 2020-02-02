$(document).ready(function () {
  var progresBarrPercentage = 96; //first barr

  var progresBarrPercentage2 = 85; //second barr

  var progresBarrPercentage3 = 45; //third barr

  var animationDuration = 1.8; /// same value as in transition property
  //for &__skills circle:nth-of-type(5) and &__skills circle:nth-of-type(2)

  function SVGRoad(elem) {
    this.barrLength = elem.getTotalLength();

    this.setStrokeDasharrayInPercebtage = function (strokeDasharray) {
      elem.style.strokeDasharray = this.barrLength * (strokeDasharray / 100);
    };

    this.setStrokeDashoffsetInPercebtage = function (strokeDashoffset) {
      elem.style.strokeDashoffset = this.barrLength * (strokeDashoffset / 100);
    };
  } ////FIRST CIRCLE PROGRESSBARR//////////////////////////


  var circleSkillBarr = document.getElementById("circleSkillBarr1");
  var circleSkillBarrSmall = document.getElementById("circleSkillBarrSmall1");
  var SVGRoadInstance = new SVGRoad(circleSkillBarr);
  SVGRoadInstance.setStrokeDasharrayInPercebtage(100);
  SVGRoadInstance.setStrokeDashoffsetInPercebtage(progresBarrPercentage);
  var SVGRoadInstanceSmall = new SVGRoad(circleSkillBarrSmall);
  SVGRoadInstanceSmall.setStrokeDasharrayInPercebtage(100);
  SVGRoadInstanceSmall.setStrokeDashoffsetInPercebtage(progresBarrPercentage); ////SECOND CIRCLE PROGRESSBARR//////////////////////////

  var circleSkillBarr2 = document.getElementById("circleSkillBarr2");
  var circleSkillBarrSmall2 = document.getElementById("circleSkillBarrSmall2");
  var SVGRoadInstance = new SVGRoad(circleSkillBarr2);
  SVGRoadInstance.setStrokeDasharrayInPercebtage(100);
  SVGRoadInstance.setStrokeDashoffsetInPercebtage(progresBarrPercentage2);
  var SVGRoadInstanceSmall = new SVGRoad(circleSkillBarrSmall2);
  SVGRoadInstanceSmall.setStrokeDasharrayInPercebtage(100);
  SVGRoadInstanceSmall.setStrokeDashoffsetInPercebtage(progresBarrPercentage2); ////THIRD CIRCLE PROGRESSBARR//////////////////////////

  var circleSkillBarr3 = document.getElementById("circleSkillBarr3");
  var circleSkillBarrSmall3 = document.getElementById("circleSkillBarrSmall3");
  var SVGRoadInstance = new SVGRoad(circleSkillBarr3);
  SVGRoadInstance.setStrokeDasharrayInPercebtage(100);
  SVGRoadInstance.setStrokeDashoffsetInPercebtage(progresBarrPercentage3);
  var SVGRoadInstanceSmall = new SVGRoad(circleSkillBarrSmall3);
  SVGRoadInstanceSmall.setStrokeDasharrayInPercebtage(100);
  SVGRoadInstanceSmall.setStrokeDashoffsetInPercebtage(progresBarrPercentage3); /// ANIMATED COUNTER FOR CIRCLE PROGRES BARR//////////////

  $({
    countNum: $(".barrPercentage").html()
  }).animate({
    countNum: progresBarrPercentage,
    countNum2: progresBarrPercentage2,
    countNum3: progresBarrPercentage3
  }, {
    duration: 2000,
    //easing: 'linear',
    step: function step() {
      $("#barrPercentage").html(Math.floor(this.countNum) + "%");
      $("#barrPercentage2").html(Math.floor(this.countNum2) + "%");
      $("#barrPercentage3").html(Math.floor(this.countNum3) + "%");
    },
    complete: function complete() {
      $("#barrPercentage").html(this.countNum + "%");
      $("#barrPercentage2").html(this.countNum2 + "%");
      $("#barrPercentage3").html(this.countNum3 + "%");
    }
  });
});
//# sourceMappingURL=index.js.map
