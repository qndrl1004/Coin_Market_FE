import { faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDarkMode } from '../../context/Dark-mode';

interface LoginBtnProps{
  openLoginModal: () => void
}

const LoginBtn:React.FC<LoginBtnProps> = ({openLoginModal}) => {

  const darkMode = useDarkMode()

  const openLoginBtn = () => {
    openLoginModal()
  }

  return (
    <div className='w-full py-[10px] px-[20px]'>
      <button
        className={`shadow-sm shadow-slate-400 bg-slate-300 rounded-md md:cursor-pointer md:hover:underline w-full h-full ${darkMode ? "hover:bg-slate-400" : ""
          }`}
          onClick={openLoginBtn}
      >
        <FontAwesomeIcon
          icon={faKey}
          style={{
            paddingRight: "7px",
          }}
        />
        로그인
      </button>
    </div>
  )
}

export default LoginBtn