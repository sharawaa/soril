// export default function ColorSection() {
//   const rewards = useMemo(
//     () => [
//       {
//         icon: "./icons/medal.png",
//         word: " 여성의류 쇼핑몰",
//         wIcon: "./icons/won.png",
//         money: " 50.000.000",
//         usIcon: "./icons/user.png",
//         w: "김**",
//       },
//       {
//         icon: "./icons/medal2.png",
//         word: " 여성의류 쇼핑몰",
//         wIcon: "./icons/won.png",
//         money: "3.250.000",
//         usIcon: "./icons/user.png",
//         w: "김**",
//       },
//       {
//         icon: "./icons/medal3.png",
//         word: " 밀알복지재단 30주년 ..",
//         wIcon: "./icons/won.png",
//         money: " 2,715,000",
//         usIcon: "./icons/user.png",
//         w: "김**",
//       },
//       {
//         icon: "./icons/4.png",
//         word: " 탱그램 라이팅 이더",
//         wIcon: "./icons/won.png",
//         money: " 2,715,000",
//         usIcon: "./icons/user.png",
//         w: "김**",
//       },
//       {
//         icon: "./icons/5.png",
//         word: "한화 사이언스 챌린지",
//         wIcon: "./icons/won.png",
//         money: "3,580,000",
//         usIcon: "./icons/user.png",
//         w: "김**",
//       },
//     ],
//     []
//   );
//   return (
//     <div className="flex relative justify-between items-center h-[420px] w-[1170px]">
//       <div className="">
//         <div className="text-[38px] text-white">복잡한 퍼블리싱 이젠</div>
//         <div className="text-[42px] text-white">전문가에게 맡기세요!</div>
//       </div>
//       <div className="flex-none absolute mt-[76px] ml-[245px]">
//         <img className="absolut" src="./image/table.png" alt="l" />
//         <img
//           className="absolute -mt-[350px] ml-[30px]"
//           src="./image/buble.png"
//           alt=""
//         />
//       </div>

//       {rewards.map((reward, index) => {
//         console.log(reward.word);
//         <div
//           key={index}
//           className="w-[409px] mt-[5px] h-[53px] bg-white rounded-xl p-[14px] flex justify-between"
//         >
//           <div className="flex">
//             <img className="mr-[5px]" src={reward.icon} alt="" />
//             <div>.l,;m{reward.word}</div>
//           </div>
//           <div className="flex bg-red-200 w-[205px] justify-between">
//             <div className="flex w-[110px]  justify-between">
//               <img src={reward.wIcon} alt="" />
//               <div>{reward.money}</div>
//             </div>
//             <div className="flex">
//               <img className="mx-2" src={reward.usIcon} alt="" />
//               <div>{reward.w}</div>
//             </div>
//           </div>
//         </div>;
//       })}
//     </div>
//   );
// }

import React, { useMemo } from "react";

