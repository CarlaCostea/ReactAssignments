// Create TWO new components: UserInput and UserOutput</li>
// UserInput should hold an input element, UserOutput two paragraphs</li>
// Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
// Pass a username (of your choice) to UserOutput via props and display it there</li>
// Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
// Add a method to manipulate the state (=> an event-handler method)</li>

import React from 'react'

const userOutput = (props) => {
    return (
        <div>
            <p>First paragraph {props.userName}</p>
            <p>Second paragraph</p>
        </div>
    )
}

export default userOutput;