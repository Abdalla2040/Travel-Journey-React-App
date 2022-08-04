import './header.css'
import Icon from '../img/globe-svgrepo-com.svg'

export default ()=> {
  return (
    <div className="header-container">
        <div className="logo-container">
          <img src={Icon} alt="earth africa globe" className="icon" />
        </div>
        <h4 className="title">My travel journal.</h4>
    </div>
  )
}

