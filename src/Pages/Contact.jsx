import Footer from '../Component/Footer'
import {useState} from 'react'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {
    let name = 'HNG'
    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        message: ''
    })

    const [firstnameError, setFirstNameError] = useState('')
    const [lastnameError, setLastNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [messageError, setMessageError] = useState('')

    const onInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;

        setData({
            ...data,
            [name]: value
        })
    }

    const onClickSubmitBtn = (e) => {
        e.preventDefault()
        const {firstname, lastname, email, message} = data

        !firstname ? setFirstNameError('please enter first name') : setFirstNameError('')
        !lastname ? setLastNameError('please enter last name') : setLastNameError('')
        !email ? setEmailError('please enter email') : setEmailError('')
        !message ? setMessageError('please enter first name') : setMessageError('')
            
        if(firstname && lastname && email && message){
        toast.success('submited successfully!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    })
}
}
    return(
        <div>
        <div className="contactContainer">
            <div className='contactHeader'>
            Contact Me
            </div>
            <div className="contactSubtext">
            Hi there, contact me to ask me about anything you have in mind.
            </div>
            <form>
            <div className="nameDiv">
            <div className="nameInputContainer">
                <label>First name</label><br/>
                <input 
                id='first_name'
                placeholder="Enter your first name"
                onChange={onInputChange}
                value={data.firstname}
                name='firstname'
                required
                />
                <div className='error'>{firstnameError}</div>
            </div>
            <div className="nameInputContainer">
                <label>Last name</label><br/>
                <input 
                id='last_name'
                placeholder="Enter your last name"
                value={data.lastname}
                name='lastname'
                onChange={onInputChange}
                required
                />
                <div className='error'>{lastnameError}</div>

            </div>
            </div>

            <div className="emailInputContainer">
                <label>Email</label><br/>
                <input 
                id='email'
                placeholder="yourname@gmail.com"
                onChange={onInputChange}
                value={data.email}
                name='email'
                required
                />
                <div className='error'>{emailError}</div>
            </div>

            <div className="messageInputContainer">
                <label>Message</label><br/>
                <textarea
                id='message'
                placeholder="Send me a message and i'll reply you as soon as possible"
                onChange={onInputChange}
                value={data.message}
                name='message'
                required
                >
                </textarea>
                <div className='error'>{messageError}</div>
            </div>

            <div className="checkboxDiv">
                <input type='checkbox' className="contactCheckbox"/>
                <label>You agree to providing your data to {name} who may contact you.</label>
            </div>

            <div className="btnContainer">
            <button 
            id="btn__submit"
            onClick={onClickSubmitBtn}
            >
            Send message
            </button>
            <ToastContainer/>
            </div>
            
            </form>
        </div>
        <Footer />
        </div>
    )
}

export default Contact;