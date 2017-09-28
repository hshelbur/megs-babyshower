import React, { Component } from 'react';

const Button = props =>
	<button onClick={props.onClick}  type="button" className="btn btn-primary" data-toggle="button" aria-pressed="false" autoComplete="off">
 		{props.label}
	</button>

const Post = props => (
			<div className="post">
				<p className="post-owner">{props.name}</p>
				<p className="post-body">{props.message}</p>
			</div>
)

const PostList = props => (
	<main>
    		{props.posts.map(function(post){
    			return <Post name={post.name} message={post.message} />
    		})}
	</main>
)

class CreatePostForm extends Component {
	constructor(props) {
    	super(props);
    	this.state = {post: {name: '', message: ''}};
  	}

	render(){
		const {post} = this.state

		return <div className="create-post-form">
			<form className="post-form">
				<input className="name-input" type='text' placeholder='Name' value={post.name} onChange={e => this.setState({post: {...post, name : e.target.value}})} />
				<textarea className="message-input" type='text' placeholder='Message' value={post.message} onChange={e => this.setState({post: {...post, message : e.target.value}})} />
				<Button className="button" onClick={() => this.props.addNewPost(post)} label='Leave a Message!' />
			</form>
		</div>
	}
}

class Guestbook extends Component {
	constructor (){
		super();
		this.state = {posts: []};
		this.addNewPost = this.addNewPost.bind(this);
	}

	addNewPost(post){
		const newPosts = this.state.posts.concat(post);
		this.setState({posts: newPosts})
    }

    render(){
    	return(
	    	<div>
	    		<CreatePostForm addNewPost={this.addNewPost} />
	    		<PostList posts={this.state.posts} />
	    	</div>
    	)
    }
	
}


export default Guestbook












