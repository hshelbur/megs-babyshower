import React, {Component} from 'react';
import Message from './Message';
import _ from 'lodash';

class MessageList extends Component {
  constructor(props){
    super(props);
    this.state = {
      posts: []
    };

  }

componentDidMount() {
    const dbPosts = this.props.db.database().ref('posts')
    dbPosts.on('value', snapshot => {
        const value = snapshot.val()
        const posts = _(value).keys().map(key => ({key, ...value[key]})).value()
        this.setState({posts})
    })
}

  render() {

    let postNodes = this.state.posts.map((post) => {
      return (
        <div className="card">
          <div className="card-content">
            <Message name={post.post.name} message={post.post.message} />
          </div>
        </div>
      )
    });
    return (
      <div>
        {postNodes}
      </div>
    );
  }
}

export default MessageList