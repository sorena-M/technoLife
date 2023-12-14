//log info
console.log(
  "%cthis website is created by  sorena mahmoudi all sliders are design and made by sorena mahmoudi",
  "    color: #143fed; font-family:sans-serif; font-size:14px;"
);
console.log(
  `%cthis website is fully responsive but if responsivity doesnt work please refresh the website (the problem is from the browser ) but if still it didnt work please close the tap and open it again `,
  "    color: #cccdd1; font-family:sans-serif; font-size:14px;"
);
console.log(
  "%c --- version : 4.5",
  "color: #cccdd1;  font-family:sans-serif; font-size:14px;"
);
console.log(
  "%c --- date : blackFirday 2023",
  "color: #cccdd1;  font-family:sans-serif; font-size:14px;"
);

console.log(
  "%c --- project sucsess",
  "color: rgb(11, 134, 34);  font-family:sans-serif; font-size:14px;"
);
//open search engine
let searchBox = document.getElementById("searchBox_input");
searchBox.addEventListener("click", function () {
  subSearch.classList.remove("none");
  subSearch.classList.add("block");
  backDrop.classList.remove("none");
  backDrop.classList.add("block");
  document.getElementById("body").classList.add("scrollNone");
  //timer
  var searchval = document.getElementById("searchval");
  var searchinterval = document.getElementById("searchinval");
  setInterval(
    (timer = () => {
      searchinterval.innerHTML = searchval.value;
    }),
    100
  );
});
//CLEAR
setInterval(() => {
  searchBox_input.value = `محصول،برند و یا دسته بندی خود را انتخاب کنید`;
  searchBox_input.style.color = "gray";
}, 1);
//close search engine
let subSearch = document.getElementById("subSearch");
let backDrop = document.getElementById("backDrop");
let closeBtn = document.getElementById("closeBtn");
closeBtn.addEventListener("click", function () {
  subSearch.classList.add("none");
  subSearch.classList.remove("block");
  backDrop.classList.add("none");
  backDrop.classList.remove("block");
  document.getElementById("body").classList.remove("scrollNone");
});
//slider
var slideIndex = 0;
showSlides();
function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.remove("active");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 3000);
}
//setting btn
let setting = document.getElementById("setting");
let subSetting = document.getElementById("subSetting");
setting.addEventListener("click", function () {
  subSetting.classList.toggle("flex");
});
//open founded part
let ansSearch = document.getElementById("ansSearch");
let result = document.getElementById("result");
let hasContent = document.getElementById("hasContent");
let submit = document.getElementById("submitSearch");
let iphone = document.querySelectorAll("div.iphone");
let ab = document.querySelectorAll("div.ab");
submit.addEventListener("click", function () {
  subSearch.classList.add("scrollNone");

  if (searchval.value.length == 0) {
    hasContent.classList.add("none");
    ansSearch.classList.remove("none");
    ansSearch.classList.add("block");
    result.innerHTML = `<span>...</span>&nbsp; &nbsp;<span class="red">چیزی پیدا نشده است</span>`;
  } else if (searchval.value == "iphone") {
    hasContent.classList.remove("none");
    ansSearch.classList.remove("none");
    ansSearch.classList.add("block");
    result.innerHTML = searchval.value;
    //filter start
    ab.classList.add("none");
    ab.classList.remove("block");
    iphone.classList.add("block");
    iphone.classList.remove("none");
    //filter end
  } else {
    hasContent.classList.remove("none");
    ansSearch.classList.remove("none");
    ansSearch.classList.add("block");
    result.innerHTML = searchval.value;
  }
});
//close founded part
let closeSearch = document.getElementById("closeSearch");
closeSearch.addEventListener("click", function () {
  ansSearch.classList.remove("block");
  ansSearch.classList.add("none");
  hasContent.classList.remove("none");
  subSearch.classList.remove("scrollNone");
});
//main slider
$(document).ready(function () {
  // jQuery methods go here...

  let mainSlideIndex = 1;
  let slidepages = document.getElementsByClassName("mainSlides");
  let dotss = document.getElementsByClassName("dotss");
  //repeat
  setInterval(function autoplay() {
    slideplus();
  }, 4000);
  //onclick ++
  $("#nextMain").on("click", slideplus);
  //func slideplus
  function slideplus() {
    mainSlideIndex++;
    if (mainSlideIndex > slidepages.length) {
      mainSlideIndex = 1;
    }
    if (mainSlideIndex == 1) {
      slidepages[0].classList.add("block");
      slidepages[1].classList.remove("block");
      slidepages[2].classList.remove("block");
      slidepages[3].classList.remove("block");
      //dots
      dotss[0].classList.add("activeDot");
      dotss[1].classList.remove("activeDot");
      dotss[2].classList.remove("activeDot");
      dotss[3].classList.remove("activeDot");
    } else if (mainSlideIndex == 2) {
      slidepages[1].classList.add("block");
      slidepages[2].classList.remove("block");
      slidepages[0].classList.remove("block");
      slidepages[3].classList.remove("block");
      //dots
      dotss[0].classList.remove("activeDot");
      dotss[1].classList.add("activeDot");
      dotss[2].classList.remove("activeDot");
      dotss[3].classList.remove("activeDot");
    } else if (mainSlideIndex == 3) {
      slidepages[2].classList.add("block");
      slidepages[1].classList.remove("block");
      slidepages[0].classList.remove("block");
      slidepages[3].classList.remove("block");
      //dots
      dotss[0].classList.remove("activeDot");
      dotss[1].classList.remove("activeDot");
      dotss[2].classList.add("activeDot");
      dotss[3].classList.remove("activeDot");
    } else if (mainSlideIndex == 4) {
      slidepages[3].classList.add("block");
      slidepages[1].classList.remove("block");
      slidepages[2].classList.remove("block");
      slidepages[0].classList.remove("block");
      //dots
      dotss[0].classList.remove("activeDot");
      dotss[1].classList.remove("activeDot");
      dotss[2].classList.remove("activeDot");
      dotss[3].classList.add("activeDot");
    }
  }

  //onclick --

  $("#pervMain").on("click", slideminus);
  //func slideminus
  function slideminus() {
    mainSlideIndex--;
    if (mainSlideIndex < 1) {
      mainSlideIndex = slidepages.length;
    }
    if (mainSlideIndex == 1) {
      slidepages[0].classList.add("block");
      slidepages[1].classList.remove("block");
      slidepages[2].classList.remove("block");
      slidepages[3].classList.remove("block");
      //dots
      dotss[0].classList.add("activeDot");
      dotss[1].classList.remove("activeDot");
      dotss[2].classList.remove("activeDot");
      dotss[3].classList.remove("activeDot");
    } else if (mainSlideIndex == 2) {
      slidepages[1].classList.add("block");
      slidepages[2].classList.remove("block");
      slidepages[0].classList.remove("block");
      slidepages[3].classList.remove("block");
      //dots
      dotss[0].classList.remove("activeDot");
      dotss[1].classList.add("activeDot");
      dotss[2].classList.remove("activeDot");
      dotss[3].classList.remove("activeDot");
    } else if (mainSlideIndex == 3) {
      slidepages[2].classList.add("block");
      slidepages[1].classList.remove("block");
      slidepages[0].classList.remove("block");
      slidepages[3].classList.remove("block");
      //dots
      dotss[0].classList.remove("activeDot");
      dotss[1].classList.remove("activeDot");
      dotss[2].classList.add("activeDot");
      dotss[3].classList.remove("activeDot");
    } else if (mainSlideIndex == 4) {
      slidepages[3].classList.add("block");
      slidepages[1].classList.remove("block");
      slidepages[2].classList.remove("block");
      slidepages[0].classList.remove("block");

      //dots
      dotss[0].classList.remove("activeDot");
      dotss[1].classList.remove("activeDot");
      dotss[2].classList.remove("activeDot");
      dotss[3].classList.add("activeDot");
    }
  }
  function addstory() {
    let storyContainer = document.getElementById("storyContainer");
    let xi = Math.floor(Math.random() * 10);
    if (xi < 3) {
      xi = 3;
    }

    var storyIndex = document.querySelectorAll("#storyContainer > .story");
    if (xi == 1) {
      storyIndex[0].classList.add("none");
      storyContainer.innerHTML += `  <!--story item-->
      <div class="story story6">
        <div class="border">
          <img src="./img/story-7.webp" alt="" />
        </div>
        <p>تبلت</p>
      </div>`;
    }
    if (xi == 2) {
      storyIndex[1].classList.add("none");
      storyContainer.innerHTML += `  <!--story item-->
      <div class="story story6">
        <div class="border">
          <img src="./img/story-8.webp" alt="" />
        </div>
        <p>کنسول بازی</p>
      </div>`;
    }
    if (xi == 3) {
      storyIndex[2].classList.add("none");
      storyContainer.innerHTML += `  <!--story item-->
      <div class="story story6">
        <div class="border">
          <img src="./img/story-9.webp" alt="" />
        </div>
        <p>لپتاپ</p>
      </div>`;
    }
  }
  setInterval(addstory(), 100);
  //scroll
  $(document).scroll(function () {
    if ($(document).scrollTop() > 0) {
      $(".category").addClass("margtop").fadeOut(140);
      $(".banner").addClass("hie40");
    } else {
      $(".category").removeClass("margtop").fadeIn(300);
      $(".banner").removeClass("hie40");
    }
  });
});
// Set the date we're counting down to
var countDownDate = new Date("Jan 5, 2024 15:37:10").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  var timeDone = [days + "d", hours + "h ", minutes + "m", seconds + "s"];
  document.getElementById("timeInnner").innerHTML = `
    ${days + "d"}
    ${hours + "h "}
    ${minutes + "m"}
    ${seconds + "s"} `;

  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
