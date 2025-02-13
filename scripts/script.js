// console.log("Script loaded!");
// let prevScrollPos = window.scrollY; // Use scrollY
// const navbar = document.querySelector(".folders-container");

// window.addEventListener("scroll", () => {
//   const currentScrollPos = window.scrollY; // Use scrollY

//   if (currentScrollPos > prevScrollPos) {
//     // Scrolling down
//     navbar.classList.add("hidden");
//   } else {
//     // Scrolling up
//     navbar.classList.remove("hidden");
//   }

  

//   prevScrollPos = currentScrollPos;
// });




//window

function toggleWindow() {
  const window = document.getElementById("uvm_window");
  if (window.style.display === "none" || window.style.display === "") {
      window.style.display = "block";
  } else {
      window.style.display = "none";
  }
}

// Make the window draggable
const windowElement = document.getElementById("uvm_window");
const header = windowElement.querySelector(".window-header");

let isDragging = false;
let offsetX, offsetY;

header.addEventListener("mousedown", (e) => {
  isDragging = true;
  offsetX = e.clientX - windowElement.getBoundingClientRect().left;
  offsetY = e.clientY - windowElement.getBoundingClientRect().top;
});

document.addEventListener("mousemove", (e) => {
  if (isDragging) {
      windowElement.style.left = `${e.clientX - offsetX}px`;
      windowElement.style.top = `${e.clientY - offsetY}px`;
  }
});

document.addEventListener("mouseup", () => {
  isDragging = false;
});