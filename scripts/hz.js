var myViewport = document.querySelector("meta[name=viewport]");

    if ($(window).width() < 800) {
        myViewport.setAttribute("content", "width=800; user-scalable = yes");
    } else {
        myViewport.setAttribute("content", "width=device-width; initial-scale = 1.0");
    }
