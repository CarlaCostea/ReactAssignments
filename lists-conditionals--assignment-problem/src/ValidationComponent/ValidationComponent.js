// Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph)
// Create a new component (=> ValidationComponent) which receives the text length as a prop
// Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)

import React from 'react'

const validationCompoment = (props) => {
    let validationMessage = 'Text long enough';

    if (props.inputLength <+ 8) {
        validationMessage = 'Text too short';
    }

    return (
        <div>
                <p>{validationMessage}</p>
        </div>
    )
}

// const validationCompoment = (props) => {
//     return (
//         <div>
//             {
//                 (props.inputLength > 8) ? <p>Text long enough</p> : <p>Text too short</p>
//             }
//         </div>
//     )
// }

export default validationCompoment;