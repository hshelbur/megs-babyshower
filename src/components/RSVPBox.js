import React, {Component} from 'react';
import Button from './Button.js'

class RSVPBox extends Component {

	constructor(props){
		super(props);
		this.onClick = this.onClick.bind(this);
		this.handleOptionChange = this.handleOptionChange.bind(this);
		this.state = { rsvp: {name: '', selectedOption: 'yes', number: ''}};
	}

	onClick(e){
      e.preventDefault();
      const {rsvp: {name, selectedOption, number}} = this.state
      this.props.createRSVP(name, selectedOption, number)
      this.setState({
        rsvp: {name: '', selectedOption: '', number: ''}
      });
  	}

  	handleOptionChange(e){
  		const {rsvp} = this.state
  		this.setState({
  			rsvp: {...rsvp, selectedOption: e.target.value}
  		});
  	}

	render() {
		const {rsvp} = this.state

		return(
			<form className="rsvp-form">
				<h2>RSVP Here</h2>
				
				<input className="name-input" type='text' placeholder='Name' value={rsvp.name} onChange={e => this.setState({rsvp: {...rsvp, name : e.target.value}})} />

				<div className="radio">
		          <label>
		            <input type="radio" value="yes" checked={rsvp.selectedOption === 'yes'} onChange={this.handleOptionChange} />
		            Yes, can't wait!
		          </label>
		        </div>
		        <div className="radio">
		          <label>
		            <input type="radio" value="no" checked={rsvp.selectedOption === 'no'} onChange={this.handleOptionChange} />
		            Sorry, can't make it
		          </label>
		        </div>

				<input className="number-input" type='number' placeholder='Total Number in Party' value={rsvp.number} onChange={e => this.setState({rsvp: {...rsvp, number : e.target.value}})} />
				
				<Button className="button" onClick={this.onClick} label='RSVP!' />
			</form>
		)
	}
}

export default RSVPBox