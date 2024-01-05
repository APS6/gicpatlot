import { gsap } from "gsap"
const initial = gsap.timeline()
initial.from("h1", {
    y: "40px",
    opacity: 0,
    scale: .95,
    duration: .5
})
initial.from("header > p", {
    y: "40px",
    opacity: 0,
    scale: .95
}, "-=.45")
initial.from("#line", {
    opacity: 0,
})