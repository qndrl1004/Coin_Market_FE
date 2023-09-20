import { useDarkMode } from "../../context/Dark-mode";

export default function Footer() {
  const { darkMode } = useDarkMode();

  return (
    <footer className="overflow-x-hidden">
      <div className="border-t-4 border-black md:border-t-4 md:border-black">
        <section className="w-screen">
          <div
            className={`md:flex items-center justify-between ${
              darkMode ? "text-white bg-[#22243b]" : "text-black bg-white"
            }`}
          >
            <div className="flex items-end md:items-center justify-center md:flex-col w-[300px] ">
              <div className="w-[30%] md:w-[200px]">
                <img
                  src={`${darkMode ? "/footer-dark.png" : "/footer.png"}`}
                  alt={`${darkMode ? "Footer-dark" : "Footer"}`}
                />
              </div>
              <div
                className={`${
                  darkMode ? "mb-[20px] text-white" : "mb-[20px] text-black"
                }`}
              >
                <span className="text-[5px] md:ml-[40px]text">
                  © 2023 CoinView. All rights reserved
                </span>
              </div>
            </div>

            <div className=" hidden md:block visible w-[800px]">
              <div className="inset-y-0 right-0 flex items-center justify-center my-6 mr-20 overflow-hidden border-white shadow-lg border-1 rounded-xl border-opacity-70 shadow-white">
                <div className="mx-auto">
                  <div className="my-[2px] text-center ">
                    <h2 className="font-bold">GitHub</h2>
                  </div>
                  <ul className="flex-1 flex items-center justify-between w-[100%] p-[10px]">
                    <li className="w-[100px]">
                      <a
                        href="https://github.com/FullStackWeavers"
                        className="cursor-pointer group"
                      >
                        <div className="overflow-hidden transition-opacity duration-500 border-2 rounded-lg group-hover:opacity-100 opacity-80">
                          <img
                            src="https://avatars.githubusercontent.com/u/144097591?s=200&v=4"
                            alt="정붕기 깃허브 프로필"
                            className="md:w-[100%]"
                          />
                        </div>
                      </a>
                      <p className="text-[1px] text-center">FullStackWeavers</p>
                    </li>
                  </ul>
                </div>

                <div className="mx-auto ">
                  <div className="my-[2px] text-center">
                    <h2 className="font-bold">CoinView's Developers</h2>
                  </div>

                  <div className="flex flex-1">
                    <ul className="flex items-center justify-between w-[100%] p-[10px]">
                      <li className="w-[100px]">
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
                        </a>
                        <p className="text-[1px] text-center">qndrl1004</p>
                      </li>
                      <li className="w-[100px] mx-[10px]">
                        <a
                          href="https://github.com/Ju-jh"
                          className="cursor-pointer group"
                        >
                          <div className="overflow-hidden transition-opacity duration-500 border-2 rounded-lg group-hover:opacity-100 opacity-80">
                            <img
                              src="https://avatars.githubusercontent.com/u/121030294?v=4"
                              alt="주재훈 깃허브 프로필"
                              className="md:w-[100%]"
                            />
                          </div>
                        </a>
                        <p className="text-[1px] text-center">Ju-jh</p>
                      </li>
                      <li className="w-[100px] mr-[10px]">
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
                        </a>
                        <p className="text-[1px] text-center">LKW9</p>
                      </li>
                      <li className="w-[100px]">
                        <a
                          href="https://github.com/HanChangYun1"
                          className="cursor-pointer group"
                        >
                          <div className=" border-2 rounded-lg overflow-hidden transition-opacity duration-500 group-hover:opacity-100 opacity-80 w-[100%] bg-green-500">
                            <img
                              src="https://avatars.githubusercontent.com/u/120299736?v=4"
                              alt="한창윤 깃허브 프로필"
                              className="w-[100%]"
                            />
                          </div>
                        </a>
                        <p className="text-[1px] text-center">HanChangYun1</p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
