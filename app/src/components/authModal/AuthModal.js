import { useContext, useRef, useState } from "react";
import "./authModal.css"
import { AuthModalContext } from "../../context/authModalContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const data = {}

function AuthModal() {
    const { closeAuthModal } = useContext(AuthModalContext)

    const [currentForm, setCurrentForm] = useState('firstForm')
    const [errorForm, setErrorForm] = useState(null)
    const [isLogin, setIsLogin] = useState(false)

    const sendCodeForm = useRef(null)
    const sendInfoForm = useRef(null)

    const navigate = useNavigate();

    async function handleSubmitSendCode(e) {
        e.preventDefault();
        const formData = new FormData(sendCodeForm.current)
        for (let [name, value] of formData) {
            data[name] = value;
        }

        try {
            if (!isLogin) {
                await axios.post("http://localhost:8080/authentication/activation", {
                    email: formData.get('email')
                })
                setCurrentForm('secondForm')
            } else {
                const response = await axios.post("http://localhost:8080/authentication/sign-in", {
                    email: formData.get('email'),
                    password: formData.get('password')
                })
                localStorage.setItem('token', response.data.token)
                localStorage.setItem('email', data['email'])
                closeAuthModal()
                navigate('/account')
            }
            setErrorForm(false)
        } catch (error) {
            setErrorForm(true)
            setCurrentForm('secondForm') //убрать
        }
    }

    async function handleSubmitSendInfo(e) {
        e.preventDefault();
        const formData = new FormData(sendInfoForm.current)
        for (let [name, value] of formData) {
            data[name] = value;
        }
        try {
            const response = await axios.post("http://localhost:8080/authentication/sign-up", {
                ...data
            })
            localStorage.setItem('token', response.data.token)
            localStorage.setItem('email', data['email'])
            setErrorForm(false)
            closeAuthModal()
            navigate('/account')
        } catch (error) {
            setErrorForm(true)
        }

    }

    return (
        <div className="container__reg">
            <div className="shadow" onClick={() => closeAuthModal()}>

            </div>

            <div className="window">

                {
                    currentForm === 'firstForm' &&
                    <form className="form__reg" ref={sendCodeForm} onSubmit={handleSubmitSendCode}>
                        {
                            errorForm &&
                            <p className="error">Ошибка отправки!</p>
                        }

                        {
                            !isLogin && <>
                                <div className="form__div">
                                    <label htmlFor="firstName">имя:</label><br />
                                    <input className="form__input" name="firstName" type="text" required></input>
                                </div>

                                <div className="form__div">
                                    <label htmlFor="lastName">фамилия:</label><br />
                                    <input className="form__input" name="lastName" type="text" required></input>
                                </div>
                            </>
                        }

                        <div className="form__div">
                            <label htmlFor="email">почта:</label><br />
                            <input className="form__input" name="email" type="text" required></input>
                        </div>

                        <div className="form__div">
                            <label htmlFor="password">пароль:</label><br />
                            <input className="form__input" name="password" type="password" required></input>
                        </div>

                        <button className="form__btn btn__mg" type="submit">отправить</button>
                        <button className="is__login form__btn" onClick={() => setIsLogin(prev => !prev)}>{isLogin ? "нет аккаунта" : "есть аккаунт"}</button>
                    </form>
                }

                {
                    currentForm === 'secondForm' &&
                    <form className="form__reg" ref={sendInfoForm} onSubmit={handleSubmitSendInfo}>
                        {
                            errorForm &&
                            <p className="error">Ошибка отправки!</p>
                        }

                        <div className="form__div">
                            <label htmlFor="code">код подверждения:</label><br />
                            <input className="form__input" name="code" type="text" required></input>
                        </div>

                        <button className="form__btn btn__mg" type="submit">подтвердить код</button>
                    </form>
                }

            </div >
        </div>
    );
}

export default AuthModal;