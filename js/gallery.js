//Gallery for picture 1 portfolio
var image1 = document.querySelector('#img1');
var galleryLeft = document.querySelector('.gallery-left');
var galleryRight = document.querySelector('.gallery-right');
var rightPhoto = document.querySelector('.right');
var leftPhoto = document.querySelector('.left');


image1.addEventListener('click',function(){
    document.querySelector('.gallery').style.display='flex';
    if(size === 0){
        leftPhoto.style.display="none";
    }else if(size === 4){
        leftPhoto.style.display="block";
    }
})

var galerija = document.querySelector('.gallery');
galerija.onclick = function(event){
    if(event.target == galerija){
        document.querySelector('.gallery').style.display='none';
    }
}

galleryLeft.addEventListener('click', function(){
    document.querySelector('.gallery').style.display='none';
})


galleryRight.addEventListener('click', function(){
    document.querySelector('.gallery').style.display='none'; 
})


var slide = document.querySelector('.photo-big');
var pictures = document.querySelectorAll('.photo-big img');
let index = 100;
let size = pictures[0].clientWidth;
slide.style.transform = 'translateX('+  (-size*index) +'%)';

rightPhoto.addEventListener('click',function(){
    size++;
    slide.style.transform = 'translateX(' +  (-size*index) +'%)';
    leftPhoto.style.display="block";
    if(size === 4){
        this.style.display="none";
        leftPhoto.style.display="block";
    }
    
})
leftPhoto.addEventListener('click',function(){
    size--;
    slide.style.transform = 'translateX(' +  (-size*index) +'%)';
    rightPhoto.style.display="block";
    if(size === 0){
        this.style.display="none";
        rightPhoto.style.display="block";
    }
})

//Gallery for picture 2 portfolio
var image2 = document.querySelector('#img2');
var galleryLeft1 = document.querySelector('.gallery-left1');
var galleryRight1 = document.querySelector('.gallery-right1');
var rightPhoto1 = document.querySelector('.right1');
var leftPhoto1 = document.querySelector('.left1');


image2.addEventListener('click',function(){
    document.querySelector('.gallery1').style.display='flex';
    
    if(size1 === 0){
        leftPhoto1.style.display="none";
    }else if(size1 === 4){
        leftPhoto1.style.display="block";
    }
})

var galerija1 = document.querySelector('.gallery1');
galerija1.onclick = function(event1){
    if(event1.target == galerija1){
        document.querySelector('.gallery1').style.display='none';
    }
}

galleryLeft1.addEventListener('click', function(){
    document.querySelector('.gallery1').style.display='none';
})

galleryRight1.addEventListener('click', function(){
    document.querySelector('.gallery1').style.display='none';
})

var slide1 = document.querySelector('.photo-big1');
var pictures1 = document.querySelectorAll('.photo-big1 img');
let index1 = 100;
let size1 = pictures1[0].clientWidth;
slide1.style.transform = 'translateX('+  (-size1*index1) +'%)';


rightPhoto1.addEventListener('click',function(){
    size1++;
    slide1.style.transform = 'translateX(' +  (-size1*index1) +'%)';
    leftPhoto1.style.display="block";
    if(size1 === 4){
        this.style.display="none";
        leftPhoto1.style.display="block";
    }
    
})
leftPhoto1.addEventListener('click',function(){
    size1--;
    slide1.style.transform = 'translateX(' +  (-size1*index1) +'%)';
    rightPhoto1.style.display="block";
    if(size1 === 0){
        this.style.display="none";
        rightPhoto1.style.display="block";
    }
}) 
//Gallery for picture 3 portfolio
var image3 = document.querySelector('#img3');
var galleryLeft2 = document.querySelector('.gallery-left2');
var galleryRight2 = document.querySelector('.gallery-right2');
var rightPhoto2 = document.querySelector('.right2');
var leftPhoto2 = document.querySelector('.left2');

image3.addEventListener('click',function(){
    document.querySelector('.gallery2').style.display='flex';
    if(size2 === 0){
        leftPhoto2.style.display="none";
    }else if(size2 === 4){
        leftPhoto2.style.display="block";
    }
})

var galerija2 = document.querySelector('.gallery2');
galerija2.onclick = function(event2){
    if(event2.target == galerija2){
        document.querySelector('.gallery2').style.display='none';
    }
}

galleryLeft2.addEventListener('click', function(){
    document.querySelector('.gallery2').style.display='none';
})

galleryRight2.addEventListener('click', function(){
    document.querySelector('.gallery2').style.display='none';
})

