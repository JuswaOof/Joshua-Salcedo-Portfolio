function createStar(){
    const outerWrapper = document.getElementById('outerWrapper');
    const createElement = document.createElement('span');
    var size = Math.random() * 3;

    createElement.style.width = size + 'px';
    createElement.style.height = size + 'px';
    createElement.style.bottom = Math.random() * (innerWidth) + "px";
    createElement.style.right = Math.random() * 500 + "px";
    createElement.dataset.speed = .3 * size;
    createElement.className = "layer";


    outerWrapper.appendChild(createElement);

    setTimeout(() =>{
        createElement.remove()
    },40000)
}

setInterval(createStar, 50)


// mouse parallax
document.addEventListener("mousemove", parallax);
function parallax(e){
    this.querySelectorAll('.layer').forEach(layer =>{
        const speed = layer.getAttribute('data-speed')

        const x = (window.innerWidth - e.pageX * speed )/10
        const y = (window.innerWidth - e.pageY * speed )/10

        layer.style.transform = `translateX(${y}px) translateY(${-x}px)` 
    })
}

parallax();

// mouse cursor
var cursor = document.getElementById('cursor');
document.addEventListener("mousemove", function(e){
    var x = e.clientX;
    var y = e.clientY;
})