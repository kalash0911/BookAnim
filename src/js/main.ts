document.addEventListener("DOMContentLoaded", function() {
    const book = document.querySelector(".book");
    let startY = 0;

    window.addEventListener("wheel", function(event) {
        if (event.deltaY > 0) {
            // @ts-ignore
            book.classList.add("open");
            // @ts-ignore
            book.classList.remove("close");
        } else {
            // @ts-ignore
            book.classList.remove("open");
            // @ts-ignore
            book.classList.add("close");
        }
    });

    window.addEventListener("touchstart", function(event) {
        startY = event.touches[0].clientY;
    });

    window.addEventListener("touchmove", function(event) {
        const currentY = event.touches[0].clientY;
        if (currentY > startY + 20) {
            // @ts-ignore
            book.classList.add("open");
            // @ts-ignore
            book.classList.remove("close");
        } else if (currentY < startY - 20) {
            // @ts-ignore
            book.classList.remove("open");
            // @ts-ignore
            book.classList.add("close");
        }
    });

    window.addEventListener("touchend", function() {
        startY = 0;
    });
});
