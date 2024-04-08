import gsap from "gsap"

export const vanishingAnimation = async (el: HTMLElement, delay: number, stagger?: number, onComplete?: () => void) =>{
    const tl = gsap.timeline({
        onComplete: onComplete
    });

    if (el && el.children && el.children.length > 0) {
        tl.fromTo(el.children, {
            opacity: 0,
        }, {
            delay: delay,
            stagger: stagger ? stagger : 0,
            opacity: 1,
        });
    } else {
        tl.fromTo(el, {
            opacity: 0,
        }, {
            delay,
            opacity: 1
        });
    }
}

export const reveresedVanishingAnimation = async (el: HTMLElement, delay: number, stagger?: number, onComplete?: () => void) =>{
    const tl = gsap.timeline({
        onComplete: onComplete
    });

    if (el && el.children && el.children.length > 0) {
        tl.fromTo(el.children, {
            opacity: 1,
        }, {
            delay: delay,
            stagger: stagger ? stagger : 0,
            opacity: 0
        });
    } else {
        tl.fromTo(el, {
            opacity: 1,
        }, {
            delay,
            opacity: 0
        });
    }
}