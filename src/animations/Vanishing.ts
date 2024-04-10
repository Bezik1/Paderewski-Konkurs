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
            opacity: 0,
        });
    } else {
        tl.fromTo(el, {
            opacity: 1,
        }, {
            delay,
            opacity: 0,
        });
    }
}

export const vanishingMoveNextAnimation = async (el: HTMLElement, delay: number, stagger?: number, onComplete?: () => void) =>{
    const tl = gsap.timeline({
        onComplete: onComplete
    });

    if (el && el.children && el.children.length > 0) {
        tl.fromTo(el.children, {
            y: 550,
            opacity: 0,
        }, {
            delay: delay,
            stagger: stagger ? stagger : 0,
            y: 0,
            opacity: 1,
        });
    } else {
        tl.fromTo(el, {
            opacity: 0,
            y: 550,
        }, {
            delay,
            opacity: 1,
            y: 0,
        });
    }
}

export const scaleVanishAnimation  = async (el: HTMLElement, delay: number, stagger?: number, onComplete?: () => void) =>{
    const tl = gsap.timeline({
        onComplete: onComplete
    });

    if (el && el.children && el.children.length > 0) {
        tl.fromTo(el.children, {
            y: 550,
            opacity: 0,
            scale: 1.2,
        }, {
            delay: delay,
            stagger: stagger ? stagger : 0,
            y: 0,
            opacity: 1,
            scale: 1
        });
    } else {
        tl.fromTo(el, {
            opacity: 0,
            y: 550,
            scale: 1.2
        }, {
            delay,
            opacity: 1,
            y: 0,
            scale: 1
        });
    }
}