import React from 'react';
import _ from 'lodash';
import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyA30-tYESVlhFGgSDxz3Bho4WLN4WjUuQw",
    authDomain: "megs-babyshower.firebaseapp.com",
    databaseURL: "https://megs-babyshower.firebaseio.com",
    projectId: "megs-babyshower",
    storageBucket: "",
    messagingSenderId: "65092139484"
});		

function connect(Component){

	class DataProvider extends React.Component {

		constructor(props){
			super(props);
			this.state = {
				posts: []
			};
		}

		componentDidMount() {
			const dbPosts = firebase.database().ref('posts')
			dbPosts.on('value', snapshot => {
				const value = snapshot.val()
				const posts = _(value).keys().map(key => ({key, ...value[key]})).value()
				this.setState({posts})
			})
		}

		createPost(name, message) {
			const dbPosts = firebase.database().ref('/posts');
			dbPosts.push({name, message});
		}

		render() {
			const {posts} = this.state

			return (
				<Component posts={posts} createPost={this.createPost} />
			);
		}
	}

	return DataProvider
}
export default connect