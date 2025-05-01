document.addEventListener("DOMContentLoaded", () => {
  const tooltip = document.getElementById("custom-tooltip");
  const hotspots = document.querySelectorAll(".hotspot");

  hotspots.forEach((hotspot) => {
    const showTooltip = (e) => {
      const title = hotspot.dataset.title || hotspot.getAttribute("title");
      tooltip.textContent = title;
      tooltip.style.opacity = "1";
      tooltip.style.left = `${e.pageX + 15}px`;
      tooltip.style.top = `${e.pageY - 30}px`;
    };

    hotspot.addEventListener("mouseenter", showTooltip);
    hotspot.addEventListener("mousemove", showTooltip);
    hotspot.addEventListener("mouseleave", () => {
      tooltip.style.opacity = "0";
    });
  });
});

// main animation
const scrollRevealOption = {
  distance: "50px",
  origin: "right",
  duration: 1000,
  easing: "ease-in-out",
};

ScrollReveal().reveal(".heading-text", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".pargraph-text", {
  ...scrollRevealOption,
  delay: 300,
});

ScrollReveal().reveal(".buttons-id", {
  ...scrollRevealOption,
  delay: 600,
  origin: "right",
});

ScrollReveal().reveal(".svg-img", {
  ...scrollRevealOption,
  origin: "left",
});

let pargraph_what = document.querySelectorAll(".pargraph-what");
for (let i = 0; i < pargraph_what.length; i++) {
  const p = pargraph_what[i];
  ScrollReveal().reveal(p, {
    ...scrollRevealOption,
    delay: 300 * (i + 1),
  });
}

let content = document.querySelector(".content");

ScrollReveal().reveal(content, {
  ...scrollRevealOption,
  distance: 0,
  scale: 0.9,
});

let child_content = document.querySelectorAll(".content .child");
for (let i = 0; i < child_content.length; i++) {
  const child = child_content[i];

  if (i == 2) {
    ScrollReveal().reveal(child, {
      ...scrollRevealOption,
      delay: 600,
      distance: "50px",
      origin: "top",
    });
  } else if(i == 3) {
    ScrollReveal().reveal(child, {
      ...scrollRevealOption,
      delay: 600,
      distance: "50px",
      origin: "bottom",
    });
  } else if(i == 1) {
    ScrollReveal().reveal(child, {
      ...scrollRevealOption,
      delay: 600,
      distance: "50px",
      origin: "right",
    });
  } else {
    ScrollReveal().reveal(child, {
      ...scrollRevealOption,
      delay: 600,
      distance: "50px",
      origin: "left",
    });
  }
}

ScrollReveal().reveal(".col-text", {
  ...scrollRevealOption,
  distance: 0,
  scale: 0.9,
});

ScrollReveal().reveal(".child-text", {
  ...scrollRevealOption,
  delay: 600,
  distance: "50px",
  origin: "left",
});

// start aside for mobile

let menu_button = document.getElementById("menu-button");

menu_button.onclick = function () {
  console.log("salem");
  let aside = document.getElementById("aside-menu-button");
  aside.classList.toggle("active");
  menu_button.classList.toggle("active");
};

const heading_mob = document.querySelectorAll(".heading-mob");

function change_status() {
  const nav = document.querySelector(".nav");
  nav.classList.toggle("active");
}

heading_mob.forEach((element) => {
  element.addEventListener("click", change_status);
});








// start move buttons

let next  = document.getElementById("next");
let preve = document.getElementById("preve");
let cards = document.getElementById("cards");

let maxwidth = cards.scrollWidth - cards.clientWidth;


next.onclick = function () {
  preve.removeAttribute("disabled");


  const scrollAmount = (320) * -1;
  cards.scrollBy({left: scrollAmount , behavior: "smooth"});
  if (cards.scrollLeft * -1 >= maxwidth - 340) {
    next.disabled = true;
  }
}

preve.onclick = function () {
  let cards = document.getElementById("cards");
  cards.scrollBy({left: 320 , behavior: "smooth"});

  next.removeAttribute("disabled");

  if(Math.trunc(cards.scrollLeft) > -340) {
    preve.disabled = true;
  } else {
    preve.removeAttribute("disabled");
  }
}


// cards.addEventListener("scroll" , function () {
//   if(cards.scrollLeft == 0)
//     preve.disabled = true;
//   else if(cards.scrollLeft < -50)
//     preve.removeAttribute("disabled");
//   if(cards.scrollLeft + cards.clientWidth * -1 <= cards.scrollWidth )  {
//     next.disabled = true;

//   }
//   console.log((cards.scrollLeft + cards.scrollWidth) * -1);
//   console.log(cards.scrollWidth);


// });


// start muose move on section three
const customCursor = document.getElementById("svg");
const svgp = document.getElementById("svgp");

// إعدادات الأداء
let lastX = 0, lastY = 0;
let animationFrame;

// دالة التحديث الأمثل
const updateCursor = (e) => {
  const rect = svgp.getBoundingClientRect();
  const x = e.clientX - rect.left - 40;
  const y = e.clientY - rect.top - 40;
  
  // تحديث مباشر بدون requestAnimationFrame
  customCursor.setAttribute('transform', `translate(${x},${y}) scale(0.2)`);
};

// معالجة الحركة بأعلى أداء
svgp.addEventListener('mousemove', (e) => {
  // إلغاء أي إطارات سابقة
  if(animationFrame) cancelAnimationFrame(animationFrame);
  
  // التحديث المباشر
  updateCursor(e);
  
  // تحديث إضافي لضمان السلاسة
  animationFrame = requestAnimationFrame(() => updateCursor(e));
});

// إعادة التعيين عند المغادرة
svgp.addEventListener('mouseleave', () => {
  customCursor.removeAttribute('transform');
});




let html = document.getElementById("html");

document.addEventListener("scroll" , () => {
  let header = document.getElementById("header");
  console.log(header.scrollLeft);

});