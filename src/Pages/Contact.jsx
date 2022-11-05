import Footer from '../Component/Footer'

const Contact = () => {
    let name = 'HNG'
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
                />
            </div>
            <div className="nameInputContainer">
                <label>Last name</label><br/>
                <input 
                id='last_name'
                placeholder="Enter your last name"
                />
            </div>
            </div>

            <div className="emailInputContainer">
                <label>Email</label><br/>
                <input 
                id='email'
                placeholder="yourname@gmail.com"
                />
            </div>

            <div className="messageInputContainer">
                <label>Message</label><br/>
                <textarea
                id='message'
                placeholder="Send me a message and i'll reply you as soon as possible"
                >
                </textarea>
            </div>

            <div className="checkboxDiv">
                <input type='checkbox' className="contactCheckbox"/>
                <span>You agree to providing your data to {name} who may contact you.</span>
            </div>

            <div className="btnContainer">
            <button id="btn__submit">Send message</button>
            </div>
            
            </form>
        </div>
        <Footer />
        </div>
    )
}

export default Contact;