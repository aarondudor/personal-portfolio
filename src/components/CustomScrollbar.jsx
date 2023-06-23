import React from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

const CustomScrollbar = () => {
  const renderThumbVertical = ({ style, ...props }) => {
    const thumbStyle = {
      backgroundColor: "#888", // Customize the thumb color here
      borderRadius: "4px", // Customize the thumb border radius here
      width: "6px", // Customize the thumb width here
    };

    return <div style={{ ...style, ...thumbStyle }} {...props} />;
  };

  const renderTrackVertical = ({ style, ...props }) => {
    const trackStyle = {
      backgroundColor: "#f1f1f1", // Customize the track color here
      borderRadius: "4px", // Customize the track border radius here
      width: "6px", // Customize the track width here
    };

    return <div style={{ ...style, ...trackStyle }} {...props} />;
  };

  return (
    <Scrollbars
      style={{ height: "300px" }} // Set a fixed height for the parent container
      renderThumbVertical={renderThumbVertical}
      renderTrackVertical={renderTrackVertical}
    >
      {/* Your content here */}
    </Scrollbars>
  );
};

export default CustomScrollbar;
