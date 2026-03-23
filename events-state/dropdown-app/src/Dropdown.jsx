import { useState } from "react"
import DropdownList from "./DropdownList"

function Dropdown() {
    const [isOpen, setIsOpen] = useState(false)

  return (
    <div data-id='wrapper' className="dropdown-wrapper open">
        <button data-id="toggle" className="btn" onClick={() => setIsOpen(!isOpen)}>
            <span>Account Settings</span>
            <i className="material-icons">public</i>
        </button>
        {isOpen && <DropdownList selected="Help" />}
    </div>
  )
}

export default Dropdown