export default function Three() {
  return (
    <>
      <div className="flex justify-center ">
        <div className=" w-[1170px] flex justify-between">
          <div className="h-[310px] w-[376px] three1 rounded-2xl p-[50px]">
            <div className="text-[20px]">총 계약된 프로젝트</div>
            <div className="flex">
              <div className="text-[36px] font-bold">2,580</div>
              <div className="flex items-end mb-[7px] text-[22px]">건</div>
            </div>
            <div className="flex justify-between h-[156px] mb-[25px]">
              <div></div>
              <img src="./image/zahia.png" alt="l" />
            </div>
          </div>
          <div className="h-[310px] w-[376px] three2 rounded-2xl p-[50px]">
            <div className="text-[20px]">현재 진행중인 프로젝트</div>
            <div className="flex ">
              <div className="text-[36px] font-bold">1,358</div>
              <div className="flex items-end mb-[7px] text-[22px]">건</div>
            </div>
            <div className="flex justify-between h-[156px] mb-[27px]">
              <div></div>
              <img src="./image/stat.png" alt="" />
            </div>
          </div>
          <div className="h-[310px] w-[376px] three3 rounded-2xl p-[45px]">
            <div className="text-[20px]">완료된 프로젝트</div>
            <div className="flex">
              <div className="text-[36px] font-bold">1,752</div>
              <div className="flex items-end mb-[7px] text-[22px]">건</div>
            </div>
            <div className="flex justify-between  h-[116px] mt-[47px]">
              <div></div>
              <img src="./image/com.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
//ml-39 mt-50 (28) . mb-25 mr-40
