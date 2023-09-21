$(document).ready(function(){

  
$('.slider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  slidesToScroll: 1,

  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
		
});
        
  let hr = document.getElementById("hour");
  let min = document.getElementById("min");
  let sec = document.getElementById("sec");
 
    setInterval(() => {
      d = new Date(); //object of date()
      hh = d.getHours();
      mm = d.getMinutes();
      ss = d.getSeconds();
      h_rotation = 30 * hh + mm / 2; //converting current time
      m_rotation = 6 * mm;
      s_rotation = 6 * ss;
   
      hr.style.transform = `rotate(${h_rotation}deg)`;
      min.style.transform = `rotate(${m_rotation}deg)`;
      sec.style.transform = `rotate(${s_rotation}deg)`;
  }, 1000);
  
  

