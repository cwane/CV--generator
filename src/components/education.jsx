import React, { Component } from 'react';
import uniqid from "uniqid";
import './education.css';

class Education extends Component {
    state = { 
        education: {
            campus_name: '',
            starting_year: '',
            ending_year: ''
        },
        educations: [{
            campus_name: 'YOUR MAJOR NAME OF UNIVERSITY',
            starting_year: '2019',
            ending_year: '2024'
        }, {
            campus_name: 'YOUR MAJOR NAME OF UNIVERSITY ',
            starting_year: '2019',
            ending_year: '2024'
        },],
        isHovering: false,
        isClicked: false,
     }

    handleCampusNameInput = (e) => {
        this.setState({
            education: {
                campus_name: e.target.value,
                starting_year: this.state.education.starting_year,
                ending_year: this.state.education.ending_year,
            }
        });
    }

    handleStartingYearInput = (e) => {
        this.setState({
            education: {
                campus_name: this.state.education.campus_name,
                starting_year: e.target.value,
                ending_year: this.state.education.ending_year,
            }
        });
    }

    handleEndingYearInput = (e) => {
        this.setState({
            education: {
                campus_name: this.state.education.campus_name,
                starting_year: this.state.education.starting_year,
                ending_year: e.target.value,
            }
        })
    }

    onSubmitData = (e) => {
        e.preventDefault();
        this.setState({
            educations: this.state.educations.concat(this.state.education),
            isHovering: false,
            isClicked: false,
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

    deleteElement = (e) => {
        this.setState({
            educations: this.state.educations.filter(education => education.campus_name !== e.target.textContent)
        })
    }

    render() {
        return (
            <>
                <div style={{position: 'relative'}}>
                    <div className='education-title' onMouseOver={this.handleMouseOver}>EDUCATION</div>
                    {this.state.educations.map((education) =>
                        <div className='education-container' key={uniqid()} onDoubleClick={this.deleteElement} style={{cursor: 'pointer'}}>
                            <div className='campus-name-component'>{education.campus_name}</div>
                            <span className='starting-year-component'>{education.starting_year} - </span>
                            <span className='ending-year-component'>{education.ending_year}</span>
                        </div>
                    )}
                    {this.state.isHovering && (<button className='edit-education' onClick={this.handleClick}>Edit</button>)}
                    {this.state.isClicked && (<form onSubmit={this.onSubmitData} className='education-form'>
                        <label htmlFor='campus-name'>Your Campus Name</label>
                        <input id='campus-name' type='text' onChange={(e) => this.handleCampusNameInput(e)}/>
                        <label htmlFor='starting-year'>Starting Year</label>
                        <input id='starting-year' type='text' onChange={(e) => this.handleStartingYearInput(e)} />
                        <label htmlFor='ending-year'>Ending Year</label>
                        <input id='ending-year' type='text' onChange={(e) => this.handleEndingYearInput(e)} />
                        <button className='submit-education' type='submit'>Submit</button>
                    </form>)}
                </div>
            </>
        );
    }
}

export default Education;