var slide2 = document.querySelector('.photo-big2');
var pictures2 = document.querySelectorAll('.photo-big2 img');
let index2 = 100;
let size2 = pictures2[0].clientWidth;
slide2.style.transform = 'translateX('+  (-size2*index2) +'%)';


rightPhoto2.addEventListener('click',function(){
    size2++;
    slide2.style.transform = 'translateX(' +  (-size2*index2) +'%)';
    leftPhoto2.style.display="block";
    if(size2 === 3){
        this.style.display="none";
        leftPhoto2.style.display="block";
    }
    
})
leftPhoto2.addEventListener('click',function(){
    size2--;
    slide2.style.transform = 'translateX(' +  (-size2*index2) +'%)';
    rightPhoto2.style.display="block";
    if(size2 === 0){
        this.style.display="none";
        rightPhoto2.style.display="block";
    }
}) 
//Gallery for picture 4 portfolio
var image4 = document.querySelector('#img4');
var galleryLeft3 = document.querySelector('.gallery-left3');
var galleryRight3 = document.querySelector('.gallery-right3');
var rightPhoto3 = document.querySelector('.right3');
var leftPhoto3 = document.querySelector('.left3');


image4.addEventListener('click',function(){
    document.querySelector('.gallery3').style.display='flex';
    if(size3 === 0){
        leftPhoto3.style.display="none";
    }else if(size3 === 4){
        leftPhoto3.style.display="block";
    }
})

var galerija3 = document.querySelector('.gallery3');
galerija3.onclick = function(event){
    if(event.target == galerija3){
        document.querySelector('.gallery3').style.display='none';
    }
}

galleryLeft3.addEventListener('click', function(){
    document.querySelector('.gallery3').style.display='none';
})

galleryRight3.addEventListener('click', function(){
    document.querySelector('.gallery3').style.display='none';
})

var slide3 = document.querySelector('.photo-big3');
var pictures3 = document.querySelectorAll('.photo-big3 img');
let index3 = 100;
let size3 = pictures3[0].clientWidth;
slide3.style.transform = 'translateX('+  (-size3*index3) +'%)';

rightPhoto3.addEventListener('click',function(){
    size3++;
    slide3.style.transform = 'translateX('+  (-size3*index3) +'%)';
    leftPhoto3.style.display="block";
    if(size3 === 4){
        this.style.display="none";
        leftPhoto3.style.display="block";
    }
})
leftPhoto3.addEventListener('click',function(){
    size3--;
    slide3.style.transform = 'translateX('+  (-size3*index3) +'%)';
    rightPhoto3.style.display="block";
    if(size3 === 0){
        this.style.display="none";
        rightPhoto3.style.display="block";
    }
}) 
//Gallery for picture 5 portfolio
var image5 = document.querySelector('#img5');
var galleryLeft4 = document.querySelector('.gallery-left4');
var galleryRight4 = document.querySelector('.gallery-right4');
var rightPhoto4 = document.querySelector('.right4');
var leftPhoto4 = document.querySelector('.left4');


image5.addEventListener('click',function(){
    document.querySelector('.gallery4').style.display='flex';
    if(size4 === 0){
        leftPhoto4.style.display="none";
    }else if(size4 === 4){
        leftPhoto4.style.display="block";
    }
})

var galerija4 = document.querySelector('.gallery4');
galerija4.onclick = function(event){
    if(event.target == galerija4){
        document.querySelector('.gallery4').style.display='none';
    }
}

galleryLeft4.addEventListener('click', function(){
    document.querySelector('.gallery4').style.display='none';
})

galleryRight4.addEventListener('click', function(){
    document.querySelector('.gallery4').style.display='none';
})

var slide4 = document.querySelector('.photo-big4');
var pictures4 = document.querySelectorAll('.photo-big4 img');
let index4 = 100;
let size4 = pictures4[0].clientWidth;
slide4.style.transform = 'translateX('+  (-size4*index4) +'%)';

rightPhoto4.addEventListener('click',function(){
    size4++;
    slide4.style.transform = 'translateX('+  (-size4*index4) +'%)';
    leftPhoto4.style.display="block";
    if(size4 === 4){
        this.style.display="none";
        leftPhoto4.style.display="block";
    }
})
leftPhoto4.addEventListener('click',function(){
    size4--;
    slide4.style.transform = 'translateX('+  (-size4*index4) +'%)';
    rightPhoto4.style.display="block";
    if(size4 === 0){
        this.style.display="none";
        rightPhoto4.style.display="block";
    }
}) 
//Gallery for picture 6 portfolio
var image6 = document.querySelector('#img6');
var galleryLeft5 = document.querySelector('.gallery-left5');
var galleryRight5 = document.querySelector('.gallery-right5');
var rightPhoto5 = document.querySelector('.right5');
var leftPhoto5 = document.querySelector('.left5');


