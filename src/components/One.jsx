export default function One() {
  return (
    <div className="flex justify-center">
      <div className="w-[1170px] h-[302px] one flex justify-between items-center rounded-2xl mt-[60px]">
        <div className="h-[181px] w-[396px] flex flex-col justify-between ml-[42px]">
          <div className="text-[32px]">서비스 소개</div>
          <div className="text-[16px]">
            누적 거래 402만 건! 700여 개의 카테고리와 6만여 개 서비스에서 필요한
            모든 전문가를 만나보세요.
          </div>

          <button className="bg-white rounded-xl  w-[153px] h-[47px] flex items-center justify-between px-[17px]">
            자세히 보기 <p className="text-[20px]">{">"}</p>
          </button>
        </div>
        <div>
          <img className="mt-[18px]" src="./image/zasvarlasan.png" alt="" />
        </div>
      </div>
    </div>
  );
}
