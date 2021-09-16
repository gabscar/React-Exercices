
import style from './Notfound.module.css'

const NotFound = () => {
    return (
        <div>
            <h1>404 Error Page</h1>
            <section className={style["error-container"]}>
                <span className={style["four"]}><span className={style["screen-reader-text"]}>4</span></span>
                <span className={style["zero"]}><span className={style["screen-reader-text"]}>0</span></span>
                <span className={style["four"]}><span className={style["screen-reader-text"]}>4</span></span>
            </section>
           
        </div>
    )
  };
  
export default NotFound;