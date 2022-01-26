$(document).ready(()=>{

    $( "#start" ).click(function() {
        $( "div" )
          .show( "slow" )
          .animate({ left: "+=200" }, 1500 )
          .animate({ top: '+=200' }, 1500 )
          .animate({ left: '-=200' }, 1500 )
          .animate({ top: '-=200' }, 1500 )
      });
      $( "#stop" ).click(function() {
        $( "div" )
          .queue( "fx", [] )
          .stop();
      });
      
});