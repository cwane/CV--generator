import React, { Component } from 'react';
import './address.css';

class Address extends Component {
    state = { 
        address: 'Park Avenue road, NY',
        isHovering: false,
        isClicked: false,
     }

    handleInput = (e) => {
        this.setState({
            address: e.target.value,
        });
    }

    handleMouseOver = () => {
        this.setState({
            isHovering: true,
        });
    }

    handleClicked = () => {
        this.setState({
            isClicked: true,
        });
    }

    handleExit = () => {
        this.setState({
            isHovering: false,
            isClicked: false,  
        });
    }

    render() {
        const {address} = this.state;
        return (
            <React.Fragment>
                <div style={{position: 'relative'}}>
                    <div className='address-container'>
                        <div className='rectangle' />
                        <div className='address-component' onMouseOver={this.handleMouseOver}>{address}</div>
                    </div>
                    {this.state.isHovering && (<button className='edit-address' onClick={this.handleClicked}>Edit</button>)}
                    {this.state.isClicked && (<form className='address-form'>
                        <label htmlFor='address'>Your Address</label>
                        <input id='address' type='text' onChange={ (e) => this.handleInput(e)}/>
                        <button className='submit-address' onClick={this.handleExit}>Submit</button>
                    </form>)}
                </div>
            </React.Fragment>
        );
    }
}

export default Address;