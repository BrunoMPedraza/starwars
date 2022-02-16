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

export const asidePropsAnimations= {
    initial:{ y:20, opacity: 0 },
    animate:{ y:0, opacity: 1 },
    exit:{y:20, opacity: 0 },
    transition:{ delay: 1.5,duration: .9}
}

export const formPropsAnimations={
    initial:{ y:40, opacity: 0 },
    animate:{ y:0, opacity: 1 },
    exit:{y:40, opacity: 0 },
    transition:{ delay: 2.9,duration: .6}
}

export const logoAnimations ={
    initial:{ y:40, rotate: 180, opacity: 0, scale: 1.2 },
    animate:{ y:0, rotate: 0, opacity: 1, scale: 1 },
    exit:{y:40, opacity: 0 },
    transition:{ delay: .5,duration: 1}
}

export const glassAnimations={
    initial:{ y:-1000, scale: 0.6 },
    animate:{ y:0, scale: 1 },
    exit:{y:40, opacity: 0 },
    transition:{ delay: 1.1,duration: 2}
}

export const loadingAnimations={
    initial:{ y:"50%",opacity:1, scale: 0.5 },
    animate:{ y:0,opacity:1, scale: 1 },
    exit:{y:"50%", transition:{duration:1} },
    transition:{ delay: 2.5,duration:1,ease:"easeOut"}
}
// initial={{y:"50%",opacity:0,scale:0.5}}
// animate={{y:0,opacity:1,scale:1}}
// exit={{y:"50%",opacity:0,transition:{duration:9.0}}}
// transition={{duration:0.4,delay:.2,ease:"easeOut"}}
export const mainGlassMovementAnimations={
    initial:{ y:"50%",opacity:0, scale: 0.5 },
    animate:{ y:0,opacity:1, scale: 1 },
    exit:{y:"50%",opacity:0, transition:{duration:2} },
    transition:{ delay: .2,duration:1,ease:"easeOut"}
}