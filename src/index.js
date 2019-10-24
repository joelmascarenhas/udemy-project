//Import React and ReactDom Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

function getImage() {
    return faker.image.avatar();
};

// Create a react component
const App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <div>
                    <h4>Warning!</h4>
                    Are you sure you want to do this?
                </div> 
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Sam" 
                    timeAgo="Today at 4:45PM" 
                    commentText="Hello!" 
                    avatarImage={getImage()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Alex" 
                    timeAgo="Today at 2:00AM" 
                    commentText="Is it Me!" 
                    avatarImage={getImage()}
                />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail 
                    author="Jane" 
                    timeAgo="Yesterday at 5:00PM" 
                    commentText="You are looking for!!" 
                    avatarImage={getImage()}
                />
            </ApprovalCard>
        </div>
    );
};

// Take react component and show on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
);