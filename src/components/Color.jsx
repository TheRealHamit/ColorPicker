const clicked = (color, setSelectedColor) => {
    setSelectedColor(color)
}

const Color = ({ color, selectedColor, setSelectedColor }) => {
    
    return <div className={color + (selectedColor == color ? " selected" : "")} onClick={() => clicked(color, setSelectedColor)}></div>
}

export default Color