//slider two
$(document).ready(function () {
  let slideItem = document.getElementsByClassName("itemSlide");
  let slideCounter = 1;
  //next btn
  $("#nextSlide").on("click", function () {
    slideCounter++;
    if (slideCounter >= 6) {
      $(this).addClass("disableBtn");
      slideCounter = 6;
    } else {
      $(this).removeClass("disableBtn");
    }
    if (slideCounter < 1) {
      slideCounter = 1;
      $("#pervSlide").addClass("disableBtn");
    } else {
      $("#pervSlide").removeClass("disableBtn");
    }

    //active another function
    trueSlide();
  });
  //perv btn
  $("#pervSlide").on("click", function () {
    slideCounter--;
    if (slideCounter <= 1) {
      $("#pervSlide").addClass("disableBtn");
      slideCounter = 1;
    } else {
      $("#pervSlide").removeClass("disableBtn");
    }
    if (slideCounter >= 6) {
      $("#nextSlide").addClass("disableBtn");
      slideCounter = 6;
    } else {
      $("#nextSlide").removeClass("disableBtn");
    }
    //active another function
    trueSlide();
  });
  //make true slide
  function trueSlide() {
    if (slideCounter == 1) {
      $(".item1").addClass("block1");
      $(".item2").addClass("block1");
      $(".item3").addClass("block1");
      $(".item4").addClass("block1");
      $(".item5").removeClass("block1");
    } else if (slideCounter == 2) {
      $(".item1").removeClass("block1");
      $(".item2").addClass("block1");
      $(".item3").addClass("block1");
      $(".item4").addClass("block1");
      $(".item5").addClass("block1");
      $(".item6").removeClass("block1");
    } else if (slideCounter == 3) {
      $(".item2").removeClass("block1");
      $(".item3").addClass("block1");
      $(".item4").addClass("block1");
      $(".item5").addClass("block1");
      $(".item6").addClass("block1");
      $(".item7").removeClass("block1");
    } else if (slideCounter == 4) {
      $(".item3").removeClass("block1");
      $(".item4").addClass("block1");
      $(".item5").addClass("block1");
      $(".item6").addClass("block1");
      $(".item7").addClass("block1");
      $(".item8").removeClass("block1");
    } else if (slideCounter == 5) {
      $(".item4").removeClass("block1");
      $(".item5").addClass("block1");
      $(".item6").addClass("block1");
      $(".item7").addClass("block1");
      $(".item8").addClass("block1");
      $(".item9").removeClass("block1");
    } else if (slideCounter == 6) {
      $(".item5").removeClass("block1");
      $(".item6").addClass("block1");
      $(".item7").addClass("block1");
      $(".item8").addClass("block1");
      $(".item9").addClass("block1");
    }
  }
  trueSlide();
});
//count down of slider
// Set the date we're counting down to
var countDownDate1 = new Date("dec 20, 2023 1:36:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate1 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("slideTime").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  document.getElementById("slideTime8").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("SlideTime").innerHTML = "EXPIRED";
    document.getElementById("slideTime8").innerHTML = "EXPIRED";
  }
}, 1000);
//timer 2
var countDownDate2 = new Date("jan 29, 2024 4:36:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate2 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("slideTime2").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  document.getElementById("slideTime6").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  document.getElementById("slideTimex").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("SlideTime2").innerHTML = "EXPIRED";
    document.getElementById("SlideTime6").innerHTML = "EXPIRED";
    document.getElementById("SlideTimex").innerHTML = "EXPIRED";
  }
}, 1000);
//timer 3
var countDownDate3 = new Date("mar 30, 2024 20:1:5").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate3 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("slideTime3").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  document.getElementById("slideTime5").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  document.getElementById("slideTimexi").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("SlideTime3").innerHTML = "EXPIRED";
    document.getElementById("SlideTime5").innerHTML = "EXPIRED";
    document.getElementById("SlideTimexi").innerHTML = "EXPIRED";
  }
}, 1000);
//timer 4
var countDownDate4 = new Date("feb 30, 2024 20:1:5").getTime();

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate4 - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Output the result in an element with id="demo"
  document.getElementById("slideTime7").innerHTML =
    days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  // If the count down is over, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("SlideTime7").innerHTML = "EXPIRED";
  }
}, 1000);
let ham = document.getElementById("hammenu");
let cat2 = document.getElementById("cat2");
ham.addEventListener("click", function () {
  let countx = 0;
  if (countx == 0) {
    countx = 1;
    cat2.classList.toggle("flex");
  } else if (countx == 1) {
    cat2.classList.toggle("flex");
    countx = 0;
  }
});
//slider three
$(document).ready(function () {
  let slideCounter = 1;
  //next btn
  $("#nextSlidess").on("click", function () {
    slideCounter++;
    if (slideCounter >= 2) {
      $(this).addClass("disableBtn");
      slideCounter = 2;
    } else {
      $(this).removeClass("disableBtn");
    }
    if (slideCounter < 1) {
      slideCounter = 1;
      $("#pervSlidess").addClass("disableBtn");
    } else {
      $("#pervSlidess").removeClass("disableBtn");
    }

    //active another function
    trueSlidess();
  });
  //perv btn
  $("#pervSlidess").on("click", function () {
    slideCounter--;
    if (slideCounter <= 1) {
      $("#pervSlidess").addClass("disableBtn");
      slideCounter = 1;
    } else {
      $("#pervSlidess").removeClass("disableBtn");
    }
    if (slideCounter >= 6) {
      $("#nextSlidess").addClass("disableBtn");
      slideCounter = 6;
    } else {
      $("#nextSlidess").removeClass("disableBtn");
    }
    //active another function
    trueSlidess();
  });
  //make true slide
  function trueSlidess() {
    if (slideCounter == 1) {
      $(".item1ss").addClass("block1");
      $(".item2ss").addClass("block1");
      $(".item3ss").addClass("block1");
      $(".item4ss").addClass("block1");
      $(".item5ss").removeClass("block1");
    } else if (slideCounter == 2) {
      $(".item1ss").removeClass("block1");
      $(".item2ss").addClass("block1");
      $(".item3ss").addClass("block1");
      $(".item4ss").addClass("block1");
      $(".item5ss").addClass("block1");
    }
  }
  trueSlidess();
});

