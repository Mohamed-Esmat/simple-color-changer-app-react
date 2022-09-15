import React from 'react'


const Square = ({ colorValue,hexValue,isDarkText }) => {
    let theColor;
    colorValue==="black" || colorValue==="#000" ? theColor = "white" : theColor = "black"
  return (
    <section className='square' style={{ backgroundColor: colorValue,color: theColor }}>{/**color: isDarkText ? "#000" : "#fff" */}
        <p>{colorValue? colorValue : "Empty Value"}</p>
        <p>{hexValue ? hexValue : null}</p>
    </section>
  )
}
Square.defaultProps = {
    colorValue: "Empty Color Value"
}

export default Square