"use strict";

var currentDay = moment().format("D");
var $popupDocument = $(".popup--countdown");
var daysArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];


var navigation = {};

navigation.clearOldDays = function() {
  var currentDaysArray = daysArray.splice(0,currentDay-1);


  for(let day of currentDaysArray) {
    $(".day[data-day="+ day +"]").css("display","none");
  };
};

navigation.getCurrentDay = function() {
  var targetDay = $(this).data("day");
  if(targetDay <= currentDay) {
    $(this).css("display","none");
  }
};

navigation.showDoc = function() {
  var countdownDay = 25 - currentDay;
  if (countdownDay > 1) {
   $(".popup--countdown__days").text(countdownDay + " days");
  } else {
    $(".popup--countdown__days").text(countdownDay + " day");
  }
  $popupDocument.css("display","block");
};

navigation.hideDoc = function() {
  $popupDocument.css("display","none");
};

navigation.init = function() {


  $(".day").on("click", function() {
    navigation.getCurrentDay.call($(this));
  });

  $(".area__document").on("click", function() {
    if( currentDay < 25) {
      navigation.showDoc();
    }
  });

  $(".popup--countdown").on("click", function() {
    navigation.hideDoc();
  });
};

$(function() {
  navigation.init();
  navigation.clearOldDays();
});



