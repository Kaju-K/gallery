const container = document.querySelector(".container")
const pageTitle = document.querySelector(".page-title")
// paintingShowing = false => means that there is no tile selected 
// paintingShowing = true => means that there is a tile selected
let paintingShowing = false
// these variables are created to make the page move and also to know where to position the tiles when they are clicked
let posXContainer, posYContainer
// this defines how fast the page moves following the mouse
const movingDuration = 4000

window.addEventListener("mousemove", e => {
    // if paintingShowing is true, it means that the page should be static
    if (paintingShowing) {
        return
    } else {
        // to make the page move with the mouse we should grab the position of the mouse on the screen
        const mouseX = e.clientX
        const mouseY = e.clientY

        // and calculate the percentage of how much the mouse moved to know how much the page should
        // if the mouse is in (0,0) it means that it walked 0% in both directions so the page shouldn't move
        // if the mouse moved to the edges of the screen, it means that it walked 100% in both directions so the page also should move 100%
        const percentageX = mouseX / window.innerWidth
        const percentageY = mouseY / window.innerHeight

        // this is how much the container can move: (his total size) - (the size of the screen)
        // otherwise it would walk to much to one direction and the container would go out of the screen
        const maxXContainer = container.offsetWidth - window.innerWidth
        const maxYContainer = container.offsetHeight - window.innerHeight

        // and here it's actually calculated how much it should walk on the opposite direction of the mouse
        // if you are going to the right with the mouse, the container should be going to the left to show what's on the right
        posXContainer = maxXContainer*percentageX * (-1)
        posYContainer = maxYContainer*percentageY * (-1)

        // here the animation of the page is added
        container.animate({
            transform: `translate(${posXContainer}px, ${posYContainer}px)`
        }, {
            duration: movingDuration,
            fill: "forwards",
            easing: "ease"
        })

        // and here we do the same things for the title of the page, but defining how much we actually want the title to move
        const maxXText = window.innerWidth*0.05
        const maxYText = window.innerHeight*0.05

        // since the title it's positioned in the cented of the container, when the mouse it's on (50%,50%), it means that it should remain on the center, so a little calculation is made for that to be correct
        const posXText = maxXText*((percentageX/0.5) - 1)
        const posYText = maxYText*((percentageY/0.5) - 1)

        // and then the text is animated
        pageTitle.animate({
            transform: `translate(${posXText}px, ${posYText}px)`
        }, {
            duration: movingDuration,
            fill: "forwards",
            easing: "ease"
        })
    }
})
