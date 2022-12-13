closeButtons = document.querySelectorAll(".close-painting")
// waiting time for the permissions (in ms)
const waitingTime = 100

// allows the page to start moving again and make the tiles clickable again
function waitingPermission() {
    paintingShowing = false
}

// remove the classes of the tile content, image and the selected tile
function removingClasses(content, selected, image) {
    content.classList.remove("tile-content-selected")
    selected.classList.remove("selected-tile")
    image.classList.remove("tile-image-selected")
    // the permissions should be given after the classes are removed
    setTimeout(waitingPermission, waitingTime)
}

closeButtons.forEach( closeButton => {
    // adding the event for the "x" to close the tile
    closeButton.addEventListener( "click", e => {

        // all the paintings should get back the effect of hover
        paintings.forEach( painting => {
            painting.classList.add("tile-hover")
        })

        // getting the tile content, the hole tile and the image
        let tileContent = closeButton.parentNode
        let tileSelected = closeButton.parentNode.parentNode
        let imageSelected = tileSelected.querySelector(".tile-image-selected")

        // makes the tile content to fade out while it's closing
        tileContent.animate({
            opacity: 0,
        }, {
            duration: openingClosingTime/2,
            fill: "forwards",
            easing: "ease",
        })

        // waits the time of fading out to remove the classes of the objects
        setTimeout(removingClasses, openingClosingTime/2, tileContent, tileSelected, imageSelected)

        // makes the tile to go back to it's original place 
        tileSelected.animate({
            top: `${tileSelected.dataset["top"]}px`,
            left: `${tileSelected.dataset["left"]}px`,
            width: `${tileSelected.dataset["width"]}px`,
            height: `${tileSelected.dataset["height"]}px`,
            margin: 0,
        }, {
            duration: openingClosingTime,
            fill: "forwards",
            easing: "ease",
        })
    })
});
