gsap.set('.slidesm',{scale:7})
var  tl = gsap.timeline(
    {
        scrollTrigger:{
            trigger:'.home',
            start:'top top',
            end:'bottom bottom ',
            scrub:.5,
           
        }
    }
)

tl
.to('.videodiv',{
    '--clip':'0%',
       ease:Power2
},'a')
.to('.slidesm',{
        scale:1,
        ease:Power2

       
    },'a')
.to('.lft',{
        xPercent:-10,
        stagger:.3,
        ease:Power2

       
    },'b')
.to('.rgt',{
    xPercent:10,
    stagger:.3,
    ease:Power2

       
    },'b')

gsap.to('.slide',{
    scrollTrigger:{
        trigger:'.real',
        start:'top top',
        end:'bottom bottom ',
        marker:true,
        scrub:.5,
       
    },
    xPercent:-200,
    ease:Power4
}) 

// ================================
// team section 

document.querySelectorAll('.lislm').forEach(function(elm) {
elm.addEventListener('mousemove',function(det){
    gsap.to(this.querySelector('.picture'),{
        x:gsap.utils.mapRange(0,innerWidth,-200,200,det.clientX),
        opacity:1,
        ease:Power4,
        duration:.5,

    })
})
elm.addEventListener('mouseleave',function(det){
    gsap.to(this.querySelector('.picture'),{
     
        opacity:0,
        ease:Power4,
        duration:.5,

    })
    })
})

////////////////////////////////////////////
let content = ''

document.querySelector('.paratext').textContent.split('').forEach(e => {
    if(e == ' ')   content += `<span>&nbsp;</span>`
    content += `<span>${e}</span>`
})
document.querySelector('.paratext').innerHTML= content

gsap.set('.paratext span',{opacity:0.1})
gsap.to('.paratext span',{
    scrollTrigger:{
        trigger:'.para',
        start:'top 50%',
        end:'bottom 90%',
        scrub:2,
        

    },
    opacity:1,
    stagger:.2,
    ease:Power4

})
   // capsule 

   gsap.to('.capsules:nth-child(2)',{
    scrollTrigger:{
        trigger:'.capsule',
    start:'top 70%',
    end:'bottom bottom',
    scrub:1
    },
    y:0,
    ease:Power4 


   })

   document.querySelectorAll('.section').forEach(e =>{
    ScrollTrigger.create({
        trigger:e,
        start:'top 50%',
        end:'bottom 50%',
        markers:true,
        onEnter:function() {
            document.body.setAttribute('theme',e.dataset.color)
        },
        onEnterBack:function() {
            document.body.setAttribute('theme',e.dataset.color)
        }
    })
})

// locomotive for smooth scrolling 
    (function () {
        const locomotiveScroll = new LocomotiveScroll();
    })();




 
