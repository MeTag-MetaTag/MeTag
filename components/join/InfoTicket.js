import Image from "next/image";

export default function InfoTicket(props){
    return (
        <div>
            <div className="flex flex-row items-center mb-6 laptop:hidden">
                <Image src={props.img}/>
                <p className="ml-3 large-bold-text text-[#82838B]">{props.title}</p>
            </div>
            <div className="laptop:flex flex-col items-start hidden">
                <Image src={props.img}/>
                <p className="mt-5 large-bold-text">{props.title}</p>
                <p className="mt-2 paragraph">{props.description}</p>
            </div>
        </div>
    )
}