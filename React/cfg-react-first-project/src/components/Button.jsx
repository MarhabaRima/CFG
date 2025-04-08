import './Button.css'

function Button({firstWord, secondWord}) {
    const messages = [
        "The spice must flow",
        "Fear is the mind killer",
        "He who controls the spice, controls the universe",
        "For he is the Kwisatz Haderach",
    ];

    function handleClick() {
        const randomHouseChant = messages[Math.floor(Math.random() * messages.length)];
        console.log(randomHouseChant);
    };

    return (
        <>
            <button className="duneButton" 
            onClick={handleClick}>
                {firstWord} {secondWord}
                </button>
        </>
    )
}

export default Button;