import './Chat.css';
import data from '../../data/data.json';

const Chat = () => {
    const sender = "sender";
    const receiver = "receiver";
    const right = "right";
    const left = "left";
    const big = "big";
    const small = "small";

    return (
        <>
            {
                data.map(messege =>
                    <div className={messege.sender ? right : left} key={messege.id}>
                        {
                            messege.sender ?
                                <>
                                    <p className={messege.sender ? sender : receiver}>{messege.messege}</p><img className={messege.sender ? big : small} src="avatar.png" alt="logo" />
                                </>
                                :
                                <>
                                    <img className={messege.sender ? big : small} src="avatar.png" alt="logo" /> <p className={messege.sender ? sender : receiver}>{messege.messege}</p>
                                </>
                        }
                    </div>
                )
            }
        </>
    );
}

export default Chat;
