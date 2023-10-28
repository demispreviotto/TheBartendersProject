import { useAuth0 } from '@auth0/auth0-react';
import './ButtonUser.css'
import ButtonLogout from './ButtonLogout';
import { Link } from 'react-router-dom'


const ButtonUser = () => {
    const { user } = useAuth0();

    return (
        <div className="popover">
            <Link to={'/profile'} className='user'>
                <img src={user.picture} alt={user.name} className='user-avatar' />
            </Link>
            <div className="menu">
                <div className='user-info'>
                    <img src={user.picture} alt={user.name} />
                    <div className='user-data'>
                        <h3>{user.nickname}</h3>
                        <p>{user.email}</p>
                    </div>
                </div>
                <div className='user-buttons'>
                    <Link to={'/profile'} className='btn primary-btn'>Profile
                    </Link>
                    <ButtonLogout />
                </div>
            </div>
        </div>
    )

}

export default ButtonUser;