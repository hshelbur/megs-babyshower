import React, {Component} from 'react';

const Message = props => (
			<div className="post">
				<p className="post-owner">{props.name} says:</p>
				<p className="post-body">{props.message}</p>
			</div>
)
export default Message