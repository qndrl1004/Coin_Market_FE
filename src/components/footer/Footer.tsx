import footerImage from '../../../public/footer.png'

export default function Footer() {

  return (
    <footer className='overflow-x-hidden'>
      <section className='w-screen'>
        <div className='md:flex items-center justify-between bg-black text-white'>
          <div className='flex items-end md:items-center justify-center md:flex-col w-[300px]' >
            <div className='w-[30%] md:w-[200px]'>
              <img src={footerImage} alt='CoinView footer image' />
            </div>
            <div className='mb-[20px] text-white'>
              <span className='text-[5px] md:ml-[40px]text'>© 2023 CoinView. All rights reserved</span>
            </div>
          </div>

          <div className=' hidden md:block visible w-[800px]'>
            
            <div className='flex justify-center items-center inset-y-0 right-0 my-6 mr-20 border-4 rounded-xl border-[#efda7a] border-opacity-70 overflow-hidden	'>
              <div className='mx-auto'>
                <div className='my-[2px] text-center '>
                  <h2 className='font-bold'>GitHub</h2>
                  </div>
                  <ul className='flex-1 flex items-center justify-between w-[100%] p-[10px]'>
                    <li className='w-[100px]'>
                      <a href="https://github.com/FullStackWeavers" className='group cursor-pointer'>
                        <div className='border-2 rounded-lg overflow-hidden transition-opacity duration-500 group-hover:opacity-100 opacity-80'>
                          <img src="https://avatars.githubusercontent.com/u/144097591?s=200&v=4" alt="정붕기 깃허브 프로필" className='md:w-[100%]' />
                        </div>
                      </a>
                      <p className='text-[1px] text-center'>FullStackWeavers</p>
                    </li>
                  </ul>
                
              </div>

              <div className='mx-auto '>
                <div className='my-[2px] text-center'>
                  <h2 className='font-bold'>CoinView's Developers</h2>
                </div>

                <div className='flex flex-1'>
                  
                  <ul className='flex items-center justify-between w-[100%] p-[10px]'>
                    <li className='w-[100px]'>
                      <a href="https://github.com/qndrl1004" className='group cursor-pointer'>
                        <div className='border-2 rounded-lg overflow-hidden transition-opacity duration-500 group-hover:opacity-100 opacity-80'>
                          <img src="https://avatars.githubusercontent.com/u/82863770?v=4" alt="정붕기 깃허브 프로필" className='md:w-[100%]' />
                        </div>
                      </a>
                      <p className='text-[1px] text-center'>qndrl1004</p>
                    </li>
                    <li className='w-[100px] mx-[10px]'>
                      <a href="https://github.com/Ju-jh" className='group cursor-pointer'>
                        <div className='border-2 rounded-lg overflow-hidden transition-opacity duration-500 group-hover:opacity-100 opacity-80'>
                          <img src="https://avatars.githubusercontent.com/u/121030294?v=4" alt="주재훈 깃허브 프로필" className='md:w-[100%]' />
                        </div>
                      </a>
                      <p className='text-[1px] text-center'>Ju-jh</p>
                    </li>
                    <li className='w-[100px] mr-[10px]'>
                      <a href="https://github.com/LKW9" className='group cursor-pointer'>
                        <div className='border-2 rounded-lg overflow-hidden transition-opacity duration-500 group-hover:opacity-100 opacity-80'>
                          <img src="https://avatars.githubusercontent.com/u/92284361?v=4" alt="이기웅 깃허브 프로필" className='w-[100%]' />
                        </div>
                      </a>
                      <p className='text-[1px] text-center'>LKW9</p>
                    </li>
                    <li className='w-[100px]'>
                      <a href="https://github.com/HanChangYun1" className='group cursor-pointer'>
                        <div className=' border-2 rounded-lg overflow-hidden transition-opacity duration-500 group-hover:opacity-100 opacity-80 w-[100%] bg-green-500'>
                          <img src="https://avatars.githubusercontent.com/u/120299736?v=4" alt="한창윤 깃허브 프로필" className='w-[100%]' />
                        </div>
                      </a>
                      <p className='text-[1px] text-center'>HanChangYun1</p>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>

      </section>
    </footer>
  );
}
