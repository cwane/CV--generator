import React, { Component } from 'react';
import uniqid from 'uniqid';
import './jobDescription.css';

class JobDescription extends Component {
    state = { 
        job: {
            job_title: 'JOB TITLE GOES HERE',
            company_name: 'COMPANY NAME',
            starting_year: '2018',
            ending_year: '2030',
            description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
        },
        jobs: [
            {
                job_title: 'JOB TITLE GOES HERE',
                company_name: 'COMPANY NAME',
                starting_year: '2018',
                ending_year: '2030',
                description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
            },
            {
                job_title: 'JOB TITLE GOES HERE     ',
                company_name: 'COMPANY NAME',
                starting_year: '2018',
                ending_year: '2030',
                description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.',
            },
        ],
        isHovering: false,
        isClicked: false,
     }

    handleJobTitleInput = (e) => {
        this.setState({
            job: {
            job_title: e.target.value,
            company_name: this.state.job.company_name,
            starting_year: this.state.job.starting_year,
            ending_year: this.state.job.ending_year,
            description: this.state.job.description,
            }
        });
    }
    
    handleCompanyNameInput = (e) => {
        this.setState({
            job: {
                job_title: this.state.job.job_title,
                company_name: e.target.value,
                starting_year: this.state.job.starting_year,
                ending_year: this.state.job.ending_year,
                description: this.state.job.description,
            }
        });
    }

    handleStartingYearInput = (e) => {
        this.setState({
            job: {
                job_title: this.state.job.job_title,
                company_name: this.state.job.company_name,
                starting_year: e.target.value,
                ending_year: this.state.job.ending_year,
                description: this.state.job.description,
            }
        });
    }

    handleEndingYearInput = (e) => {
        this.setState({
            job: {
                job_title: this.state.job.job_title,
                company_name: this.state.job.company_name,
                starting_year: this.state.job.starting_year,
                ending_year: e.target.value,
                description: this.state.job.description,
            }
        });
    }

    handleJobDetailsInput = (e) => {
        this.setState({
            job: {
                job_title: this.state.job.job_title,
                company_name: this.state.job.company_name,
                starting_year: this.state.job.starting_year,
                ending_year: this.state.job.ending_year,
                description: e.target.value,
            }
        });
    }

    handleSubmitEvent = (e) => {
        e.preventDefault();
        this.setState({
            jobs: this.state.jobs.concat(this.state.job),
            isHovering: false,
            isClicked: false,
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

    deleteElement = (e) => {
        this.setState({
            jobs: this.state.jobs.filter(job => job.job_title !== e.target.textContent)
        })
    }

    render() {
        return (
            <React.Fragment>
                <div style={{position: 'relative'}}>
                    <div className='experience-title' onMouseOver={this.handleMouseOver}>EXPERIENCE</div>
                    <hr className='experience-title-hr' />
                    {this.state.jobs.map(job =>
                        <div className='job-container' key={uniqid()} onDoubleClick={this.deleteElement}>
                            <div className='job-title-component' style={{cursor: 'pointer'}}>{job.job_title}</div>
                            <span className='company-name-component'>{job.company_name} | </span>
                            <span className='starting-year'>{job.starting_year} to </span>
                            <span className='ending-year'>{job.ending_year}</span>
                            <div className='job-description-component'>{job.description}</div>
                        </div>
                        )}
                    {this.state.isHovering && (<button className='edit-job' onClick={this.handleClick}>Edit</button>)}
                    {this.state.isClicked && (<form onSubmit={this.handleSubmitEvent} className='job-form'>
                        <label htmlFor='job-title'>Your Job Title</label>
                        <input id='job_title' type='text' onChange={this.handleJobTitleInput} />
                        <label htmlFor='company-name'>Company Name</label>
                        <input id='company-name' type='text' onChange={this.handleCompanyNameInput}/>
                        <label htmlFor='starting-year'>Starting Year</label>
                        <input id='starting-year' type='text' onChange={this.handleStartingYearInput} />
                        <label htmlFor='ending-year'>Ending Year</label>
                        <input id='ending-year' type='text' onChange={this.handleEndingYearInput} />
                        <label htmlFor='job-description'>Details</label>
                        <textarea id='job-description' row='5' columns='8' onChange={this.handleJobDetailsInput} />
                        <button className='submit-job' type='submit'>Submit</button>
                    </form>)}
                </div>
            </React.Fragment>
        );
    }
}

export default JobDescription;