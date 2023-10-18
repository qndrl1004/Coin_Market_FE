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
    <button
      className={` md:cursor-pointer md:hover:underline w-[200px] ${darkMode ? "hover:text-[#efda7a]" : "hover:text-blue-400"
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
  )
}

export default LoginBtn