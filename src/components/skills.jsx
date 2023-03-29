import React, { Component } from 'react';
import uniqid from "uniqid";
import './skills.css';

class Skills extends Component {
    state = { 
        skill: '',
        skills: ['Website Design', 'Product Design', 'Prototyping', 'UI / UX', 'Creative Direction'],
        isHovering: false,
        isClicked: false,
    }

    handleSkillInput = (e) => {
        this.setState({
            skill: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            skills: this.state.skills.concat(this.state.skill),
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
            skills: this.state.skills.filter(skill => skill !== e.target.textContent)
        })
    }

    render() {
        return (
            <React.Fragment>
                <div style={{position: 'relative'}}>
                    <div className='skills-title' onMouseOver={this.handleMouseOver}>SKILLS</div>
                    <ul className='skills-component'>
                        {this.state.skills.map(skill =>
                            <li key={uniqid()} onDoubleClick={this.deleteElement} style={{cursor: 'pointer'}}>{skill}</li>
                            )}
                    </ul>
                    {this.state.isHovering && (<button className='edit-skills' onClick={this.handleClick}>Edit</button>)}
                    {this.state.isClicked && (<form onSubmit={this.handleSubmit} className='skills-form'>
                        <label htmlFor='skill'>Add Skill</label>
                        <input id='skill' type='text' onChange={(e) => this.handleSkillInput(e)}/>
                        <button type='submit' className='submit-skills' onClick={this.handleExit}>Submit</button>
                    </form>)}
                </div>
            </React.Fragment>
        );
    }
}

export default Skills;