image6.addEventListener('click',function(){
    document.querySelector('.gallery5').style.display='flex';
    if(size5 === 0){
        leftPhoto5.style.display="none";
    }else if(size5 === 4){
        leftPhoto5.style.display="block";
    }
})

var galerija5 = document.querySelector('.gallery5');
galerija5.onclick = function(event){
    if(event.target == galerija5){
        document.querySelector('.gallery5').style.display='none';
    }
}

galleryLeft5.addEventListener('click', function(){
    document.querySelector('.gallery5').style.display='none';
})

galleryRight5.addEventListener('click', function(){
    document.querySelector('.gallery5').style.display='none';
})

var slide5 = document.querySelector('.photo-big5');
var pictures5 = document.querySelectorAll('.photo-big5 img');
let index5 = 100;
let size5 = pictures5[0].clientWidth;
slide5.style.transform = 'translateX('+  (-size5*index5) +'%)';

rightPhoto5.addEventListener('click',function(){
    size5++;
    slide5.style.transform = 'translateX('+  (-size5*index5) +'%)';
    leftPhoto5.style.display="block";
    if(size5 === 4){
        this.style.display="none";
        leftPhoto5.style.display="block";
    }
})
leftPhoto5.addEventListener('click',function(){
    size5--;
    slide5.style.transform = 'translateX('+  (-size5*index5) +'%)';
    rightPhoto5.style.display="block";
    if(size5 === 0){
        this.style.display="none";
        rightPhoto5.style.display="block";
    }
}) 
//Gallery for picture 7 portfolio
var image7 = document.querySelector('#img7');
var galleryLeft6 = document.querySelector('.gallery-left6');
var galleryRight6 = document.querySelector('.gallery-right6');
var rightPhoto6 = document.querySelector('.right6');
var leftPhoto6 = document.querySelector('.left6');


image7.addEventListener('click',function(){
    document.querySelector('.gallery6').style.display='flex';
    if(size6 === 0){
        leftPhoto6.style.display="none";
    }else if(size6 === 4){
        leftPhoto6.style.display="block";
    }
})

var galerija6 = document.querySelector('.gallery6');
galerija6.onclick = function(event){
    if(event.target == galerija6){
        document.querySelector('.gallery6').style.display='none';
    }
}

galleryLeft6.addEventListener('click', function(){
    document.querySelector('.gallery6').style.display='none';
})

galleryRight6.addEventListener('click', function(){
    document.querySelector('.gallery6').style.display='none';
})

var slide6 = document.querySelector('.photo-big6');
var pictures6 = document.querySelectorAll('.photo-big6 img');
let index6 = 100;
let size6 = pictures6[0].clientWidth;
slide6.style.transform = 'translateX('+  (-size6*index6) +'%)';

rightPhoto6.addEventListener('click',function(){
    size6++;
    slide6.style.transform = 'translateX('+  (-size6*index6) +'%)';
    leftPhoto6.style.display="block";
    if(size6 === 4){
        this.style.display="none";
        leftPhoto6.style.display="block";
    }
})
leftPhoto6.addEventListener('click',function(){
    size6--;
    slide6.style.transform = 'translateX('+  (-size6*index6) +'%)';
    rightPhoto6.style.display="block";
    if(size6 === 0){
        this.style.display="none";
        rightPhoto6.style.display="block";
    }
}) 
//Gallery for picture 8 portfolio
var image8 = document.querySelector('#img8');
var galleryLeft7 = document.querySelector('.gallery-left7');
var galleryRight7 = document.querySelector('.gallery-right7');
var rightPhoto7 = document.querySelector('.right7');
var leftPhoto7 = document.querySelector('.left7');


image8.addEventListener('click',function(){
    document.querySelector('.gallery7').style.display='flex';
    if(size7 === 0){
        leftPhoto7.style.display="none";
    }else if(size7 === 1){
        leftPhoto7.style.display="block";
    }
})

var galerija7 = document.querySelector('.gallery7');
galerija7.onclick = function(event){
    if(event.target == galerija7){
        document.querySelector('.gallery7').style.display='none';
    }
}

galleryLeft7.addEventListener('click', function(){
    document.querySelector('.gallery7').style.display='none';
})

galleryRight7.addEventListener('click', function(){
    document.querySelector('.gallery7').style.display='none';
})

