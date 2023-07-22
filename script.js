
const body = document.getElementById("body");
const toggle = document.getElementById("toggle-btn");
const navbar = document.getElementById("nav-bar")
toggle.addEventListener("click", ()=>{
    navbar.classList.toggle("active");
})

// counter

window.addEventListener("scroll", () => {
  const header = document.querySelector("#header");
   
});



  window.addEventListener("scroll", () => {
    const innerH = scrollY;
    console.log(innerH);
    if (innerH >= 1600) {
      const counters = document.querySelectorAll(".counter");
      const speed = 1000;
      counters.forEach((counter) => {
        const updateCounter = () => {
          const target = parseInt(counter.getAttribute("data-target"));
          const count = parseInt(counter.innerText);
          const inc = Math.floor(target / speed);
          if (count < target) {
            counter.innerText = count + inc;
            setTimeout(updateCounter, 1000);
          } else {
            count.innerText = target;
          }
        };
        updateCounter();
      });
    }
  
  });
