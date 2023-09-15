import {
  faFaceSmile
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function ChattingWidget() {
  
  return (
    <section className='flex flex-col my-[10%] mx-auto w-[90%] h-[500px] group border-2 border-solid rounded-lg border-gray-200'>
      {/* 채팅 */}
      <div className='h-[90%] bottom-0 overflow-scroll mb-[5%] '>
        {/* 채팅내용 */}
        <div className='flex  w-[100%] min-h-[50px] border-b-2 border-solid  border-gray-200'>
          <div className=' w-[90px] mx-[10px] mt-[20px]'>
            <img className='' src="../../src/assets/KakaoTalk_Photo_2023-09-11-15-47-34.png" alt="프로필 이미지" />
          </div>
          <div className='flex flex-col '>
            <div className='mt-[27px]'>
              <span>이름(닉네임)</span>
              <span className='ml-[10%]'>몇분 전</span>
            </div>
            <div className='my-[20px]'>
              <span>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus?</span>
            </div>
          </div>
        </div>
        {/* 채팅내용 */}
        <div className='flex  w-[100%] min-h-[50px] border-b-2 border-solid border-grey-200'>
          <div className=' w-[90px] mx-[10px] mt-[20px]'>
            <img className='' src="../../src/assets/KakaoTalk_Photo_2023-09-11-15-47-34.png" alt="프로필 이미지" />
          </div>
          <div className='flex flex-col '>
            <div className='mt-[27px]'>
              <span>이름(닉네임)</span>
              <span className='ml-[10%]'>몇분 전</span>
            </div>
            <div className='my-[20px]'>
              <span>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus?</span>
            </div>
          </div>
        </div>
        {/* 채팅내용 */}
        <div className='flex  w-[100%] min-h-[50px] border-b-2 border-solid border-grey-200'>
          <div className=' w-[90px] mx-[10px] mt-[20px]'>
            <img className='' src="../../src/assets/KakaoTalk_Photo_2023-09-11-15-47-34.png" alt="프로필 이미지" />
          </div>
          <div className='flex flex-col '>
            <div className='mt-[27px]'>
              <span>이름(닉네임)</span>
              <span className='ml-[10%]'>몇분 전</span>
            </div>
            <div className='my-[20px]'>
              <span>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus?</span>
            </div>
          </div>
        </div>
        {/* 채팅내용 */}
        <div className='flex  w-[100%] min-h-[50px] border-b-2 border-solid border-grey-200'>
          <div className=' w-[90px] mx-[10px] mt-[20px]'>
            <img className='' src="../../src/assets/KakaoTalk_Photo_2023-09-11-15-47-34.png" alt="프로필 이미지" />
          </div>
          <div className='flex flex-col '>
            <div className='mt-[27px]'>
              <span>이름(닉네임)</span>
              <span className='ml-[10%]'>몇분 전</span>
            </div>
            <div className='my-[20px]'>
              <span>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus?</span>
            </div>
          </div>
        </div>
        {/* 채팅내용 */}
        <div className='flex  w-[100%] min-h-[50px] border-b-2 border-solid border-grey-200'>
          <div className=' w-[90px] mx-[10px] mt-[20px]'>
            <img className='' src="../../src/assets/KakaoTalk_Photo_2023-09-11-15-47-34.png" alt="프로필 이미지" />
          </div>
          <div className='flex flex-col '>
            <div className='mt-[27px]'>
              <span>이름(닉네임)</span>
              <span className='ml-[10%]'>몇분 전</span>
            </div>
            <div className='my-[20px]'>
              <span>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus?</span>
            </div>
          </div>
        </div>
        {/* 채팅내용 */}
        <div className='flex  w-[100%] min-h-[50px] border-b-2 border-solid border-grey-200'>
          <div className=' w-[90px] mx-[10px] mt-[20px]'>
            <img className='' src="../../src/assets/KakaoTalk_Photo_2023-09-11-15-47-34.png" alt="프로필 이미지" />
          </div>
          <div className='flex flex-col '>
            <div className='mt-[27px]'>
              <span>이름(닉네임)</span>
              <span className='ml-[10%]'>몇분 전</span>
            </div>
            <div className='my-[20px]'>
              <span>Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus?</span>
            </div>
          </div>
        </div>
        
      </div>

      {/* 채팅입력창 */}
      <div className=' group cursor-pointer flex-1 flex items-center justify-center w-full -[100%] rounded-lg border-2 border-solid border-grey-200 transition-opacity duration-500 group-hover:border-blue-300 opacity-60 group-focus-within:border-blue-300'>
        <input placeholder='할 얘기가 있으신가요?' className=' mx-[2%] w-[85%] h-[90%] text-lg placeholder:text-slate-800 outline-none' type="text" />
        <div className=' flex-1 mx-[1%] h-[90%] rounded-md overflow-hidden'>
          <button className=' w-[100%] h-[100%] transition-opacity duration-500 group-hover:opacity-100 opacity-60 '><FontAwesomeIcon icon={faFaceSmile} bounce spinReverse style={{color: "#2a1f51",}} /></button>
        </div>
      </div>
    </section>
  );
}

