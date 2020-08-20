// Create TWO new components: UserInput and UserOutput</li>
// UserInput should hold an input element, UserOutput two paragraphs</li>
// Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
// Pass a username (of your choice) to UserOutput via props and display it there</li>
// Add state to the App component (=> the username) and pass the username to the UserOutput component</li>
// Add a method to manipulate the state (=> an event-handler method)</li>
// Pass the event-handler method reference to the UserInput component and bind it to the input-change event</li>
// Ensure that the new input entered by the user overwrites the old username passed to UserOutput</li>
// Add two-way-binding to your input (in UserInput) to also display the starting username</li>
// Add styling of your choice to your components/ elements in the components - both with inline styles and stylesheets</li>
import React from 'react'
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>First paragraph {props.userName}</p>
            <p>Second paragraph</p>
        </div>
    )
}

export default userOutput;