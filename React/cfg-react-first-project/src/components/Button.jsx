// Import React and two special hooks: useState and useEffect (to manage state and side effects)
import React, { useState, useEffect, useRef } from 'react';

// Import the CSS file that styles this button (assumes you have a duneButton class in there)
import './Button.css';

// This is your functional component called "Button"
function Button() {
    // An array of quotes from Dune that we will cycle through
    const messages = [
        "The spice must flow",
        "Fear is the mind killer",
        "He who controls the spice, controls the universe",
        "For he is the Kwisatz Haderach",
        "The sleeper must awaken",
        "I must not fear",
        "Fear is the little death",
        "The spice extends life",
        "As you wish, my lord",
        "The mystery of life isn't a problem to solve, but a reality to experience",
        "For the first time in my life, I am not afraid",
        "The mind commands the body and it obeys",
        "I will not be a slave to my emotions",
    ];

    // React hook to store the current index of the message we're showing
    const [idx, setIdx] = useState(0);

    // React hook to store the actual message that will be displayed
    const [message, setMessage] = useState(messages[0]);

    // useRef is used to make sure the "Hello World!" message only logs once
    const hasRun = useRef(false);

    // This hook runs when the component first loads (like "componentDidMount")
    useEffect(() => {
        // If this code hasn't run before, log "Hello World!" once
        if (!hasRun.current) {
            console.log("Hello World!");
            hasRun.current = true; // Mark that we've already logged it
        }
    }, []); // Empty dependency array means this only runs on initial render

    // This function runs every time the button is clicked
    function handleClick() {
        // Calculate the next index (looping back to 0 at the end)
        const newIdx = (idx + 1) % messages.length;

        // Update the index state
        setIdx(newIdx);

        // Update the displayed message using the new index
        setMessage(messages[newIdx]);

        // Optional: Log the new message to the console for debugging
        console.log(messages[newIdx]);
    }

    // This is what gets displayed on the page (JSX return block)
    return (
        <>
            {/* The user will use this button to get a new quote */}
            <button className="duneButton" onClick={handleClick}>
                Click me for a Dune quote!
            </button>

            {/* This displays the current Dune message */}
            <p>{message}</p>
        </>
    );
}

// Export the Button component so it can be used in other parts of your app
export default Button;