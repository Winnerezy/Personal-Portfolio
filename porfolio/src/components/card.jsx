export default function Card(props){

    return (
        <div className="w-80 h-96 border-4 border-white rounded-2xl grid grid-cols-1 items-center justify-center pl-8 pr-8">
            <img src={props.image} alt={props.title} />
            <div>{props.title}</div>
            <span>{props.description}</span>
            <span className="text-end">-- Created by Winner</span>
        </div>
    )
}