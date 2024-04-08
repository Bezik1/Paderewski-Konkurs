import React from "react"
import { Vector3 } from "three"

export type Location = {
    name: string
    text: string
    position: Vector3
    rotateTo: number
}

export type SetLocation = React.Dispatch<React.SetStateAction<Location>>