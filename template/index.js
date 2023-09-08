// joystick scr gpt
const stick = document.querySelector(".stick");
let isMoving = false;

stick.addEventListener("mousedown", function() {
    isMoving = true;
});

document.addEventListener("mouseup", function() {
    isMoving = false;
});

document.addEventListener("mousemove", function(event) {
    if (isMoving) {
        let parentBounds = stick.parentElement.getBoundingClientRect();
        let x = event.clientX - parentBounds.left;
        let y = event.clientY - parentBounds.top;

        // Batasi gerakan stick ke dalam lingkaran joystick
        let distance = Math.sqrt((x - parentBounds.width/2)**2 + (y - parentBounds.height/2)**2);
        if (distance > (parentBounds.width / 2)) {
            let angle = Math.atan2(y - parentBounds.height / 2, x - parentBounds.width / 2);
            x = (parentBounds.width / 2) + (parentBounds.width / 2 - 25) * Math.cos(angle);
            y = (parentBounds.height / 2) + (parentBounds.height / 2 - 25) * Math.sin(angle);
        }

        stick.style.left = x + "px";
        stick.style.top = y + "px";
    }
});
