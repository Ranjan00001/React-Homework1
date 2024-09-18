import '../css/SideBar.css'

function SideBar({handleClick}) {
    const list = ['Capitalize', 'Count Words', 'Count Vowels', 'Lower case']
    

    return (
        <>
            <div className="sideBarContainer">
                {
                    list.map((botName, index) => (
                        <ol key={index} onClick={() => handleClick(botName)}>{botName}</ol>
                    ))
                }
            </div>
        </>
    )
}

export default SideBar