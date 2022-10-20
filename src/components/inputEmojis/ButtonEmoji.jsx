
const EmojiButton = ({ emoji, onClick }) => {
    function handleOnClick() {
        onClick(emoji);
    }

    return (
        <button onClick={handleOnClick} className='emoji'>
            {emoji.symbol}
        </button>
    );
}

export default EmojiButton;