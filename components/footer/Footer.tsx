import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="w-full dark:bg-neutral-900 bg-neutral-100 border-t dark:border-t-neutral-700 py-8 text-neutral-600">
      <div className="container mx-auto py-8 flex flex-wrap items-start gap-8 border-b dark:border-b-neutral-700 justify-center">
        <div className="text-2xl space-y-2 w-[300px]">
          <div>
            <div className="flex items-center gap-1 px-1 ">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth={2}
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5 mb-1 "
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <desc />
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1={3} y1={12} x2={6} y2={12} />
                <line x1={12} y1={3} x2={12} y2={6} />
                <line x1="7.8" y1="7.8" x2="5.6" y2="5.6" />
                <line x1="16.2" y1="7.8" x2="18.4" y2="5.6" />
                <line x1="7.8" y1="16.2" x2="5.6" y2="18.4" />
                <path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
              </svg>
              <p className=" font-black bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
                OTTOMOVIES
              </p>
            </div>
            <div className="px-7 text-xs">
              <p>Be your own critic.</p>
            </div>
          </div>
          <div className="px-7">
            <ul className="flex gap-2 items-center text-lg ">
              <li>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"
                  />
                </svg>
              </li>
              <li>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z" />
                </svg>
              </li>
              <li>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth={0}
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z" />
                  <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z" />
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-grow 2xl:w-auto xl:w-auto lg:w-auto md:w-auto w-full grid grid-cols-2 gap-8 md:grid-cols-4">
          <div className="flex justify-center">
            <div>
              <h4 className="font-medium dark:text-neutral-400">Website</h4>
              <ul className="text-sm space-y-2 mt-2 dark:text-neutral-500 text-neutral-500 font-medium ">
                <li className="dark:hover:text-neutral-300 hover:text-neutral-900 ">
                  <a href="/">Home</a>
                </li>
                <li className="dark:hover:text-neutral-300 hover:text-neutral-900 ">
                  <a href="/auth/login">Login</a>
                </li>
                <li className="dark:hover:text-neutral-300 hover:text-neutral-900 ">
                  <a href="/auth/register">Register</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h4 className="font-medium dark:text-neutral-400">Quick Links</h4>
              <ul className="text-sm space-y-2 mt-2 dark:text-neutral-500 text-neutral-500 font-medium ">
                <li className="dark:hover:text-neutral-300 hover:text-neutral-900 ">
                  <Link href="/movies/1">Movies</Link>
                </li>
                <li className="dark:hover:text-neutral-300 hover:text-neutral-900 ">
                  <Link href="/tvshows/1">TV Shows</Link>
                </li>
                <li className="dark:hover:text-neutral-300 hover:text-neutral-900 ">
                  <Link href="/movies/1">Popular Movies</Link>
                </li>
                <li className="dark:hover:text-neutral-300 hover:text-neutral-900 ">
                  <Link href="/topimdb/1">Top Rated</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h4 className="font-medium dark:text-neutral-400">Company</h4>
              <ul className="text-sm space-y-2 mt-2 dark:text-neutral-500 text-neutral-500 font-medium ">
                <li className="dark:hover:text-neutral-300 hover:text-neutral-900 ">
                  <Link href="/privacy">Privacy</Link>
                </li>
                <li className="dark:hover:text-neutral-300 hover:text-neutral-900 ">
                  <Link href="/terms">Terms</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center">
            <div>
              <h4 className="text-sm dark:text-neutral-400 font-medium">
                Data provided by
              </h4>
              <div>
                <a href="https://www.themoviedb.org/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 190.24 81.52"
                    width="110.24"
                    height="81.52"
                  >
                    <defs>
                      <style
                        dangerouslySetInnerHTML={{
                          __html: ".cls-1{fill:url(#linear-gradient);}",
                        }}
                      />
                      <linearGradient
                        id="linear-gradient"
                        y1="40.76"
                        x2="190.24"
                        y2="40.76"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset={0} stopColor="#90cea1" />
                        <stop offset="0.56" stopColor="#3cbec9" />
                        <stop offset={1} stopColor="#00b3e5" />
                      </linearGradient>
                    </defs>
                    <title>Asset 2</title>
                    <g id="Layer_2" data-name="Layer 2">
                      <g id="Layer_1-2" data-name="Layer 1">
                        <path
                          className="cls-1"
                          d="M105.67,36.06h66.9A17.67,17.67,0,0,0,190.24,18.4h0A17.67,17.67,0,0,0,172.57.73h-66.9A17.67,17.67,0,0,0,88,18.4h0A17.67,17.67,0,0,0,105.67,36.06Zm-88,45h76.9A17.67,17.67,0,0,0,112.24,63.4h0A17.67,17.67,0,0,0,94.57,45.73H17.67A17.67,17.67,0,0,0,0,63.4H0A17.67,17.67,0,0,0,17.67,81.06ZM10.41,35.42h7.8V6.92h10.1V0H.31v6.9h10.1Zm28.1,0h7.8V8.25h.1l9,27.15h6l9.3-27.15h.1V35.4h7.8V0H66.76l-8.2,23.1h-.1L50.31,0H38.51ZM152.43,55.67a15.07,15.07,0,0,0-4.52-5.52,18.57,18.57,0,0,0-6.68-3.08,33.54,33.54,0,0,0-8.07-1h-11.7v35.4h12.75a24.58,24.58,0,0,0,7.55-1.15A19.34,19.34,0,0,0,148.11,77a16.27,16.27,0,0,0,4.37-5.5,16.91,16.91,0,0,0,1.63-7.58A18.5,18.5,0,0,0,152.43,55.67ZM145,68.6A8.8,8.8,0,0,1,142.36,72a10.7,10.7,0,0,1-4,1.82,21.57,21.57,0,0,1-5,.55h-4.05v-21h4.6a17,17,0,0,1,4.67.63,11.66,11.66,0,0,1,3.88,1.87A9.14,9.14,0,0,1,145,59a9.87,9.87,0,0,1,1,4.52A11.89,11.89,0,0,1,145,68.6Zm44.63-.13a8,8,0,0,0-1.58-2.62A8.38,8.38,0,0,0,185.63,64a10.31,10.31,0,0,0-3.17-1v-.1a9.22,9.22,0,0,0,4.42-2.82,7.43,7.43,0,0,0,1.68-5,8.42,8.42,0,0,0-1.15-4.65,8.09,8.09,0,0,0-3-2.72,12.56,12.56,0,0,0-4.18-1.3,32.84,32.84,0,0,0-4.62-.33h-13.2v35.4h14.5a22.41,22.41,0,0,0,4.72-.5,13.53,13.53,0,0,0,4.28-1.65,9.42,9.42,0,0,0,3.1-3,8.52,8.52,0,0,0,1.2-4.68A9.39,9.39,0,0,0,189.66,68.47ZM170.21,52.72h5.3a10,10,0,0,1,1.85.18,6.18,6.18,0,0,1,1.7.57,3.39,3.39,0,0,1,1.22,1.13,3.22,3.22,0,0,1,.48,1.82,3.63,3.63,0,0,1-.43,1.8,3.4,3.4,0,0,1-1.12,1.2,4.92,4.92,0,0,1-1.58.65,7.51,7.51,0,0,1-1.77.2h-5.65Zm11.72,20a3.9,3.9,0,0,1-1.22,1.3,4.64,4.64,0,0,1-1.68.7,8.18,8.18,0,0,1-1.82.2h-7v-8h5.9a15.35,15.35,0,0,1,2,.15,8.47,8.47,0,0,1,2.05.55,4,4,0,0,1,1.57,1.18,3.11,3.11,0,0,1,.63,2A3.71,3.71,0,0,1,181.93,72.72Z"
                        />
                      </g>
                    </g>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto my-4 text-sm dark:text-neutral-400 font-medium flex justify-between">
        <p className="px-4">© OTTOMOVIES — 2022.</p>
        <button className="px-2 py-1 rounded mr-2 dark:bg-neutral-800 bg-neutral-100 dark:text-white text-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-800/50 transition-colors 2xl:block xl:block lg:block md:block hidden">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth={0}
            viewBox="0 0 512 512"
            className="w-[1.15rem] h-[1.15rem]"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="none"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth={32}
              d="M256 48v48m0 320v48m147.08-355.08l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48m-320 0H48m355.08 147.08l-33.94-33.94M142.86 142.86l-33.94-33.94"
            />
            <circle
              cx={256}
              cy={256}
              r={80}
              fill="none"
              strokeLinecap="round"
              strokeMiterlimit={10}
              strokeWidth={32}
            />
          </svg>
        </button>
      </div>
    </footer>
  );
}

export default Footer;
