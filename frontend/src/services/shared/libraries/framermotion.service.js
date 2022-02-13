export const twinklingAnimations = {
    initial:{ x: '180vh' },
    animate:{ x: '-200vh'},

// initial={{ x: 300, opacity: 0 }}
// animate={{ x: 0, opacity: 1 }}
// exit={{ x: -300, opacity: 0 }}
// transition={{ repeat: Infinity, duration: 2 }}


}
export const footerAnimation = {
    initial:{opacity: 0, y: 0 },
    animate:{opacity: 1, y: 0, transition:{duration: .7, delay: 2.2} },
}


export const massiveAnimation = {
    initial:{ opacity: 0, y: -200 },
    animate:{ opacity: 1, y: 0, transition:{duration: .5, delay: .5} },
    transition:{ type: "spring", bounce: 1 }
}