var slide7 = document.querySelector('.photo-big7');
var pictures7 = document.querySelectorAll('.photo-big7 img');
let index7 = 100;
let size7 = pictures7[0].clientWidth;
slide7.style.transform = 'translateX('+  (-size7*index7) +'%)';

rightPhoto7.addEventListener('click',function(){
    size7++;
    slide7.style.transform = 'translateX('+  (-size7*index7) +'%)';
    leftPhoto7.style.display="block";
    if(size7 === 1){
        this.style.display="none";
        leftPhoto7.style.display="block";
    }
})
leftPhoto7.addEventListener('click',function(){
    size7--;
    slide7.style.transform = 'translateX('+  (-size7*index7) +'%)';
    rightPhoto7.style.display="block";
    if(size7 === 0){
        this.style.display="none";
        rightPhoto7.style.display="block";
    }
}) 
//Gallery for picture 9 portfolio
var image9 = document.querySelector('#img9');
var galleryLeft8 = document.querySelector('.gallery-left8');
var galleryRight8 = document.querySelector('.gallery-right8');
var rightPhoto8 = document.querySelector('.right8');
var leftPhoto8 = document.querySelector('.left8');


image9.addEventListener('click',function(){
    document.querySelector('.gallery8').style.display='flex';
    if(size8 === 0){
        leftPhoto8.style.display="none";
    }else if(size8 === 2){
        leftPhoto8.style.display="block";
    }
})

var galerija8 = document.querySelector('.gallery8');
galerija8.onclick = function(event){
    if(event.target == galerija8){
        document.querySelector('.gallery8').style.display='none';
    }
}

galleryLeft8.addEventListener('click', function(){
    document.querySelector('.gallery8').style.display='none';
})

galleryRight8.addEventListener('click', function(){
    document.querySelector('.gallery8').style.display='none';
})

var slide8 = document.querySelector('.photo-big8');
var pictures8 = document.querySelectorAll('.photo-big8 img');
let index8 = 100;
let size8 = pictures8[0].clientWidth;
slide8.style.transform = 'translateX('+  (-size8*index8) +'%)';

rightPhoto8.addEventListener('click',function(){
    size8++;
    slide8.style.transform = 'translateX('+  (-size8*index8) +'%)';
    leftPhoto8.style.display="block";
    if(size8 === 2){
        this.style.display="none";
        leftPhoto8.style.display="block";
    }
})
leftPhoto8.addEventListener('click',function(){
    size8--;
    slide8.style.transform = 'translateX('+  (-size8*index8) +'%)';
    rightPhoto8.style.display="block";
    if(size8 === 0){
        this.style.display="none";
        rightPhoto8.style.display="block";
    }
}) 
//Gallery for picture 10 portfolio
var image10 = document.querySelector('#img10');
var galleryLeft9 = document.querySelector('.gallery-left9');
var galleryRight9 = document.querySelector('.gallery-right9');
var rightPhoto9 = document.querySelector('.right9');
var leftPhoto9 = document.querySelector('.left9');


image10.addEventListener('click',function(){
    document.querySelector('.gallery9').style.display='flex';
    if(size9 === 0){
        leftPhoto9.style.display="none";
    }else if(size9 === 3){
        leftPhoto9.style.display="block";
    }
})

var galerija9 = document.querySelector('.gallery9');
galerija9.onclick = function(event){
    if(event.target == galerija9){
        document.querySelector('.gallery9').style.display='none';
    }
}

galleryLeft9.addEventListener('click', function(){
    document.querySelector('.gallery9').style.display='none';
})

galleryRight9.addEventListener('click', function(){
    document.querySelector('.gallery9').style.display='none';
})

var slide9 = document.querySelector('.photo-big9');
var pictures9 = document.querySelectorAll('.photo-big9 img');
let index9 = 100;
let size9 = pictures9[0].clientWidth;
slide9.style.transform = 'translateX('+  (-size9*index9) +'%)';

rightPhoto9.addEventListener('click',function(){
    size9++;
    slide9.style.transform = 'translateX('+  (-size9*index9) +'%)';
    leftPhoto9.style.display="block";
    if(size9 === 3){
        this.style.display="none";
        leftPhoto9.style.display="block";
    }
})
leftPhoto9.addEventListener('click',function(){
    size9--;
    slide9.style.transform = 'translateX('+  (-size9*index9) +'%)';
    rightPhoto9.style.display="block";
    if(size9 === 0){
        this.style.display="none";
        rightPhoto9.style.display="block";
    }
}) 
//Gallery for picture 11 portfolio
var image11 = document.querySelector('#img11');
var galleryLeft10 = document.querySelector('.gallery-left10');
var galleryRight10 = document.querySelector('.gallery-right10');
var rightPhoto10 = document.querySelector('.right10');
var leftPhoto10 = document.querySelector('.left10');


