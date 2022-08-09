/*---------------------------- start Hamburger_menu_mobile ------------------------*/
// $(document).ready(function() {
//     $("body").removeClass("overflow");
//     $(".preloader").hide();
// });




/*---------------------------- start tabs ------------------------*/
$(".knowledgebase__linetitle").click(function() {
    $('.knowledgebase__linetitle').removeClass('active');
    $(this).addClass('active');
    $(".knowledgebase__linetext").slideUp('500');
    $(this).next(".knowledgebase__linetext").slideDown('500');
});

$(".knowledgebase__headeritem1").click(function() {
    $('.knowledgebase__headeritem').removeClass('active');
    $(this).addClass('active');
    $(".knowledgebase__bodyitem").hide();
    $(".knowledgebase__bodyitem1").show();
});

$(".knowledgebase__headeritem2").click(function() {
    $('.knowledgebase__headeritem').removeClass('active');
    $(this).addClass('active');
    $(".knowledgebase__bodyitem").hide();
    $(".knowledgebase__bodyitem2").show();
});
$(".knowledgebase__headeritem3").click(function() {
    $('.knowledgebase__headeritem').removeClass('active');
    $(this).addClass('active');
    $(".knowledgebase__bodyitem").hide();
    $(".knowledgebase__bodyitem3").show();
});

/*---------------------------- start Scroll_To ------------------------*/
$(".header__menu a").on('click', function(event) {
    if (this.hash !== "") {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 1800, function() {
            window.location.hash = hash;
        });
    }
});

