// Create TWO new components: UserInput and UserOutput</li>
// UserInput should hold an input element, UserOutput two paragraphs</li>
// Output multiple UserOutput components in the App component (any paragraph texts of your choice)</li>
// Pass a username (of your choice) to UserOutput via props and display it there</li>

import React from 'react'

const userOutput = () => {
    return (
        <div>
            <p>First paragraph</p>
            <p>Second paragraph</p>
        </div>
    )
}

export default userOutput;