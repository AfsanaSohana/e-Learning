import React from 'react'
function coursePopup() {
  return (
 


  {/* Trigger Button to Open Modal */}
  <div className="text-center my-4">
    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
      Open List Popup
    </button>
  </div>

  {/* Modal */}
  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" ariaHidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">List of Items</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div className="modal-body">
          {/* List Box 1 */}
          <div className="list-box">
            <div className="text-left">Item 1</div>
            <img src="https://via.placeholder.com/50" alt="Item 1"/>
            <button className="btn btn-outline-primary">Click Me</button>
          </div>

          {/* List Box 2 */}
          <div className="list-box">
            <div className="text-left">Item 2</div>
            <img src="https://via.placeholder.com/50" alt="Item 2"/>
            <button className="btn btn-outline-primary">Click Me</button>
          </div>

          {/* List Box 3 */}
          <div className="list-box">
            <div className="text-left">Item 3</div>
            <img src="https://via.placeholder.com/50" alt="Item 3"/>
            <button className="btn btn-outline-primary">Click Me</button>
          </div>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

    
    
  )
}

export default coursePopup
