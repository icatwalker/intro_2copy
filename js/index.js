/**
 * Created by Administrator on 2016/11/20.
 */
//var screen_width=window.innerWidth;
//var screen_height=window.innerHeight;
//console.log("width:"+screen_width+"&height:"+screen_height);
//$("#box").css("width",3*screen_width+"px");
//  //.css("height",2*screen_height+"px");
//$("#left_box,#middle_box,#right_box_up,#right_box_down").css("width",screen_width+"px")
//  .css("height",screen_height+"px");

//function move_left(){
//  var total_width=parseFloat(window.innerWidth);
//  console.log(total_width);
//  //转化为百分数
//  var left_box_l=parseFloat($("#left_box").css("left"))/total_width;
//  var middle_box_l=$("#middle_box").css("left");
//  var right_box_l=$("#right_box").css("left");
//
//  left_box=parseInt(left_box)+1+"00%";
//  $("#left_box").animate({"left":left_box_l},2000);
//  $("#middle_box").animate({"left":middle_box_l},2000);
//  $("#right_box").animate({"left":right_box_l},2000);
//  console.log(left_box_l);
//}
//function move_right(){}


//页面切换功能
(function(){
  setTimeout(function(){
    $("#left_select,#right_select").addClass("animated bounceInLeft");
  });
})();
$("body").css("left","100%");
$("#left_select").mouseover(function(){
  $("#left_select").removeClass("animated bounceInLeft").addClass("animated swing infinite");
  $("#eye").css("left",1290);
}).click(function(){
  $("#left_box").animate({"left":0},2000);
  $("#middle_box").animate({"left":"100%"},2000);
  $("#right_box").animate({"left":"200%"},2000);
});
$("#left_select").mouseout(function(){
  $("#left_select").removeClass("animated swing infinite");
  $("#eye").css("left",1295);
});
$("#right_select").mouseover(function(){
  $("#right_select").removeClass("animated bounceInLeft").addClass("animated swing infinite");
  $("#eye").css("left",1300);
}).click(function(){
  $("#left_box").animate({"left":"-200%"},2000);
  $("#middle_box").animate({"left":"-100%"},2000);
  $("#right_box").animate({"left":0},2000);

});
$("#right_select").mouseout(function(){
  $("#right_select").removeClass("animated swing infinite");
  $("#eye").css("left",1295);
});
//页面左边到中间
$("#left_back").click(function(){
  $("#left_box").animate({"left":"-100%"},2000);
  $("#middle_box").animate({"left":"0"},2000);
  $("#right_box").animate({"left":"100%"},2000);
});
//页面右边到中间
$("#right_back").click(function(){
  $("#left_box").animate({"left":"-100%"},2000);
  $("#middle_box").animate({"left":"0"},2000);
  $("#right_box").animate({"left":"100%"},2000);
});

$("#left_box #container").on("click","a",function(e){
  var href=$(this).data("link");
  if(href==""){
    e.preventDefault();
    var input=prompt();
    console.log(input);
    $(this).data("link",input);
    console.log(href);
  }else{
    //location.href=href;
    window.open(href);
  }
});
$("#left_box #container a:nth-child(1)").css("backgroundImage","url('img/baidu.png')");
$("#left_box #container a:nth-child(2)").css("backgroundImage","url('img/fenghuang.png')");
$("#left_box #container a:nth-child(3)").css("backgroundImage","url('img/tudou.png')");
$("#left_box #container a:nth-child(4)").css("backgroundImage","url('img/douyu.png')");
$("#left_box #container a:nth-child(5)").css("backgroundImage","url('img/githup.png')");
$("#left_box #container a:nth-child(6)").css("backgroundImage","url('img/stackoverflow.png')");

