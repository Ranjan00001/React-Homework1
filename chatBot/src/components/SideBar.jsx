import '../css/SideBar.css'

function SideBar({handleClick}) {
    const list = ['Bot1', 'Bot2']
    

    return (
        <>
            <div className="sideBarContainer">
                {
                    list.map((botName, index) => (
                        <ol key={index} onClick={() => handleClick(botName)}><h1>{botName}</h1></ol>
                    ))
                }
            </div>
        </>
    )
}

export default SideBar