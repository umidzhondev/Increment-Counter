const texts = document.querySelectorAll(".box__title");
let speed = 15
this.addEventListener("load",()=>{
    texts.forEach(text => {
        text.textContent = "0"
        let target = +text.getAttribute("data-target");
        let increment = () => {
            let inc = Math.ceil(target / 100);
            if (text.textContent < target) {
                text.textContent = +text.textContent + inc;
                setTimeout(increment, speed)
            } else {
                text.textContent = target;
            }
        }
        increment()
    });
})