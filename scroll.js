const scrollContainer=document.getElementById('scroll-container');
  const scrollContent=document.getElementById('scroll-content');
  let scrollAmount=0;
  const scrollStep= 1;//pixel per frame
  const scrollDelay= 15;//ms between frames

  function autoScroll(){
    scrollAmount+=scrollStep;
    if(scrollAmount>=scrollContent.scrollWidth){
        scrollAmount=0;
    }
    scrollContainer.scrollLeft=scrollAmount;
  }
  setInterval(autoScroll,scrollDelay); 