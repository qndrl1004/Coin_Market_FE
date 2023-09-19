export default function Footer() {
  return (
    <footer>
      <section className="w-screen">
        <div className="items-center justify-between text-white bg-black md:flex">
          <div className="flex items-end justify-center md:flex-col w-[300px]">
            <div className="w-[30%] md:w-[200px]">
              <img src="../public/footer.png" alt="" className="" />
            </div>
            <div className="mb-[20px] text-white">
              <span className="text-[5px] md:ml-[40px]text">
                © 2023 CoinView. All rights reserved
              </span>
            </div>
          </div>

          <div className="visible hidden md:block">
            <div className="inset-y-0 right-0 my-6 mr-20 border-4 rounded-xl border-[#efda7a] border-opacity-70 overflow-hidden	">
              <div className="flex justify-center mt-2">
                <h2 className="font-bold mb-[25px]">CoinView's Developers</h2>
              </div>

              <div className="flex justify-center">
                <ul className="mx-[30px] w-[75px]">
                  <li>
                    <a
                      href="https://github.com/qndrl1004"
                      className="cursor-pointer group"
                    >
                      <div className="overflow-hidden transition-opacity duration-500 border-2 rounded-lg group-hover:opacity-100 opacity-80">
                        <img
                          src="https://avatars.githubusercontent.com/u/82863770?v=4"
                          alt="정붕기 깃허브 프로필"
                          className="md:w-[100%]"
                        />
                      </div>
                      <div className="text-[8px] text-center mt-[10px] group-hover:text-[#efda7a]">
                        qndrl1004
                      </div>
                    </a>
                  </li>
                </ul>

                <ul className="mx-[30px] w-[75px]">
                  <li>
                    <a
                      href="https://github.com/Ju-jh"
                      className="cursor-pointer group"
                    >
                      <div className="overflow-hidden transition-opacity duration-500 border-2 rounded-lg group-hover:opacity-100 opacity-80">
                        <img
                          src="https://avatars.githubusercontent.com/u/121030294?v=4"
                          alt="주재훈 깃허브 프로필"
                          className="w-[100%]"
                        />
                      </div>
                      <div className="text-[8px] text-center mt-[10px] group-hover:text-[#efda7a]">
                        Ju-jh
                      </div>
                    </a>
                  </li>
                </ul>

                <ul className="mx-[30px] w-[75px]">
                  <li>
                    <a
                      href="https://github.com/LKW9"
                      className="cursor-pointer group"
                    >
                      <div className="overflow-hidden transition-opacity duration-500 border-2 rounded-lg group-hover:opacity-100 opacity-80">
                        <img
                          src="https://avatars.githubusercontent.com/u/92284361?v=4"
                          alt="이기웅 깃허브 프로필"
                          className="w-[100%]"
                        />
                      </div>
                      <div className="text-[8px] text-center mt-[10px] group-hover:text-[#efda7a]">
                        LKW9
                      </div>
                    </a>
                  </li>
                </ul>

                <ul className="mx-[30px] w-[75px] ">
                  <li>
                    <a
                      href="https://github.com/HanChangYun1"
                      className="cursor-pointer group"
                    >
                      <div className="overflow-hidden transition-opacity duration-500 border-2 rounded-lg group-hover:opacity-100 opacity-80">
                        <img
                          src="https://avatars.githubusercontent.com/u/120299736?v=4"
                          alt="한창윤 깃허브 프로필"
                          className="w-[100%]"
                        />
                      </div>
                      <div className="text-[8px] text-center mt-[10px] group-hover:text-[#efda7a]">
                        HanChangYun1
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}
