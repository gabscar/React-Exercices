import { NavLink } from 'react-router-dom';
import style from './MainNavigation.module.css'

const MainNavigation =()=>{
    return(
        <header className = {style.header}>
            <div className ={style.logo} >Great Quotes</div>
            <nav className = {style.nav}>
                <ul>
                    <li>
                        <NavLink
                            to = '/quotes'
                            className = {style.active}
                        >AllQuotes</NavLink>
                    </li>
                    <li>
                        <NavLink
                            to = '/new-quote'
                            className = {style.active}
                        >Add a Quote</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    )
}


export default MainNavigation;