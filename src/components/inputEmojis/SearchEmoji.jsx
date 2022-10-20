import './PickerEmoji.css';

const EmojiSearch = ({ onSearch }) => {
    return <input className='search' onChange={onSearch} placeholder="search your emoji..." />;
}

export default EmojiSearch;
