// Mouse Movement Effect
document.addEventListener("mousemove", (event) => {
    const image = document.querySelector(".floating");
    let x = (window.innerWidth / 2 - event.pageX) / 30;
    let y = (window.innerHeight / 2 - event.pageY) / 30;
    image.style.transform = `translate(${x}px, ${y}px)`;

});

// GSAP Animation
gsap.from(".hero-content h1", { opacity: 0, y: -50, duration: 1, delay: 0.5 });
gsap.from(".hero-content p", { opacity: 0, y: 30, duration: 1, delay: 1 });
gsap.from(".btn", { opacity: 0, scale: 0.5, duration: 1,delay:1.5});