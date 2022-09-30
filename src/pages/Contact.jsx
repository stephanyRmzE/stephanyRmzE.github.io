import {useState} from "react";
import '../styles/contact.css'


function Contact() {

  const [formData, SetFormData ] =useState({
      name: '',
      email: '',
      password: ''
  })
  const {name, email, message} = formData



  const onChange = (e) => {
    SetFormData((prevState) => ({...prevState,
      [e.target.id]: e.target.value,

    }))}



  return (
    <div className='pageContainer'>




        <main>

          <div className="contactDiv">
            <p className='pageHeader'>Love to hear from you 👋</p>
            <form className='messageForm'>
              <div className="infoDiv" >
                <div className="formInputDiv">
                  <label htmlFor='name' className='inputLabel'>
                      Your name
                  </label>
                  <input
                    type="text"
                    className="formInput"
                    id= 'name'
                    value={name}
                    onChange={onChange} />

                </div>
                <div className="formInputDiv">
                  <label htmlFor='email' className='inputLabel'>
                        Your email
                  </label>
                  <input
                    type="email"
                    className="formInput"
                    id= 'email'
                    value={email}
                    onChange={onChange} />
                </div>


              </div>
              <div className='messageDiv'>
                <label htmlFor='message' className='inputLabel'>
                  Message
                </label>
                <textarea
                  name='message'
                  id='message'
                  className='textarea'
                  value={message}
                  onChange={onChange}
                ></textarea>
              </div>

              <a
                href={`mailto:stephany.ramireze@gmail.com?Subject=&body=${message}`}
              >
                <button type='button' className='primaryButton'>
                  Send Message
                </button>
              </a>
            </form>

          </div>
        </main>


    </div>
  );
}

export default Contact;
