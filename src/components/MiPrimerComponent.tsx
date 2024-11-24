import { FC } from "react"

interface IPropsMiPrimerComponent{
    text:string
    backgroundColor: string
}

export const MiPrimerComponent : FC<IPropsMiPrimerComponent> = ({text, backgroundColor, fontSize: number}) => {
    return (
        <div style={{ color: `${color}`, fontSize: `${fontSize || 1}rem`}}>
            <p>{text}</p>
        </div>
    );
};

