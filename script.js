$(document).ready(function () {
  // Slide the card up and down on mouse enter and leave
  $(".container")
      .mouseenter(function () {
          $(".card").stop().animate(
              {
                  top: "-90px",
              },
              "slow"
          );
      })
      .mouseleave(function () {
          $(".card").stop().animate(
              {
                  top: 0,
              },
              "slow"
          );
      });

  // Flip the card when clicked
  $(".card").click(function () {
      $(this).toggleClass("flipped");
  });
});
