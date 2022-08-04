import Location from '../img/location.svg'
import './main-content.css'

export default (props)=> {
    return(
        <main className="card-container">
            
                <img src={props.img} alt="an image" className="big-image"/>
                   
                <div className="text-container">
                        <span className='span-container'>
                            <img src={Location} alt="a destination" className="small-image"/>
                            <h3>{props.country}</h3>
                            <p>{props.view}</p>
                        </span>
                        <h1>{props.title}</h1>
                        <h4>{props.date}</h4>
                        <p>{props.description}</p>
                </div>
        </main>
    )
}