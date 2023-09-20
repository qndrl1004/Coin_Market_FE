import React, { useState, useEffect } from "react";
import EmojiBtn from "../components/emojiBtn/EmojiBtn";

export default function ChattingWidget() {
  const [inputText, setInputText] = useState("");
  const [socket, setSocket] = useState<WebSocket | null>(null); // WebSocket 또는 null로 타입 설정

  useEffect(() => {
    // WebSocket 서버에 연결
    const newSocket = new WebSocket("ws://example.com"); // WebSocket 서버 주소로 변경하세요
    setSocket(newSocket);

    // 컴포넌트 언마운트 시 소켓 연결 해제
    return () => {
      newSocket.close();
    };
  }, []);

  const handleEmojiSelect = (emoji: string) => {
    setInputText((prevText) => prevText + emoji);
  };

  const sendMessage = () => {
    if (inputText.trim() !== "" && socket) {
      // WebSocket을 통해 메시지 전송
      socket.send(inputText);

      // 메시지 전송 후 입력 필드 초기화
      setInputText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      sendMessage();

      // 엔터 키를 누를 때 입력 필드 초기화
      setInputText("");
    }
  };

  return (
    <section className="relative flex flex-col my-[0] mx-auto w-[100%] h-[800px] group border-1 border-solid border-slate-300 rounded-lg shadow-md	shadow-slate-500 z-0">
      {/* 채팅 */}
      <div className=" bg-slate-60 h-[90%] bottom-0 overflow-scroll mb-[5%] ">
        {/* 채팅내용 */}
        <div className=" flex items-start w-[100%] min-h-[50px] border-b-2 border-solid  border-slate-300">
          <div className="shadow-sm	shadow-slate-500 border-2  rounded-lg overflow-hidden w-[50px] h-[50px] mx-[10px] mt-[20px]">
            <img
              className="w-full"
              src="/profileImage.png"
              alt="profileImage"
            />
          </div>
          <div className="flex flex-col flex-1 ">
            <div className="mt-[27px]">
              <span>이름(닉네임)</span>
              <span className="ml-[10%]">몇분 전</span>
            </div>
            <div className="my-[20px]">
              <span>Lorem ipsum dolor sit amet. Necessitatibus?</span>
            </div>
          </div>
        </div>
        {/* 채팅내용 */}
        <div className=" flex items-start w-[100%] min-h-[50px] border-b-2 border-solid  border-slate-300">
          <div className="shadow-sm	shadow-slate-500 border-2  rounded-lg overflow-hidden w-[50px] h-[50px] mx-[10px] mt-[20px]">
            <img className="w-full" src="/고양이.jpeg" alt="고양이" />
          </div>
          <div className="flex flex-col flex-1 ">
            <div className="mt-[27px]">
              <span>이름(닉네임)</span>
              <span className="ml-[10%]">몇분 전</span>
            </div>
            <div className="my-[20px]">
              <span>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Necessitatibus?
              </span>
            </div>
          </div>
        </div>
        {/* 채팅내용 */}
        <div className=" flex items-start w-[100%] min-h-[50px] border-b-2 border-solid  border-slate-300">
          <div className="shadow-sm	shadow-slate-500 border-2  rounded-lg overflow-hidden w-[50px] h-[50px] mx-[10px] mt-[20px]">
            <img className="w-full h-full" src="/고윤정1.webp" alt="고윤정1" />
          </div>
          <div className="flex flex-col flex-1 ">
            <div className="mt-[27px]">
              <span>이름(닉네임)</span>
              <span className="ml-[10%]">몇분 전</span>
            </div>
            <div className="my-[20px]">
              <span>Necessitatibus?</span>
            </div>
          </div>
        </div>
        {/* 채팅내용 */}
        <div className=" flex items-start w-[100%] min-h-[50px] border-b-2 border-solid  border-slate-300">
          <div className="shadow-sm	shadow-slate-500 border-2  rounded-lg overflow-hidden w-[50px] h-[50px] mx-[10px] mt-[20px]">
            <img className="w-full h-full" src="/고윤정2.jpeg" alt="고윤정2" />
          </div>
          <div className="flex flex-col flex-1 ">
            <div className="mt-[27px]">
              <span>이름(닉네임)</span>
              <span className="ml-[10%]">몇분 전</span>
            </div>
            <div className="my-[20px]">
              <span>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Necessitatibus?
              </span>
            </div>
          </div>
        </div>
        {/* 채팅내용 */}
        <div className=" flex items-start w-[100%] min-h-[50px] border-b-2 border-solid  border-slate-300">
          <div className="shadow-sm	shadow-slate-500 border-2  rounded-lg overflow-hidden w-[50px] h-[50px] mx-[10px] mt-[20px]">
            <img className="w-full h-full" src="/로파이.png" alt="로파이" />
          </div>
          <div className="flex flex-col flex-1 ">
            <div className="mt-[27px]">
              <span>이름(닉네임)</span>
              <span className="ml-[10%]">몇분 전</span>
            </div>
            <div className="my-[20px]">
              <span>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Necessitatibus?
              </span>
            </div>
          </div>
        </div>
        {/* 채팅내용 */}
        <div className=" flex items-start w-[100%] min-h-[50px] border-b-2 border-solid  border-slate-300">
          <div className="shadow-sm	shadow-slate-500 border-2  rounded-lg overflow-hidden w-[50px] h-[50px] mx-[10px] mt-[20px]">
            <img
              className="w-full"
              src="/profileImage.png"
              alt="profileImage"
            />
          </div>
          <div className="flex flex-col flex-1 ">
            <div className="mt-[27px]">
              <span>이름(닉네임)</span>
              <span className="ml-[10%]">몇분 전</span>
            </div>
            <div className="my-[20px]">
              <span>adipisicing elit. Necessitatibus?</span>
            </div>
          </div>
        </div>
        {/* 채팅내용 */}
        <div className=" flex items-start w-[100%] min-h-[50px] border-b-2 border-solid  border-slate-300">
          <div className="shadow-sm	shadow-slate-500 border-2  rounded-lg overflow-hidden w-[50px] h-[50px] mx-[10px] mt-[20px]">
            <img
              className="w-full"
              src="/profileImage.png"
              alt="profileImage"
            />
          </div>
          <div className="flex flex-col flex-1 ">
            <div className="mt-[27px]">
              <span>이름(닉네임)</span>
              <span className="ml-[10%]">몇분 전</span>
            </div>
            <div className="my-[20px]">
              <span>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                consectetur adipisicing Lorem ipsum dolor sit amet. Lorem ipsum
                dolor sit amet consectetur adipisicing elit. Necessitatibus?
              </span>
            </div>
          </div>
        </div>
        {/* 채팅내용 */}
        <div className=" flex items-start w-[100%] min-h-[50px] border-b-2 border-solid  border-slate-300">
          <div className="shadow-sm	shadow-slate-500 border-2  rounded-lg overflow-hidden w-[50px] h-[50px] mx-[10px] mt-[20px]">
            <img
              className="w-full"
              src="/profileImage.png"
              alt="profileImage"
            />
          </div>
          <div className="flex flex-col flex-1 ">
            <div className="mt-[27px]">
              <span>이름(닉네임)</span>
              <span className="ml-[10%]">몇분 전</span>
            </div>
            <div className="my-[20px]">
              <span>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Necessitatibus?
              </span>
            </div>
          </div>
        </div>
        {/* 채팅내용 */}
        <div className=" flex items-start w-[100%] min-h-[50px] border-b-2 border-solid  border-slate-300">
          <div className="shadow-sm	shadow-slate-500 border-2  rounded-lg overflow-hidden w-[50px] h-[50px] mx-[10px] mt-[20px]">
            <img className="w-full" src="profileImage.png" alt="profileImage" />
          </div>
          <div className="flex flex-col flex-1 ">
            <div className="mt-[27px]">
              <span>이름(닉네임)</span>
              <span className="ml-[10%]">몇분 전</span>
            </div>
            <div className="my-[20px]">
              <span>
                Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Necessitatibus?
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 채팅입력창 */}
      <div className="absolute bottom-0 h-[60px] group cursor-pointer flex-1 flex items-center justify-center w-full rounded-lg border-2 border-solid border-grey-200 transition-opacity duration-500 group-hover:border-blue-300 group-focus-within:border-blue-300 opacity-100">
        <input
          placeholder="할 얘기가 있으신가요?"
          className=" mx-[2%] w-[85%] h-[90%] text-lg placeholder:text-slate-800 outline-none"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div className="z-410 flex-1 mx-[1%] h-[90%]">
          <EmojiBtn onEmojiSelect={handleEmojiSelect} />
        </div>
      </div>
    </section>
  );
}
