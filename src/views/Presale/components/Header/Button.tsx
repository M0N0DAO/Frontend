import "./header.scss";

interface IButton{
    text:string,
    clickFunc:any,
}

export default function Button({text,clickFunc}:IButton){
    return (
        <div className="button" onClick={clickFunc}>
            <p>{text}</p>
        </div>
    )
}