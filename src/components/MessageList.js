import React, {Component} from 'react';
import Message from './Message';

const MessageList = ({posts}) => 
  <div>
    {posts.map((post) => 
      <div className="card">
        <div className="card-content">
          <Message name={post.name} message={post.message} />
        </div>
      </div>
    )}
  </div>

export default MessageList