import React, { Component } from 'react';
import './profile.css';

class Profile extends Component {
    state = { 
        name_first: 'SMITH',
        name_second: 'ANDERSON',
        position: 'UI/UX designer',
        isHovering: false,
        isClicked: false,
     }

    handleNameFirstInput = (e) => {
        this.setState({
            name_first: e.target.value,
        });
    }

    handleNameSecondInput = (e) => {
        this.setState({
            name_second: e.target.value,
        });
    }

    handlePositionInput = (e) => {
        this.setState({
            position: e.target.value,
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
        const {name_first, name_second, position} = this.state;
        return (
            <React.Fragment>
                <div style={{position: 'relative'}} onMouseOver={this.handleMouseOver}>
                    <div className='name-first-component'>{name_first}</div>
                    <div className='name-second-component'>{name_second}</div>
                    <div className='position-component'>{position}</div>
                    {this.state.isHovering && (<button className='edit-profile' onClick={this.handleClick}>Edit</button>)}
                    {this.state.isClicked &&(<form className='profile-form'>
                        <label htmlFor='profile-name-first'>Your First Name</label>
                        <input id='profile-name-first' type='text' onChange={(e)=>this.handleNameFirstInput(e)}/>
                        <label htmlFor='profile-name-second'>Your Last Name</label>
                        <input id='profile-name-second' type='text' onChange={(e)=>this.handleNameSecondInput(e)}/>
                        <label htmlFor='profile-position'>Your Position</label>
                        <input id='profile-position' type='text' onChange={(e)=>this.handlePositionInput(e)}/>
                        <button className='submit-profile' onClick={this.handleExit}>Submit</button>
                    </form>)}
                </div>
            </React.Fragment>
        );
    }
}

export default Profile;