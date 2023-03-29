import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
    state = { 
        email: 'info@cristen.hillary.com',
        contact_no: '+977 9866694556',
        webaddress: 'www.sudeepkaucha.com'
     }

    handleEmailInput = (e) => {
        this.setState({
            email: e.target.value,
        });
    }
    handleContactInput = (e) => {
        this.setState({
            contact_no: e.target.value,
        });
    }
    handleWebInput = (e) => {
        this.setState({
            webaddress: e.target.value,
        });
    }

    handleMouseOver = () => {
        this.setState({
            isHovering: true,
        });
    }

    handleClick = () => {
        this.setState({
            isClicked: true,
        })
    }

    handleExit = () => {
        this.setState({
            isHovering: false,
            isClicked: false,
        })
    }

    render() {
        const {email, contact_no, webaddress} = this.state;
        return (
            <React.Fragment>
                <div style={{position: 'relative'}} onMouseOver={this.handleMouseOver}>
                    <div className='image-contact-container'>
                        <div className='image-component'>
                            <img src='https://picsum.photos/118/184' />
                        </div>
                        <div className='contact-component'>
                            <div className='email-component'>{email}</div>
                            <div className='contact-no-component'>{contact_no}</div>
                            <div className='webaddress-component'>{webaddress}</div>
                        </div>
                    </div>
                    {this.state.isHovering && (<button className='edit-contact' onClick={this.handleClick}>Edit</button>)}
                    {this.state.isClicked && (<form className='contact-form'>
                        <label htmlFor='email'>Your Email</label>
                        <input id='email' type='email' onChange={this.handleEmailInput} />
                        <label htmlFor='contact-no'>Your Contact</label>
                        <input id='contact-no' type='text' onChange={this.handleContactInput} />
                        <label htmlFor='webaddress'>Your Website</label>
                        <input id='webaddress' type='text' onChange={this.handleWebInput} />
                        <button className='submit-contact' onClick={this.handleExit}>Submit</button>
                    </form>)}
                </div>
            </React.Fragment>
        );
    }
}

export default Contact;