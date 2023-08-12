export default function Statistics() {
  return (
    <div className="flex justify-center mt-[76px]">
      <div className=" w-[1170px] flex justify-between items-center ">
        <div class="relative ">
          <div class="absolute text-2xl mt-[120px]">진행중인 프로젝트</div>
          <div class="ml-[110px] text-[160px] text-gray-200 font-bold">ing</div>
        </div>

        <div className="flex w-[710px] justify-between">
          <div className="flex flex-col items-center justify-center">
            <div className="h-[188px] w-[188px] flex flex-none round rounded-full ">
              <div className="h-[94px] w-[94px] round2 rounded-tr-full flex flex-none  ml-[94px]"></div>
              <div className="h-[150px] w-[150px] bg-white rounded-full flex flex-none p-[60px]  -ml-[168px] mt-[20px] text-[20px] font-bold">
                75%
              </div>
            </div>
            <div className="text-[18px] mt-[20px]">
              여성의류 쇼핑몰 보헤미안
            </div>
            <button className="text-[14px] h-[28px] w-[79px] bg-gray-200 rounded-[5px] flex justify-center items-center mt-[15px]">
              계약완료
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="h-[188px] w-[188px] flex flex-none diagram2 rounded-full ">
              <div className="h-[94px] w-[94px] round2 rounded-tr-full flex flex-none  ml-[94px]"></div>
              <div className="h-[150px] w-[150px] bg-white rounded-full flex flex-none p-[60px]  -ml-[168px] mt-[20px] text-[20px] font-bold">
                25%
              </div>
            </div>
            <div className="text-[18px] mt-[20px]">강남 맑은 치과</div>
            <button className="text-[14px] h-[28px] w-[79px] bg-gray-200 rounded-[5px] flex justify-center items-center mt-[15px]">
              접수완료
            </button>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="h-[188px] w-[188px] flex flex-none diagram3 rounded-full ">
              <div className="h-[94px] w-[94px] round2 rounded-tr-full flex flex-none  ml-[94px]"></div>
              <div className="h-[150px] w-[150px] bg-white rounded-full flex flex-none p-[60px]  -ml-[168px] mt-[20px] text-[20px] font-bold">
                50%
              </div>
            </div>
            <div className="text-[18px] mt-[20px]">현대지에프홀딩스</div>
            <button className="text-[14px] h-[28px] w-[79px] bg-gray-200 rounded-[5px] flex justify-center items-center mt-[15px]">
              접수중
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
