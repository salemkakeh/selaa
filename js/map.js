
document.addEventListener('DOMContentLoaded', () => {
  const tooltip = document.getElementById('custom-tooltip');
  const hotspots = document.querySelectorAll('.hotspot');

  hotspots.forEach(hotspot => {
    const showTooltip = (e) => {
      const title = hotspot.dataset.title || hotspot.getAttribute('title');
      tooltip.textContent = title;
      tooltip.style.opacity = '1';
      tooltip.style.left = `${e.pageX + 15}px`;
      tooltip.style.top = `${e.pageY - 30}px`;
    };

    hotspot.addEventListener('mouseenter', showTooltip);
    hotspot.addEventListener('mousemove', showTooltip);
    hotspot.addEventListener('mouseleave', () => {
      tooltip.style.opacity = '0';
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

  ScrollReveal().reveal("#heading-text", {
    ...scrollRevealOption
  });

  ScrollReveal().reveal("#pargraph-text", {
    ...scrollRevealOption,
    delay: 300,
  });

  ScrollReveal().reveal("#buttons-id", {
    ...scrollRevealOption,
    delay: 600,
    origin: "right",
  });






  // start aside for mobile


  let menu_button = document.getElementById("menu-button");

  menu_button.onclick = function () {
    let aside = document.getElementById("aside-menu-button");
    aside.classList.toggle("active");
    menu_button.classList.toggle("active");

  }



  const heading_mob = document.querySelectorAll(".heading-mob");

  function change_status () {
    const nav = document.querySelector(".nav");
    nav.classList.toggle("active");
  }



  heading_mob.forEach(element => {
    element.addEventListener("click" , change_status);
  });