//slider three
$(document).ready(function () {
  let slideCounter = 1;
  //next btn
  $("#nextSlidesss").on("click", function () {
    slideCounter++;
    if (slideCounter >= 4) {
      $(this).addClass("disableBtn");
      slideCounter = 4;
    } else {
      $(this).removeClass("disableBtn");
    }
    if (slideCounter < 1) {
      slideCounter = 1;
      $("#pervSlidesss").addClass("disableBtn");
    } else {
      $("#pervSlidesss").removeClass("disableBtn");
    }

    //active another function
    trueSlidesss();
  });
  //perv btn
  $("#pervSlidesss").on("click", function () {
    slideCounter--;
    if (slideCounter <= 1) {
      $("#pervSlidesss").addClass("disableBtn");
      slideCounter = 1;
    } else {
      $("#pervSlidesss").removeClass("disableBtn");
    }
    if (slideCounter >= 4) {
      $("#nextSlidesss").addClass("disableBtn");
      slideCounter = 4;
    } else {
      $("#nextSlidesss").removeClass("disableBtn");
    }
    //active another function
    trueSlidesss();
  });
  //make true slide
  function trueSlidesss() {
    if (slideCounter == 1) {
      $(".item1sss").addClass("block1");
      $(".item2sss").addClass("block1");
      $(".item3sss").addClass("block1");
      $(".item4sss").addClass("block1");
      $(".item5sss").removeClass("block1");
    } else if (slideCounter == 2) {
      $(".item1sss").removeClass("block1");
      $(".item2sss").addClass("block1");
      $(".item3sss").addClass("block1");
      $(".item4sss").addClass("block1");
      $(".item5sss").addClass("block1");
    } else if (slideCounter == 3) {
      $(".item2sss").removeClass("block1");
      $(".item3sss").addClass("block1");
      $(".item4sss").addClass("block1");
      $(".item5sss").addClass("block1");
      $(".item6sss").addClass("block1");
    } else if (slideCounter == 4) {
      $(".item3sss").removeClass("block1");
      $(".item4sss").addClass("block1");
      $(".item5sss").addClass("block1");
      $(".item6sss").addClass("block1");
      $(".item7sss").addClass("block1");
    }
  }
  trueSlidesss();
});
//slider four
$(document).ready(function () {
  let slideCounter = 1;
  //next btn
  $("#nextSlidessss").on("click", function () {
    slideCounter++;
    if (slideCounter >= 4) {
      $(this).addClass("disableBtn");
      slideCounter = 4;
    } else {
      $(this).removeClass("disableBtn");
    }
    if (slideCounter < 1) {
      slideCounter = 1;
      $("#pervSlidessss").addClass("disableBtn");
    } else {
      $("#pervSlidessss").removeClass("disableBtn");
    }

    //active another function
    trueSlidesss();
  });
  //perv btn
  $("#pervSlidessss").on("click", function () {
    slideCounter--;
    if (slideCounter <= 1) {
      $("#pervSlidessss").addClass("disableBtn");
      slideCounter = 1;
    } else {
      $("#pervSlidessss").removeClass("disableBtn");
    }
    if (slideCounter >= 4) {
      $("#nextSlidessss").addClass("disableBtn");
      slideCounter = 4;
    } else {
      $("#nextSlidessss").removeClass("disableBtn");
    }
    //active another function
    trueSlidesss();
  });
  //make true slide
  function trueSlidesss() {
    if (slideCounter == 1) {
      $(".item1ssss").addClass("block1");
      $(".item2ssss").addClass("block1");
      $(".item3ssss").addClass("block1");
      $(".item4ssss").addClass("block1");
      $(".item5ssss").removeClass("block1");
    } else if (slideCounter == 2) {
      $(".item1ssss").removeClass("block1");
      $(".item2ssss").addClass("block1");
      $(".item3ssss").addClass("block1");
      $(".item4ssss").addClass("block1");
      $(".item5ssss").addClass("block1");
    } else if (slideCounter == 3) {
      $(".item2ssss").removeClass("block1");
      $(".item3ssss").addClass("block1");
      $(".item4ssss").addClass("block1");
      $(".item5ssss").addClass("block1");
      $(".item6ssss").addClass("block1");
    } else if (slideCounter == 4) {
      $(".item3ssss").removeClass("block1");
      $(".item4ssss").addClass("block1");
      $(".item5ssss").addClass("block1");
      $(".item6ssss").addClass("block1");
      $(".item7ssss").addClass("block1");
    }
  }
  trueSlidesss();
});
$(document).ready(function () {
  let licenceShow = document.getElementById("licenceShow");
  let showTheDetail = document.getElementById("showTheDetail");
  let licenceShowClose = document.getElementById("licenceShowClose");
  $("p.opacity");
  licenceShow.addEventListener("click", function () {
    showTheDetail.classList.add("flex");
    licenceShowClose.classList.remove("none");
    licenceShow.classList.add("none");
    $("p.opacity").addClass("op1");
  });
  licenceShowClose.addEventListener("click", function () {
    showTheDetail.classList.remove("flex");
    licenceShowClose.classList.add("none");
    licenceShow.classList.remove("none");
    $("p.opacity").removeClass("op1");
  });
});