image11.addEventListener('click',function(){
    document.querySelector('.gallery10').style.display='flex';
    if(size10 === 0){
        leftPhoto10.style.display="none";
    }else if(size10 === 2){
        leftPhoto10.style.display="block";
    }
})

var galerija10 = document.querySelector('.gallery10');
galerija10.onclick = function(event){
    if(event.target == galerija10){
        document.querySelector('.gallery10').style.display='none';
    }
}

galleryLeft10.addEventListener('click', function(){
    document.querySelector('.gallery10').style.display='none';
})

galleryRight10.addEventListener('click', function(){
    document.querySelector('.gallery10').style.display='none';
})

var slide10 = document.querySelector('.photo-big10');
var pictures10 = document.querySelectorAll('.photo-big10 img');
let index10 = 100;
let size10 = pictures10[0].clientWidth;
slide10.style.transform = 'translateX('+  (-size10*index10) +'%)';

rightPhoto10.addEventListener('click',function(){
    size10++;
    slide10.style.transform = 'translateX('+  (-size10*index10) +'%)';
    leftPhoto10.style.display="block";
    if(size10 === 2){
        this.style.display="none";
        leftPhoto10.style.display="block";
    }
})
leftPhoto10.addEventListener('click',function(){
    size10--;
    slide10.style.transform = 'translateX('+  (-size10*index10) +'%)';
    rightPhoto10.style.display="block";
    if(size10 === 0){
        this.style.display="none";
        rightPhoto10.style.display="block";
    }
}) 
//Gallery for picture 12 portfolio
var image12 = document.querySelector('#img12');
var galleryLeft11 = document.querySelector('.gallery-left11');
var galleryRight11 = document.querySelector('.gallery-right11');
var rightPhoto11 = document.querySelector('.right11');
var leftPhoto11 = document.querySelector('.left11');


image12.addEventListener('click',function(){
    document.querySelector('.gallery11').style.display='flex';
    if(size11 === 0){
        leftPhoto11.style.display="none";
    }else if(size11 === 4){
        leftPhoto11.style.display="block";
    }
})

var galerija11 = document.querySelector('.gallery11');
galerija11.onclick = function(event){
    if(event.target == galerija11){
        document.querySelector('.gallery11').style.display='none';
    }
}

galleryLeft11.addEventListener('click', function(){
    document.querySelector('.gallery11').style.display='none';
})

galleryRight11.addEventListener('click', function(){
    document.querySelector('.gallery11').style.display='none';
})

var slide11 = document.querySelector('.photo-big11');
var pictures11 = document.querySelectorAll('.photo-big11 img');
let index11 = 100;
let size11 = pictures11[0].clientWidth;
slide11.style.transform = 'translateX('+  (-size11*index11) +'%)';

rightPhoto11.addEventListener('click',function(){
    size11++;
    slide11.style.transform = 'translateX('+  (-size11*index11) +'%)';
    leftPhoto11.style.display="block";
    if(size11 === 4){
        this.style.display="none";
        leftPhoto11.style.display="block";
    }
})
leftPhoto11.addEventListener('click',function(){
    size11--;
    slide11.style.transform = 'translateX('+  (-size11*index11) +'%)';
    rightPhoto11.style.display="block";
    if(size11 === 0){
        this.style.display="none";
        rightPhoto11.style.display="block";
    }
}) 
//Gallery for picture 13 portfolio
var image13 = document.querySelector('#img13');
var galleryLeft12 = document.querySelector('.gallery-left12');
var galleryRight12 = document.querySelector('.gallery-right12');
var rightPhoto12 = document.querySelector('.right12');
var leftPhoto12 = document.querySelector('.left12');


image13.addEventListener('click',function(){
    document.querySelector('.gallery12').style.display='flex';
    if(size12 === 0){
        leftPhoto12.style.display="none";
    }else if(size12 === 4){
        leftPhoto12.style.display="block";
    }
})

var galerija12 = document.querySelector('.gallery12');
galerija12.onclick = function(event){
    if(event.target == galerija12){
        document.querySelector('.gallery12').style.display='none';
    }
}

galleryLeft12.addEventListener('click', function(){
    document.querySelector('.gallery12').style.display='none';
})

galleryRight12.addEventListener('click', function(){
    document.querySelector('.gallery12').style.display='none';
})

