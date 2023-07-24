$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
   
    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // owl animation script
    var typed = new Typed(".typing",{
        strings:["Web Developer","Web Designer"],
        typeSpeed: 100,
        backspeed: 60,
        loop: true
        
    });
     
    var typed = new Typed(".typing-2",{
        strings:["Rimsha Iqbal","Web Technology Specialist"],
        typeSpeed: 70,
        backspeed: 60,
        loop: true
    });
    
    var typed = new Typed(".typing-3",{
        strings:["Technical Skills ", "Course Load"],
        typeSpeed: 70,
        backspeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-4",{
        strings:["Feel Free To ", "Get In Touch"],
        typeSpeed: 70,
        backspeed: 60,
        loop: true
    });
   

    //toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});




