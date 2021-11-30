import  React from 'react'
import preloader from './25.svg'
import c from './Preloader.module.css'

let Preloader = () =>{
    return <div className={c.preloader}>
        <img src={preloader} alt={'preloader'}/>
    </div>
}
export default Preloader