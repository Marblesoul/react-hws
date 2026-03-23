import { useState } from 'react'
import IconSwitch from './IconSwitch'
import CardView from './CardView'
import ListView from './ListView'

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];

function Store() {
  const [view, setView] = useState('view_list')

  const handleSwitch = () => {                                                                                          
      setView(prev => prev === 'view_list' ? 'view_module' : 'view_list')
    }        

  return (
    <div className="store">
      <div className="store-header">
        <IconSwitch className="store-header-icon" icon={view} onSwitch={handleSwitch} />
      </div>
        <div className={`store-content ${view === 'view_module' ? 'store-content--list' : ''}`}>
            {view === 'view_list' ? <CardView cards={products} /> : <ListView cards={products} />}
        </div>
    </div>
  )
}

export default Store