export default function ColorSection() {
  const rewards = useMemo(
    () => [
      {
        icon: "./icons/medal.png",
        word: " 여성의류 쇼핑몰",
        wIcon: "./icons/won.png",
        money: " 50.000.000",
        usIcon: "./icons/user.png",
        w: "김**",
      },
      {
        icon: "./icons/medal2.png",
        word: " 여성의류 쇼핑몰",
        wIcon: "./icons/won.png",
        money: "3.250.000",
        usIcon: "./icons/user.png",
        w: "김**",
      },
      {
        icon: "./icons/medal3.png",
        word: " 밀알복지재단 30주년 ..",
        wIcon: "./icons/won.png",
        money: " 2,715,000",
        usIcon: "./icons/user.png",
        w: "김**",
      },
      {
        icon: "./icons/4.png",
        word: " 탱그램 라이팅 이더",
        wIcon: "./icons/won.png",
        money: " 2,715,000",
        usIcon: "./icons/user.png",
        w: "김**",
      },
      {
        icon: "./icons/5.png",
        word: "한화 사이언스 챌린지",
        wIcon: "./icons/won.png",
        money: "3,580,000",
        usIcon: "./icons/user.png",
        w: "김**",
      },
    ],
    []
  );

  return (
    <div className="flex relative justify-between items-center h-[420px] w-[1170px]">
      <div className="">
        <div className="text-[38px] text-white">복잡한 퍼블리싱 이젠</div>
        <div className="text-[42px] text-white">전문가에게 맡기세요!</div>
      </div>
      <div className="flex-none absolute mt-[76px] ml-[245px]">
        <img className="absolut" src="./image/table.png" alt="l" />
        <img
          className="absolute -mt-[350px] ml-[30px]"
          src="./image/buble.png"
          alt=""
        />
      </div>
      <div className="">
        {rewards.map((reward, index) => (
          <div
            key={index}
            className="w-[409px] mt-[5px] h-[53px] bg-white rounded-xl p-[14px] flex justify-between"
          >
            <div className="flex">
              <img className="mr-[5px]" src={reward.icon} alt="" />
              <div>{reward.word}</div>
            </div>
            <div className="flex w-[205px] justify-between">
              <div className="flex w-[110px]  justify-between">
                <img src={reward.wIcon} alt="" />
                <div>{reward.money}</div>
              </div>
              <div className="flex">
                <img className="mx-2" src={reward.usIcon} alt="" />
                <div>{reward.w}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

{
  /* <div className="w-[409px] mt-[5px] h-[53px] bg-white rounded-xl p-[14px] flex justify-between">
          <div className="flex">
            <img className="mr-[5px]" src="./icons/medal.png" alt="" />
            여성의류 쇼핑몰
          </div>
          <div className="flex">
            <div className="flex">
              <img className="mr-2" src="./icons/won.png" alt="" />
              50.000.000
            </div>
            <div className="flex">
              <img className="mx-2" src="./icons/user.png" alt="" />
              김**
            </div>
          </div>
        </div> */
}
{
  /* <div className="w-[409px] mt-[5px] h-[53px] bg-white rounded-xl p-[14px] flex justify-between">
          <div className="flex">
            <img className="mr-[5px]" src="./icons/medal2.png" alt="" />
            <div> 강남성모병원</div>
          </div>
          <div className="flex bg-red-200 w-[205px] justify-between">
            <div className="flex w-[110px]  justify-between">
              <img src="./icons/won.png" alt="" />
              <div> 3.250.000</div>
            </div>
            <div className="flex">
              <img className="mx-2" src="./icons/user.png" alt="" />
              <div> 김**</div>
            </div>
          </div>
        </div> */
}
{
  /* <div className="w-[409px] mt-[5px] h-[53px] bg-white rounded-xl p-[14px] flex justify-between">
          <div className="flex">
            <img className="mr-[5px]" src="./icons/medal3.png" alt="" />
            밀알복지재단 30주년 ..
          </div>
          <div className="flex">
            <div className="flex">
              <img className="mx-2" src="./icons/won.png" alt="" />
              2,715,000
            </div>
            <div className="flex">
              <img className="mx-2" src="./icons/user.png" alt="" />
              김**
            </div>
          </div>
        </div>
        <div className="w-[409px] mt-[5px] h-[53px] bg-white rounded-xl p-[14px] flex justify-between">
          <div className="flex">
            <img className="mr-[5px]" src="./icons/4.png" alt="" />
            탱그램 라이팅 이더
          </div>
          <div className="flex">
            <div className="flex">
              <img className="mx-2" src="./icons/won.png" alt="" />
              4,853,000
            </div>
            <div className="flex">
              <img className="mx-2" src="./icons/user.png" alt="" />
              김**
            </div>
          </div>
        </div>
        <div className="w-[409px] mt-[5px] h-[53px] bg-white rounded-xl p-[14px] flex justify-between">
          <div className="flex">
            <img className="mr-[5px]" src="./icons/5.png" alt="" />
            한화 사이언스 챌린지
          </div>
          <div className="flex">
            <div className="flex">
              <img className="mx-2" src="./icons/won.png" alt="" />
              3,580,000
            </div>
            <div className="flex">
              <img className="mx-2" src="./icons/user.png" alt="" />
              김**
            </div>
          </div>
        </div>  */
}
