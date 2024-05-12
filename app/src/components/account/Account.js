import { useEffect, useState } from "react";
import "./account.css"
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Account() {
    const [user, setUser] = useState(null)

    const navigate = useNavigate()

    useEffect(() => {
        async function getUser() {
            const email = localStorage.getItem('email')
            const response = await axios.get("http://localhost:8080/user/" + email)
            setUser(response.data)
        }
        getUser()
    }, [])

    function handleLogOut() {
        localStorage.removeItem('token')
        localStorage.removeItem('email')
        navigate('/')
    }

    return (
        <div className="account__container">
            <div className="account">
                {
                    user && <>
                        <p className="account__p">Имя: {user.firstName}</p>
                        <p className="account__p">Фамилия: {user.lastName}</p>
                        <p className="account__p">Почта: {user.email}</p>
                        <button className="account__btn" onClick={handleLogOut}>Выйти из аккаунта</button>
                    </>
                }
            </div>
        </div>
    );
}

export default Account;