import React, { Component } from 'react';
import './profileDescription.css';

class ProfileDescription extends Component {
    state = { 
        profile_desc: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam',
        isHovering: false,
        isClicked: false,
     }

    handleDescInput = (e) => {
        this.setState({
            profile_desc: e.target.value,
        })
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
        return (
            <React.Fragment>
                <div style={{position: 'relative'}} onMouseOver={this.handleMouseOver}>
                    <div className='profile-title'>PROFILE</div>
                    <hr className='profile-title-hr'/>
                    <div className='profile-desc-component'>{this.state.profile_desc}</div>
                    {this.state.isHovering && (<button className='edit-profile-desc' onClick={this.handleClick}>Edit</button>)}
                    {this.state.isClicked &&(<form className='profile-desc-form'>
                        <label htmlFor='profile-desc'>Your Profile</label>
                        <textarea id='profile-desc' row='8' column='5' onChange={this.handleDescInput} />
                        <button className='submit-profile-desc' onClick={this.handleExit}>Submit</button>
                    </form>)}
                </div>
            </React.Fragment>
        );
    }
}

export default ProfileDescription;