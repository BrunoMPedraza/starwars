// PAGE 0
    export const startButtonAnimations={
        initial:{ y:'30vh',x:'35vw',opacity:0, scale: 0 },
        animate:{ y:'50vh',x:'35vw',opacity:1, scale: 1 },
        exit:{y:'15vh', opacity: 0 },
        transition:{ delay: .3,duration: .6}
    }

    export const githubAnimations ={
        initial:{ y:'-2rem',x:'-2rem', rotate: 180, opacity: 0, scale: 1.2 },
        animate:{ y:'40vh',x:'20vw', rotate: 0, opacity: 0.8, scale: 1 },
        exit:{y:-40, opacity: 0 },
        transition:{ delay: 3,duration: 2}
    }
//END OF PAGE 0
// MAIN CHUNK
export const glassAnimations={
    initial:{ y:'-90vh',  scale: .8 },
    animate:{ y:0, scale: 1 },
    exit:{y:'-90vh' },
    transition:{ delay: .3,duration: 2}
}
export const authAnimations={
    initial:{ y:'-90vh',opacity:0,  scale: .9 },
    animate:{ y:0,opacity:1, scale: 1 },
    exit:{y:'-90vh' },
    transition:{ delay: 2.5,duration: 2}
}
// END OF MAIN
export const twinklingAnimations = {
    initial:{ x: '180vh' },
    animate:{ x: '-200vh'},
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
    transition:{ delay: 4.5,duration: .9}
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
    transition:{ delay: .2,duration:.7}
}