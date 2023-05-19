import 'bootstrap/dist/css/bootstrap.min.css';
import './Error.css'

export function Error() {
    return (
        <div className='error__wrapper'>
            <div className="alert alert-primary" role="alert">error, вернись <a href='/' className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover">назад</a></div>
        </div>
    )
}