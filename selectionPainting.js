const paintings = document.querySelectorAll(".tile")
paintingShowing = false

paintings.forEach( painting => {
    painting.addEventListener("click", e => {
        if (paintingShowing) {
            return
        } else {
            cancelMoving = true
            paintingShowing = true
            console.log(e)
            console.log(painting)
            
            painting.dataset["width"] = painting.offsetWidth
            painting.dataset["height"] = painting.offsetHeight
            painting.dataset["top"] = painting.offsetTop
            painting.dataset["left"] = painting.offsetLeft
                        
            painting.classList.add("selected-tile")
            painting.classList.remove("tile-hover")
            
            console.log(painting.querySelector(".tile-image"))

            // e.target.children[1].classList.add("tile-content-selected")
            
            painting.querySelector(".tile-content").classList.add("tile-content-selected")
            painting.querySelector(".tile-image").classList.add("tile-image-selected")

            painting.animate({
                top: `${posYContainer*(-1)}px`,
                left: `${posXContainer*(-1)}px`,
                width: `90vw`,
                height: `90vh`,
            }, {
                duration: 1000,
                fill: "forwards",
                easing: "ease",
            })
        }
    })
})