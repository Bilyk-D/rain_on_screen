"use strict";
function rain() {
  const rainContainer = document.querySelector(".rain");
  let drops = "";
  for (let c = 0; c < 100; c++) {
    const randomAnimate = Math.floor(Math.random() * 98 + 2);
    const randomBottom = Math.floor(Math.random() * 4 + 2);
    drops += `
    <div class="drop" style=" left:${c}%;
    bottom:${randomBottom + 100}%;
    animation-delay:0.${randomAnimate}s;
    animation-duration:0.5${randomAnimate}s;">

        <div class="steam" style="

    animation-delay:0.${randomAnimate}s;
    animation-duration:0.5${randomAnimate}s;">

        </div>


        <div class="splat" style="

    animation-delay:0.${randomAnimate}s;
    animation-duration:0.5${randomAnimate}s;">

        </div>


    </div>
    `;
  }
  rainContainer.innerHTML = drops;
}
window.addEventListener("load", windowLoad);
function windowLoad() {
  rain();
}
