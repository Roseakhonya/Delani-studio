$(document).ready(function() {
  $(".my-design p").hide();
  $("#img-design").click(function() {
    $(this).hide();
    $("#design").show();
  });

  $("#design").click(function() {
    $("#img-design").show();
    $(this).hide();
  });

  $("#image-dev").click(function() {
    $(this).hide();
    $("#develop").show();
  });

  $("#develop").click(function() {
    $("#image-dev").show();
    $(this).hide();
  });

  $("#img-manage").click(function() {
    $(this).hide();
    $("#manage").show();
  });

  $("#manage").click(function() {
    $("#img-manage").show();
    $(this).hide();
  });
  // Hover effects for portfolio items
  $(".portfolio1").hover(
    function() {
      $(".description1").show();
    },
    function() {
      $(".description1").hide();
    }
  );

  $(".portfolio2").hover(
    function() {
      $(".description2").show();
    },
    function() {
      $(".description2").hide();
    }
  );

  $(".portfolio3").hover(
    function() {
      $(".description3").show();
    },
    function() {
      $(".description3").hide();
    }
  );

  $(".portfolio4").hover(
    function() {
      $(".description4").show();
    },
    function() {
      $(".description4").hide();
    }
  );

  $(".portfolio5").hover(
    function() {
      $(".description5").show();
    },
    function() {
      $(".description5").hide();
    }
  );

  $(".portfolio6").hover(
    function() {
      $(".description6").show();
    },
    function() {
      $(".description6").hide();
    }
  );

  $(".portfolio7").hover(
    function() {
      $(".description7").show();
    },
    function() {
      $(".description7").hide();
    }
  );

  $(".portfolio8").hover(
    function() {
      $(".description8").show();
    },
    function() {
      $(".description8").hide();
    }
  );
  //Form validation
  //If("#name" = " ");
  //alert("Please fill your name");
 // else if ("#email" = " ");
  //alert("Invalid");
 // else
  alert("Success")
  
  
});