var slide12 = document.querySelector('.photo-big12');
var pictures12 = document.querySelectorAll('.photo-big12 img');
let index12 = 100;
let size12 = pictures12[0].clientWidth;
slide12.style.transform = 'translateX('+  (-size12*index12) +'%)';

rightPhoto12.addEventListener('click',function(){
    size12++;
    slide12.style.transform = 'translateX('+  (-size12*index12) +'%)';
    leftPhoto12.style.display="block";
    if(size12 === 4){
        this.style.display="none";
        leftPhoto12.style.display="block";
    }
})
leftPhoto12.addEventListener('click',function(){
    size12--;
    slide12.style.transform = 'translateX('+  (-size12*index12) +'%)';
    rightPhoto12.style.display="block";
    if(size12 === 0){
        this.style.display="none";
        rightPhoto12.style.display="block";
    }
}) 
//Gallery for picture 14 portfolio
var image14 = document.querySelector('#img14');
var galleryLeft13 = document.querySelector('.gallery-left13');
var galleryRight13 = document.querySelector('.gallery-right13');
var rightPhoto13 = document.querySelector('.right13');
var leftPhoto13 = document.querySelector('.left13');


image14.addEventListener('click',function(){
    document.querySelector('.gallery13').style.display='flex';
    if(size13 === 0){
        leftPhoto13.style.display="none";
    }else if(size13 === 4){
        leftPhoto13.style.display="block";
    }
})

var galerija13 = document.querySelector('.gallery13');
galerija13.onclick = function(event){
    if(event.target == galerija13){
        document.querySelector('.gallery13').style.display='none';
    }
}

galleryLeft13.addEventListener('click', function(){
    document.querySelector('.gallery13').style.display='none';
})

galleryRight13.addEventListener('click', function(){
    document.querySelector('.gallery13').style.display='none';
})

var slide13 = document.querySelector('.photo-big13');
var pictures13 = document.querySelectorAll('.photo-big13 img');
let index13 = 100;
let size13 = pictures13[0].clientWidth;
slide13.style.transform = 'translateX('+  (-size13*index13) +'%)';

rightPhoto13.addEventListener('click',function(){
    size13++;
    slide13.style.transform = 'translateX('+  (-size13*index13) +'%)';
    leftPhoto13.style.display="block";
    if(size13 === 4){
        this.style.display="none";
        leftPhoto13.style.display="block";
    }
})
leftPhoto13.addEventListener('click',function(){
    size13--;
    slide13.style.transform = 'translateX('+  (-size13*index13) +'%)';
    rightPhoto13.style.display="block";
    if(size13 === 0){
        this.style.display="none";
        rightPhoto13.style.display="block";
    }
}) 
//Gallery for picture 15 portfolio
var image15 = document.querySelector('#img15');
var galleryLeft14 = document.querySelector('.gallery-left14');
var galleryRight14 = document.querySelector('.gallery-right14');
var rightPhoto14 = document.querySelector('.right14');
var leftPhoto14 = document.querySelector('.left14');


image15.addEventListener('click',function(){
    document.querySelector('.gallery14').style.display='flex';
    if(size14 === 0){
        leftPhoto14.style.display="none";
    }else if(size14 === 4){
        leftPhoto14.style.display="block";
    }
})

var galerija14 = document.querySelector('.gallery14');
galerija14.onclick = function(event){
    if(event.target == galerija14){
        document.querySelector('.gallery14').style.display='none';
    }
}

galleryLeft14.addEventListener('click', function(){
    document.querySelector('.gallery14').style.display='none';
})

galleryRight14.addEventListener('click', function(){
    document.querySelector('.gallery14').style.display='none';
})

var slide14 = document.querySelector('.photo-big14');
var pictures14 = document.querySelectorAll('.photo-big14 img');
let index14 = 100;
let size14 = pictures14[0].clientWidth;
slide14.style.transform = 'translateX('+  (-size14*index14) +'%)';

rightPhoto14.addEventListener('click',function(){
    size14++;
    slide14.style.transform = 'translateX('+  (-size14*index14) +'%)';
    leftPhoto14.style.display="block";
    if(size14 === 4){
        this.style.display="none";
        leftPhoto14.style.display="block";
    }
})
leftPhoto14.addEventListener('click',function(){
    size14--;
    slide14.style.transform = 'translateX('+  (-size14*index14) +'%)';
    rightPhoto14.style.display="block";
    if(size14 === 0){
        this.style.display="none";
        rightPhoto14.style.display="block";
    }
}) 
//Gallery for picture 16 portfolio
var image16 = document.querySelector('#img16');
var galleryLeft15 = document.querySelector('.gallery-left15');
var galleryRight15 = document.querySelector('.gallery-right15');
var rightPhoto15 = document.querySelector('.right15');
var leftPhoto15 = document.querySelector('.left15');


