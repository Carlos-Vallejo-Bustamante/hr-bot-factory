import './InputChat.css';
import { useRef } from "react";
import EmojiPicker from "../inputEmojis/PickerEmoji";

const InputChat = () => {

    const inputRef = useRef(null);

    return (
        <>
            <div className="inputChat">
                <div>
                    <label>
                        <i className="fa-solid fa-camera icon"></i>
                        <input type="file" hidden />
                    </label>
                    <input ref={inputRef} placeholder="Send message..." />
                </div>
                <div>
                    <label>
                        <i className="fa-solid fa-microphone icon"></i>
                        <input type="file" hidden />
                    </label>
                    <label>
                        <i className="fa-regular fa-image icon"></i>
                        <input type="file" hidden />
                    </label>
                    <label>
                        <EmojiPicker ref={inputRef} />
                    </label>
                </div>
            </div>
        </>

    )
}

export default InputChat;