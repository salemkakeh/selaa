
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





