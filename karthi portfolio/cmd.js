var typed=new Typed(".text",{
    strings:["Frontend Developer","Web Designer"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true

})






window.addEventListener('load', function() {
    const progressBars = document.querySelectorAll('.progress');
    progressBars.forEach(progressBar => {
        const width = progressBar.style.width;
        progressBar.style.width = 0;
        setTimeout(() => {
            progressBar.style.width = width;
        }, 500);
    });
  });
