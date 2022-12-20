const paintings = document.querySelectorAll(".tile")
// time for the tile to open and close
const openingClosingTime = 1000

// makes the content of the tile to fade in
function fadingInContent(content) {
    content.animate({
        opacity: 1,
    }, {
        duration: 1000,
        fill: "forwards",
        easing: "ease",
    })
}

paintings.forEach( painting => {
    // adding the event for every painting to be clickable and expand
    painting.addEventListener("click", e => {
        // if there is already one painting expanded than this should do nothing
        if (paintingShowing) {
            return
        } else {
            // if one painting is selected, the page should know that there is already one painting expanded
            paintingShowing = true

            // grab all the datasets of the painting in the form of a dictionary:
            // {"height": , "width": , "top": , "left"}
            let paintingInformations = painting.dataset

            // goes through all of the keys and values of the dataset dictionary
            for (const [key, value] of Object.entries(paintingInformations)) {
                // if there is already one value given for the dataset, nothing should be done
                if (value) {
                    continue
                }
                // if there is not, the information of it's position and proportions will be stored 
                // so when the painting is closed, it goes back to it's original position and size 
                if (key == "height") {
                    paintingInformations[key] = painting.offsetHeight
                } else if (key == "width") {
                    paintingInformations[key] = painting.offsetWidth
                } else if (key == "top") {
                    paintingInformations[key] = painting.offsetTop
                } else if (key == "left") {
                    paintingInformations[key] = painting.offsetLeft
                }
            }

            // add the class of "selected-tile" to the tile selected 
            painting.classList.add("selected-tile")

            // all the paintings should stop having the effect of hover, so here it's removed
            paintings.forEach( paint => {
                paint.classList.remove("tile-hover")
            })

            // select the painting content
            let paintingContent = painting.querySelector(".tile-content")
            // so the class "tile-content-selected" can be added
            paintingContent.classList.add("tile-content-selected")
            // add the "tile-image-selected" to the tile image
            painting.querySelector(".tile-image").classList.add("tile-image-selected")

            // and make the painting expand on the screen
            painting.animate({
                top: `${posYContainer*(-1)}px`,
                left: `${posXContainer*(-1)}px`,
                width: `90vw`,
                height: `90vh`,
                margin: `5vh 5vw`,
            }, {
                duration: openingClosingTime,
                fill: "forwards",
                easing: "ease",
            })
            // and give some time for the text to fade in
            setTimeout(fadingInContent, 1000, paintingContent)
        }
    })
})
