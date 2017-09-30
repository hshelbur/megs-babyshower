import React, {Component} from 'react';


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
      const {post: {name, message}} = this.state
      this.props.createPost(name, message)
      this.setState({
        post: {name: '', message: ''}
      });
  }
  
  render() {
    const {post} = this.state

    return (
      <form className="post-form">
        <h2>Leave a Message for the Mom to Be!</h2>
        <input className="name-input" type='text' placeholder='Name' value={post.name} onChange={e => this.setState({post: {...post, name : e.target.value}})} />
        <textarea className="message-input" type='text' placeholder='Message' value={post.message} onChange={e => this.setState({post: {...post, message : e.target.value}})} />
        <Button className="button" onClick={this.onClick} label='Leave a Message!' />
      </form>
    )
  }
}

export default MessageBox