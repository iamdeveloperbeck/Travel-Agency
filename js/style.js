let navMenu = document.querySelector(".navbar");

document.querySelector("#menu-btn").onclick = () => {
    navMenu.classList.toggle("active");
};

document.querySelectorAll(".about .video-content .contorls .control-btn").forEach(btn => {
    btn.onclick = () => {
        let src = btn.getAttribute("data-src");
        document.querySelector(".about .video-content .video").src = src;
    };
});