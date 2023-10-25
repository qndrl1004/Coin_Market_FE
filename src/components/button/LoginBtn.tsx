import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
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
        className={`rounded-md px-[40px] md:cursor-pointer md:hover:underline w-full h-full ${darkMode ? "hover:bg-slate-600 hover:text-white" : ""
          }`}
          onClick={openLoginBtn}
      >
        <FontAwesomeIcon
          icon={faRightToBracket}
          style={{
            paddingRight: "7px",
            fontSize:"20px"
          }}
        />
      </button>
    </div>
  )
}

export default LoginBtn