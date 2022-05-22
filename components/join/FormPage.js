//TODO: stateButton should be different when we aren't submittin
//TODO: add icon to the submit button

export default function SlideForm(props){
    let stateButtons;
    if(props.submit){
        <button className="additional">Submit</button>
    }
    else{
        stateButtons = (
            <div className="flex gap-4">
                <button className="additional-backward"></button>
                <button className="additional-forward px-4">Next</button>
            </div>
        )
    }
    
    return(
        <>
            <div className="laptop:hidden block">
                <div className="mx-6 mb-12">
                    <h5 className="mb-8">{props.label}</h5>
                    <input className="input-form-1 w-5/6" placeholder={props.placeholder}/>
                </div>
                <div className="flex gap-9 flex-wrap mx-6">
                    <div>
                        <div className="small-inline-text">{props.progress}% completed</div>
                        <progress className="progress-1 w-[100px]" value={props.progress} max="100"></progress>
                    </div>
                    {stateButtons}
                </div>
            </div>
            <div className="hidden w-full mx-12 mb-20 mt-24
                            laptop:flex flex-col justify-between max-w-xl">
                <div>
                    <h5>{props.label}</h5>
                    <input className="input-form-1" 
                            placeholder={props.placeholder}/>
                </div>
                <div className="flex flex-wrap justify-between gap-9">
                    <div>
                        <div className="small-inline-text">{props.progress}% completed</div>
                        <progress className="progress-1 w-200px" value={props.progress} max="100"></progress>
                    </div>
                    {stateButtons}
                </div>
            </div>
        </>
    )
}