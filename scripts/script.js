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


// Get all icons with the class "icon"
const icons = document.querySelectorAll(".window_icon");

// Loop through each icon
icons.forEach(icon => {

    icon.addEventListener("click", (e) => {

        // Get the window ID from the data-window attribute
        const windowId = icon.getAttribute("window_id");
        const window = document.getElementById(windowId);
        const header = window.querySelector(".window-header");
        const x_button = header.querySelector(".x_button");
        
        // Toggle the window's visibility
        if (window.style.display === "none" || window.style.display === "") {
            window.style.display = "flex";
        } else {
            window.style.display = "none";
        }


        //close window
        x_button.addEventListener("click", (e) => {
        window.style.display = "none";
        });


        //dragging
        let isDragging = false;
        let offsetX, offsetY;
        
        header.addEventListener("mousedown", (e) => {
            isDragging = true;
            offsetX = e.clientX - window.getBoundingClientRect().left;
            offsetY = e.clientY - window.getBoundingClientRect().top;
        });
        
        document.addEventListener("mousemove", (e) => {
            if (isDragging) {
                window.style.left = `${e.clientX - offsetX}px`;
                window.style.top = `${e.clientY - offsetY}px`;
            }
        });
        
        document.addEventListener("mouseup", () => {
            isDragging = false;
        });



    });
});