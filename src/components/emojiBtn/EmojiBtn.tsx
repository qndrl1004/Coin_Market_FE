import { faFaceSmile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

interface EmojiBtnProps {
  onEmojiSelect: (emoji: string) => void;
}

export default function EmojiBtn({ onEmojiSelect }: EmojiBtnProps) {
  const emojiList = [
    '😀', '😂', '😃', '😄', '😅', '😆', '😉', '😊', '😋', '😎', '😍', '😘', '😗',
    '😙', '😚', '🙂', '🙃', '🤑', '🤓', '😛', '😜', '😝'
  ];

  const [isOpen, setIsOpen] = useState(false);

  const toggleSelector = () => {
    setIsOpen(!isOpen);
  };

  const handleEmojiSelect = (emoji: string) => {
    onEmojiSelect(emoji);
  };

  return (
    <div className="emoji-container h-[100%] flex justify-center items-center border-2 rounded-lg w-[100%] hover:bg-[#efda7a]">
      {isOpen && (
        <div className="absolute emoji-selector z-400 flex flex-wrap mb-[220px] mr-[114px] w-[150px] h-[150px] p-[3px] border-2 shadow-lg shadow-slate-400 rounded-lg bg-white opacity-100">
          {emojiList.map((emoji, index) => (
            <div
              key={index}
              className="emoji-item m-[4px] w-[20px] h-[20px] flex justify-center items-center rounded-lg shadow-md shadow-slate-400"
              onClick={() => handleEmojiSelect(emoji)}
            >
              {emoji}
            </div>
          ))}
        </div>
      )}
      <button className="emoji-button relative w-[100%] h-[100%]" onClick={toggleSelector}>
        <FontAwesomeIcon icon={faFaceSmile} className='text-lg text-black' />
      </button>
    </div>
  )
}