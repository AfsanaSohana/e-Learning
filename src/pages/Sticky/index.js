import React from 'react'


const StickyDiv = () => {
    return (
      <div style={{ display: 'flex', padding: '10px' }}>
        <div
          style={{
            position: "sticky",
            top: "20px",
            padding: "15px",
            background: "#f1f1f1",
            border: "1px solid #ccc",
            height: "200px",
          }}
        >
          <h4>Sticky Sidebar</h4>
          <p>This box stays in view when you scroll.</p>
        </div>
  
        <div style={{ marginLeft: "20px" }}>
          <p>Scroll down to see the sticky box in action!</p>
          {/* Add more content to allow scrolling */}
          {[...Array(50)].map((_, i) => (
            <p key={i}>This is some scrolling content...</p>
          ))}
        </div>
      </div>
    );
  };
  
  export default StickyDiv;