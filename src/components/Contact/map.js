import React from "react";

const Map = () => {
  return (
    <div style={{ position: "relative", overflow: "hidden" }}>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d6074894.776768049!2d-89.00473!3d41.973287!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880ef45d019c81f1%3A0xcf973116c5f439c5!2s13550%20US-30%20Suite%20202%2C%20Plainfield%2C%20IL%2060544!5e0!3m2!1sen!2sus!4v1730367665968!5m2!1sen!2sus" width="600" height="450" style={{border: "0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default Map;
