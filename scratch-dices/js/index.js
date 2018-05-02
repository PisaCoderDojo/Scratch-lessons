
function rngDice(){
    return Math.floor(Math.random() * 6) + 1  ;
}

$(function() {
 $('.random').on("click",function(){
   var die = 1;
   $('td:first-child').each(function() {
        $(this).children(":first").attr('src',"https://raw.githubusercontent.com/Ventrosky/web-projects/master/coderdojo29_pi_ap/img/dadi/dado-"+die+"-"+rngDice()+".png");
        die += 1;
    });

 });
});