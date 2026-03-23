import { useState } from 'react'

const items = [
  'Profile Information',
  'Change Password',
  'Become PRO',
  'Help',
  'Log Out',
]

function DropdownList({ selected }) {
  const [activeItem, setActiveItem] = useState(selected)

  return (
    <ul data-id="dropdown" className="dropdown">
      {items.map((item) => (
        <li
          key={item}
          style={activeItem === item ? { color: '#5380F7' } : {}}
          onClick={() => setActiveItem(item)}
        >
          <a href="#">{item}</a>
        </li>
      ))}
    </ul>
  )
}

export default DropdownList