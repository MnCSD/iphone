"use client";

import moment from "moment";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [day, setDay] = useState("");
  const [date, setDate] = useState("");

  useEffect(() => {
    setDay(moment().format("dddd"));
    setDate(moment().format("MMMM DD"));
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white">
      <div className="h-[557px] w-[300px] rounded-[40px] border-[3px] border-[#B0B1B5] relative">
        <div className="w-full h-full border-black border-[7px] rounded-[38px] z-[999] top-0 left-0"></div>

        <div className="text-white text-[12px] font-semibold absolute top-4 left-10 z-[999]">
          vf-gr
        </div>
        <div className="absolute top-[16px] right-10 z-[999] flex items-center gap-x-1 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-3 h-3"
          >
            <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75ZM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 0 1-1.875-1.875V8.625ZM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 0 1 3 19.875v-6.75Z" />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-4 h-4"
          >
            <path
              fillRule="evenodd"
              d="M1.371 8.143c5.858-5.857 15.356-5.857 21.213 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.06 0c-4.98-4.979-13.053-4.979-18.032 0a.75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182c4.1-4.1 10.749-4.1 14.85 0a.75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.062 0 8.25 8.25 0 0 0-11.667 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.204 3.182a6 6 0 0 1 8.486 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0 3.75 3.75 0 0 0-5.304 0 .75.75 0 0 1-1.06 0l-.53-.53a.75.75 0 0 1 0-1.06Zm3.182 3.182a1.5 1.5 0 0 1 2.122 0 .75.75 0 0 1 0 1.061l-.53.53a.75.75 0 0 1-1.061 0l-.53-.53a.75.75 0 0 1 0-1.06Z"
              clipRule="evenodd"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="white"
            className="w-4 h-4"
          >
            <path d="M4.5 9.75a.75.75 0 0 0-.75.75V15c0 .414.336.75.75.75h6.75A.75.75 0 0 0 12 15v-4.5a.75.75 0 0 0-.75-.75H4.5Z" />
            <path
              fillRule="evenodd"
              d="M3.75 6.75a3 3 0 0 0-3 3v6a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3v-.037c.856-.174 1.5-.93 1.5-1.838v-2.25c0-.907-.644-1.664-1.5-1.837V9.75a3 3 0 0 0-3-3h-15Zm15 1.5a1.5 1.5 0 0 1 1.5 1.5v6a1.5 1.5 0 0 1-1.5 1.5h-15a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h15Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className="w-[42px] bg-white h-[2px] rounded-full absolute top-[35px] right-12 z-[999] bg-opacity-50"></div>
        <div className="absolute top-[55px] left-[50%] translate-x-[-50%] z-[999] flex flex-col items-center">
          <div className="w-[250px] mx-auto text-center h-[15px]">
            <span className="text-white text-[14px] font-semibold">
              {day}, {date}
            </span>
          </div>

          <div className="font-bold text-[62px] ">
            {moment().format("HH:mm")}
          </div>
        </div>

        <div className="absolute bottom-10 bg-gray-500 rounded-full w-9 h-9 z-[999] left-8 flex items-center justify-center">
          <svg
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            version="1.1"
            className="w-6 h-6"
          >
            <path
              fill="white"
              d="M634 64H390c-35.2 0-48 28.8-48 64h340c0-35.2-12.8-64-48-64zM392.2 295c15.2 17.6 23.8 40 23.8 63.4v531.8c0 43.8 35.8 69.8 79.8 69.8h32.6c43.8 0 79.8-25.8 79.8-69.8V358.4c0-23.4 8.6-45.6 23.8-63.4 30.8-35.8 50-69 50-135H342c0 70 19.2 99.2 50.2 135z m63.8 181.6c0-31.2 25.2-56.6 56-56.6s56 25.4 56 56.6v70.8c0 31.2-25.2 56.6-56 56.6s-56-25.4-56-56.6v-70.8z"
            />
            <path d="M512 546m-40 0a40 40 0 1 0 80 0 40 40 0 1 0-80 0Z" />
          </svg>
        </div>

        <div className="absolute bottom-10 bg-black rounded-full w-9 h-9 z-[999] right-8 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024"
            version="1.1"
            className="w-6 h-6"
          >
            <path
              fill="white"
              d="M512 550m-115 0a115 115 0 1 0 230 0 115 115 0 1 0-230 0Z"
            />
            <path
              fill="white"
              d="M835 320H726c-9.2 0-17.8-4-24-10.8-56.8-63.6-78.2-85.2-101.4-85.2h-171c-23.4 0-46.4 21.6-103.4 85.4-6 6.8-14.8 10.6-23.8 10.6h-8.2v-16c0-8.8-7.2-16-16-16h-52c-8.8 0-16 7.2-16 16v16h-15C159.8 320 128 346.4 128 381.4v352c0 35 31.8 66.6 67 66.6h640c35.2 0 61-31.6 61-66.6v-352c0-35-25.8-61.4-61-61.4zM520 720.8c-100.6 4.6-183.4-78.2-178.8-178.8 4-87.8 75-158.8 162.8-162.8 100.6-4.6 183.4 78.2 178.8 178.8-4 87.8-75 158.8-162.8 162.8zM704 436c-14.4 0-26-11.6-26-26s11.6-26 26-26 26 11.6 26 26-11.6 26-26 26z"
            />
          </svg>
        </div>

        <div className="w-[71%] text-center">
          <span className="absolute bottom-7  z-[999] text-white text-[10px] text-opacity-70 animate-bounce">
            Swipe up to open
          </span>
          <div className="absolute bottom-5 left-[50%] translate-x-[-50%] bg-white w-[100px] bg-opacity-80 h-[4px] rounded-full z-[999]"></div>
        </div>

        <div className="w-[80px] h-[25px] rounded-full bg-black absolute group top-3 left-[50%] translate-x-[-50%] z-[999] flex items-center hover:justify-start pr-2 duration-700 hover:h-[60px] hover:w-[250px] cursor-pointer">
          <div className="w-3 h-3 rounded-full bg-[#10122D] group-hover:hidden"></div>

          <div className="w-full group-hover:delay-300 relative group-hover:transition-all group-hover:visible invisible group-hover:pl-2 group-hover:flex group-hover:items-center justify-between">
            <div className="flex items-center gap-x-2">
              <img
                src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
                alt=""
                className="fade w-8 h-8 rounded-full"
              />

              <div className="fade -mt-[6px]">
                <span className="text-gray-500 text-[10px]">iPhone</span>
                <div className="text-white text-[12px] font-bold">John Doe</div>
              </div>
            </div>

            <div className="fade flex gap-x-2 ">
              <div className="h-[35px] w-[35px] bg-red-500 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-4 h-4 rotate-[135deg]"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <div className="h-[35px] w-[35px] bg-green-500 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="white"
                  className="w-4 h-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[280px] h-[537px] rounded-[40px] absolute top-[7px] left-[7px] z-[0]">
          <img
            src="https://www.iclarified.com/images/news/91483/438187/438187.jpg"
            alt=""
            className="w-full h-full rounded-[30px]"
          />
        </div>
        <div className="h-[60px] w-[1px] rounded-[10px] bg-[#B0B1B5] absolute top-[150px] -right-[4px] "></div>
        <div className="h-[25px] w-[1px] rounded-[10px] bg-[#B0B1B5] absolute top-[90px] -left-[4px]"></div>
        <div className="h-[40px] w-[1px] rounded-[10px] bg-[#B0B1B5] absolute top-[130px] -left-[4px]"></div>
        <div className="h-[40px] w-[1px] rounded-[10px] bg-[#B0B1B5] absolute top-[180px] -left-[4px]"></div>
      </div>
    </main>
  );
}
