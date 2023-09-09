// joystick scr gpt
const stick = document.querySelector(".stick");
let isMoving = false;

function startMove() {
    isMoving = true;
}

function stopMove() {
    isMoving = false;
    // Anda bisa menambahkan logika untuk mengembalikan stick ke posisi awal jika diinginkan
}

function performMove(event) {
    if (isMoving) {
        let clientX = event.clientX || event.touches[0].clientX;
        let clientY = event.clientY || event.touches[0].clientY;

        let parentBounds = stick.parentElement.getBoundingClientRect();
        let x = clientX - parentBounds.left;
        let y = clientY - parentBounds.top;

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
}

// Untuk mouse
stick.addEventListener("mousedown", startMove);
document.addEventListener("mouseup", stopMove);
document.addEventListener("mousemove", performMove);

// Untuk sentuhan di perangkat seluler
stick.addEventListener("touchstart", startMove);
document.addEventListener("touchend", stopMove);
document.addEventListener("touchmove", performMove);