image16.addEventListener('click',function(){
    document.querySelector('.gallery15').style.display='flex';
    if(size15 === 0){
        leftPhoto15.style.display="none";
    }else if(size15 === 4){
        leftPhoto15.style.display="block";
    }
})

var galerija15 = document.querySelector('.gallery15');
galerija15.onclick = function(event){
    if(event.target == galerija15){
        document.querySelector('.gallery15').style.display='none';
    }
}

galleryLeft15.addEventListener('click', function(){
    document.querySelector('.gallery15').style.display='none';
})

galleryRight15.addEventListener('click', function(){
    document.querySelector('.gallery15').style.display='none';
})

var slide15 = document.querySelector('.photo-big15');
var pictures15 = document.querySelectorAll('.photo-big15 img');
let index15 = 100;
let size15 = pictures15[0].clientWidth;
slide15.style.transform = 'translateX('+  (-size15*index15) +'%)';

rightPhoto15.addEventListener('click',function(){
    size15++;
    slide15.style.transform = 'translateX('+  (-size15*index15) +'%)';
    leftPhoto15.style.display="block";
    if(size15 === 4){
        this.style.display="none";
        leftPhoto15.style.display="block";
    }
})
leftPhoto15.addEventListener('click',function(){
    size15--;
    slide15.style.transform = 'translateX('+  (-size15*index15) +'%)';
    rightPhoto15.style.display="block";
    if(size15 === 0){
        this.style.display="none";
        rightPhoto15.style.display="block";
    }
}) 
//Gallery for picture 17 portfolio
var image17 = document.querySelector('#img17');
var galleryLeft16 = document.querySelector('.gallery-left16');
var galleryRight16 = document.querySelector('.gallery-right16');
var rightPhoto16 = document.querySelector('.right16');
var leftPhoto16 = document.querySelector('.left16');


image17.addEventListener('click',function(){
    document.querySelector('.gallery16').style.display='flex';
    if(size16 === 0){
        leftPhoto16.style.display="none";
    }else if(size16 === 4){
        leftPhoto16.style.display="block";
    }
})

var galerija16 = document.querySelector('.gallery16');
galerija16.onclick = function(event){
    if(event.target == galerija16){
        document.querySelector('.gallery16').style.display='none';
    }
}

galleryLeft16.addEventListener('click', function(){
    document.querySelector('.gallery16').style.display='none';
})

galleryRight16.addEventListener('click', function(){
    document.querySelector('.gallery16').style.display='none';
})

var slide16 = document.querySelector('.photo-big16');
var pictures16 = document.querySelectorAll('.photo-big16 img');
let index16 = 100;
let size16 = pictures16[0].clientWidth;
slide16.style.transform = 'translateX('+  (-size16*index16) +'%)';

rightPhoto16.addEventListener('click',function(){
    size16++;
    slide16.style.transform = 'translateX('+  (-size16*index16) +'%)';
    leftPhoto16.style.display="block";
    if(size16 === 4){
        this.style.display="none";
        leftPhoto16.style.display="block";
    }
})
leftPhoto16.addEventListener('click',function(){
    size16--;
    slide16.style.transform = 'translateX('+  (-size16*index16) +'%)';
    rightPhoto16.style.display="block";
    if(size16 === 0){
        this.style.display="none";
        rightPhoto16.style.display="block";
    }
}) 
//Gallery for picture 18 portfolio
var image18 = document.querySelector('#img18');
var galleryLeft17 = document.querySelector('.gallery-left17');
var galleryRight17 = document.querySelector('.gallery-right17');
var rightPhoto17 = document.querySelector('.right17');
var leftPhoto17 = document.querySelector('.left17');


image18.addEventListener('click',function(){
    document.querySelector('.gallery17').style.display='flex';
    if(size17 === 0){
        leftPhoto17.style.display="none";
    }else if(size17 === 4){
        leftPhoto17.style.display="block";
    }
})

var galerija17 = document.querySelector('.gallery17');
galerija17.onclick = function(event){
    if(event.target == galerija17){
        document.querySelector('.gallery17').style.display='none';
    }
}

galleryLeft17.addEventListener('click', function(){
    document.querySelector('.gallery17').style.display='none';
})

galleryRight17.addEventListener('click', function(){
    document.querySelector('.gallery17').style.display='none';
})

