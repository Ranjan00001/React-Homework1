import '../css/SideBar.css'

function SideBar({ handleClick, selectedBot }) {
    const list = ['Capitalize', 'Count Words', 'Count Vowels', 'Lower case', 'Reverse', 'Underscorer']
    let color

    return (
        <>
            <div className="sideBarContainer">
                {
                    list.map((botName, index) => {
                        if (botName === selectedBot) {
                            color = "green";
                        }
                        else {
                            color = 'white'
                        }
                        { console.log(color) }
                        return (<ol key={index} onClick={() => handleClick(botName)} style={{ backgroundColor: color }}>{botName}</ol>)
                    })
                }
            </div>
        </>
    )
}

export default SideBar