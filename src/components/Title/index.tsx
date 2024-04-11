import { ReactNode, useEffect } from "react"

const Title = ({ children } : { children: ReactNode | ReactNode[] }) =>{
    useEffect(() =>{
        document.title = String(children?.toString())
    }, [children])

    return null
}

export default Title