export default function Three() {
  return (
    <>
      <div className="flex justify-center ">
        <div className=" w-[1170px] flex justify-between">
          <div className="h-[310px] w-[380px] three1 rounded-2xl p-[50px]">
            <div className="text-[20px]">총 계약된 프로젝트</div>

            <div className="text-[36px]">2,580건</div>

            <div className="flex justify-between">
              <div></div>
              <img src="./image/zahia.png" alt="l" />
            </div>
          </div>
          <div className="h-[310px] w-[380px] three2 rounded-2xl p-[50px]">
            <div className="text-[20px]">현재 진행중인 프로젝트</div>
            <div className="text-[36px]">1,358건</div>
            <div className="flex justify-between">
              <div></div>
              <img src="./image/stat.png" alt="" />
            </div>
          </div>
          <div className="h-[310px] w-[380px] three3 rounded-2xl p-[50px]">
            <div className="text-[20px]">완료된 프로젝트</div>
            <div className="text-[36px]">1,752건</div>
            <div className="flex justify-between">
              <div></div>
              <img src="./image/com.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
