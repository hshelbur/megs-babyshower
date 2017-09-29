import React, {Component} from 'react';
import trim from 'trim';

const Button = props =>
  <button onClick={props.onClick}  type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off">
    {props.label}
  </button>

class MessageBox extends Component {

  constructor(props){
    super(props);
    this.onClick = this.onClick.bind(this);
    this.state = { post: {name: '', message: ''}};
  }

  onClick(e){
      e.preventDefault();
      const {post} = this.state
      let dbCon = this.props.db.database().ref('/messages');
      dbCon.push({
        post: {name: post.name, message: post.message}
      });
      this.setState({
        post: {name: '', message: ''}
      });
  }
  
  render() {
    const {post} = this.state

    return (
      <form>
        <input className="name-input" type='text' placeholder='Name' value={post.name} onChange={e => this.setState({post: {...post, name : e.target.value}})} />
        <textarea className="message-input" type='text' placeholder='Message' value={post.message} onChange={e => this.setState({post: {...post, message : e.target.value}})} />
        <Button className="button" onClick={this.onClick} label='Leave a Message!' />
      </form>
    )
  }
}

export default MessageBox