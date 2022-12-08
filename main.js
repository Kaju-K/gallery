const container = document.querySelector(".container")
const pageTitle = document.querySelector(".page-title")

window.addEventListener("mousemove", e => {
    const mouseX = e.clientX
    const mouseY = e.clientY

    const percentageX = mouseX / window.innerWidth
    const percentageY = mouseY / window.innerHeight

    const maxXContainer = container.offsetWidth - window.innerWidth
    const maxYContainer = container.offsetHeight - window.innerHeight

    const posXContainer = maxXContainer*percentageX * (-1)
    const posYContainer = maxYContainer*percentageY * (-1)

    container.animate({
        transform: `translate(${posXContainer}px, ${posYContainer}px)`
    }, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
    })

    const maxXText = window.innerWidth*0.05
    const maxYText = window.innerHeight*0.05

    const posXText = maxXText*((percentageX/0.5) - 1)
    const posYText = maxYText*((percentageY/0.5) - 1)

    pageTitle.animate({
        transform: `translate(${posXText}px, ${posYText}px)`
    }, {
        duration: 4000,
        fill: "forwards",
        easing: "ease"
    })
})