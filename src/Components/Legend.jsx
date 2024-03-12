import React from "react";
import dustbinIcon from "../assets/dustbin.png";
import recyclerIcon from "../assets/recycler.png";
import ragPickerIcon from "../assets/ragpicker.png";
import ewasteIcon from "../assets/ewaste.png"; 

const Legend = () => {
  const legendContainerStyle = {
    padding: "10px",
    borderRadius: "5px",
    marginLeft: "10px", // Adjust spacing between map and legend
    height: "fit-content", // Limit height to content
    backgroundColor: "white", // Fill with white color
    border: "1px solid #c8e6c9", // Add light green border
  };

  const legendItemStyle = {
    display: "flex",
    alignItems: "center",
    marginBottom: "5px",
    borderBottom: "1px solid #ccc", // Add border between items
    paddingBottom: "5px", // Add padding to space out icons and texts
  };

  const legendIconStyle = {
    width: "30px",
    height: "auto",
    marginRight: "10px",
  };

  const legendTextStyle = {
    fontSize: "14px",
    display: "flex",
    alignItems: "center",
  };

  return (
    <div style={legendContainerStyle}>

      <div style={legendItemStyle}>
        <img src={dustbinIcon} alt="Dustbin Icon" style={legendIconStyle} />
        <span style={legendTextStyle}>Dustbins</span>
      </div>
      <div style={legendItemStyle}>
        <img src={recyclerIcon} alt="Recycler Icon" style={legendIconStyle} />
        <span style={legendTextStyle}>Recyclers</span>
      </div>
      <div style={legendItemStyle}>
        <img src={ewasteIcon} alt="Ewaste Bin Icon" style={legendIconStyle} />
        <span style={legendTextStyle}>Ewaste Bin</span>
      </div>
      <div style={legendItemStyle}>
        <img src={ragPickerIcon} alt="Rag Picker Icon" style={legendIconStyle} />
        <span style={legendTextStyle}>Rag Pickers</span>
      </div>
      
    </div>
  );
};

export default Legend;