var slide17 = document.querySelector('.photo-big17');
var pictures17 = document.querySelectorAll('.photo-big17 img');
let index17 = 100;
let size17 = pictures17[0].clientWidth;
slide17.style.transform = 'translateX('+  (-size17*index17) +'%)';

rightPhoto17.addEventListener('click',function(){
    size17++;
    slide17.style.transform = 'translateX('+  (-size17*index17) +'%)';
    leftPhoto17.style.display="block";
    if(size17 === 4){
        this.style.display="none";
        leftPhoto17.style.display="block";
    }
})
leftPhoto17.addEventListener('click',function(){
    size17--;
    slide17.style.transform = 'translateX('+  (-size17*index17) +'%)';
    rightPhoto17.style.display="block";
    if(size17 === 0){
        this.style.display="none";
        rightPhoto17.style.display="block";
    }
}) 
//Gallery for picture 19 portfolio
var image19 = document.querySelector('#img19');
var galleryLeft18 = document.querySelector('.gallery-left18');
var galleryRight18 = document.querySelector('.gallery-right18');
var rightPhoto18 = document.querySelector('.right18');
var leftPhoto18 = document.querySelector('.left18');


image19.addEventListener('click',function(){
    document.querySelector('.gallery18').style.display='flex';
    if(size18 === 0){
        leftPhoto18.style.display="none";
    }else if(size18 === 4){
        leftPhoto18.style.display="block";
    }
})

var galerija18 = document.querySelector('.gallery18');
galerija18.onclick = function(event){
    if(event.target == galerija18){
        document.querySelector('.gallery18').style.display='none';
    }
}

galleryLeft18.addEventListener('click', function(){
    document.querySelector('.gallery18').style.display='none';
})

galleryRight18.addEventListener('click', function(){
    document.querySelector('.gallery18').style.display='none';
})

var slide18 = document.querySelector('.photo-big18');
var pictures18 = document.querySelectorAll('.photo-big18 img');
let index18 = 100;
let size18 = pictures18[0].clientWidth;
slide18.style.transform = 'translateX('+  (-size18*index18) +'%)';

rightPhoto18.addEventListener('click',function(){
    size18++;
    slide18.style.transform = 'translateX('+  (-size18*index18) +'%)';
    leftPhoto18.style.display="block";
    if(size18 === 4){
        this.style.display="none";
        leftPhoto18.style.display="block";
    }
})
leftPhoto18.addEventListener('click',function(){
    size18--;
    slide18.style.transform = 'translateX('+  (-size18*index18) +'%)';
    rightPhoto18.style.display="block";
    if(size18 === 0){
        this.style.display="none";
        rightPhoto18.style.display="block";
    }
}) 
//Gallery for picture 20 portfolio
var image20 = document.querySelector('#img20');
var galleryLeft19 = document.querySelector('.gallery-left19');
var galleryRight19 = document.querySelector('.gallery-right19');
var rightPhoto19 = document.querySelector('.right19');
var leftPhoto19 = document.querySelector('.left19');


image20.addEventListener('click',function(){
    document.querySelector('.gallery19').style.display='flex';
    if(size19 === 0){
        leftPhoto19.style.display="none";
    }else if(size19 === 4){
        leftPhoto19.style.display="block";
    }
})

var galerija19 = document.querySelector('.gallery19');
galerija19.onclick = function(event){
    if(event.target == galerija19){
        document.querySelector('.gallery19').style.display='none';
    }
}

galleryLeft19.addEventListener('click', function(){
    document.querySelector('.gallery19').style.display='none';
})

galleryRight19.addEventListener('click', function(){
    document.querySelector('.gallery19').style.display='none';
})

var slide19 = document.querySelector('.photo-big19');
var pictures19 = document.querySelectorAll('.photo-big19 img');
let index19 = 100;
let size19 = pictures19[0].clientWidth;
slide19.style.transform = 'translateX('+  (-size19*index19) +'%)';

rightPhoto19.addEventListener('click',function(){
    size19++;
    slide19.style.transform = 'translateX('+  (-size19*index19) +'%)';
    leftPhoto19.style.display="block";
    if(size19 === 4){
        this.style.display="none";
        leftPhoto19.style.display="block";
    }
})
leftPhoto19.addEventListener('click',function(){
    size19--;
    slide19.style.transform = 'translateX('+  (-size19*index19) +'%)';
    rightPhoto19.style.display="block";
    if(size19 === 0){
        this.style.display="none";
        rightPhoto19.style.display="block";
    }
}) 

