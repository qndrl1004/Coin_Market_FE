
interface IsKeyProps {
  setIsKeyInDB: React.Dispatch<React.SetStateAction<boolean>>;
}

const IsKey: React.FC<IsKeyProps> = ({setIsKeyInDB}) => {
  
  const clickBtn = () => {
    setIsKeyInDB(false)
  }
  
  return (
    <div className='w-full h-full hidden md:flex flex-col items-end'>
      <button
        className='bg-blue-500 hover:bg-blue-300 shadow-md shadow-white w-[160px] h-[30px] mt-[20px] mr-[10px] rounded-md'
        onClick={clickBtn}
      >API KEY 수정하기</button>
    </div>
    
  )
}

export default IsKey