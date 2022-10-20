import { forwardRef, useEffect, useRef, useState } from "react";
import emojiList from "../../data/emojis.json";
import EmojiButton from "../inputEmojis/ButtonEmoji";
import EmojiSearch from "../inputEmojis/SearchEmoji";
import EmojiList from "../inputEmojis/ListEmoji";

import './PickerEmoji.css';

export default forwardRef((props, inputRef) => {
    const [isOpen, setIsOpen] = useState(false);
    const [emojis, setEmojis] = useState([...emojiList]);

    const containerRef = useRef(null);

    useEffect(() => {
        window.addEventListener("click", (e) => {
            if (!containerRef.current.contains(e.target)) {
                setIsOpen(false);
                setEmojis([...emojiList]);
            }
        });
    }, []);

    function handleClick() {
        setIsOpen(!isOpen);
    }

    function handleEmojiClick(emoji) {
        const cursorPos = inputRef.current.selectionStart;
        const text = inputRef.current.value;
        const prev = text.slice(0, cursorPos);
        const next = text.slice(cursorPos);

        inputRef.current.value = prev + emoji.symbol + next;
        inputRef.current.selectionStart = cursorPos + emoji.symbol.length;
        inputRef.current.selectionEnd = cursorPos + emoji.symbol.length;
        inputRef.current.focus();
    }

    function handleSearch(e) {
        const q = e.target.value;

        if (!!q) {
            const search = emojiList.filter((emoji) => {
                return (
                    emoji.name.toLowerCase().includes(q) ||
                    emoji.keywords.toLowerCase().includes(q)
                );
            });

            setEmojis([...search]);
        } else {
            setEmojis([...emojiList]);
        }
    }

    return (
        <div className="search" ref={containerRef}>
            <button className='emojiButton' onClick={handleClick}>
                <i className="fa-regular fa-face-smile icon"></i>
            </button>
            {isOpen ? (
                <div className='emojis'>
                    <EmojiSearch onSearch={handleSearch} />
                    <EmojiList>
                        {emojis.map((emoji) => (
                            <EmojiButton
                                key={emoji.symbol}
                                emoji={emoji}
                                onClick={handleEmojiClick}
                            />
                        ))}
                    </EmojiList>
                </div>
            ) : (
                null
            )}
        </div>
    );
});
