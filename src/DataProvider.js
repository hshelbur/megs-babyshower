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
				posts: [],
				rsvps: []
			};
		}

		componentDidMount() {
			const dbPosts = firebase.database().ref('posts')
			dbPosts.on('value', snapshot => {
				const value = snapshot.val()
				const posts = _(value).keys().map(key => ({key, ...value[key]})).value()
				this.setState({posts})
			})
			
			const dbRSVPs = firebase.database().ref('rsvps')
			dbRSVPs.on('value', snapshot => {
				const value = snapshot.val()
				const rsvps = _(value).keys().map(key => ({key, ...value[key]})).value()
				this.setState({rsvps})
			})
		}

		createPost(name, message) {
			const dbPosts = firebase.database().ref('/posts');
			dbPosts.push({name, message});
		}

		createRSVP(name, selectedOption, number) {
			const dbRSVPs = firebase.database().ref('/rsvps');
			dbRSVPs.push({name, selectedOption, number});
		}

		render() {
			const {posts, rsvps} = this.state

			return (
				<Component posts={posts} rsvps={rsvps} createRSVP={this.createRSVP} createPost={this.createPost} />
			);
		}
	}

	return DataProvider
}
export default connect