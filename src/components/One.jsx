export default function One() {
  return (
    <div className="flex justify-center">
      <div className="w-[1170px] h-[410px] one flex justify-between rounded-2xl mt-[60px] p-[40px]">
        <div className="h-[280px] w-[350px] flex flex-col justify-around">
          <div className="text-[32px]">서비스 소개</div>
          <div>
            누적 거래 402만 건! 700여 개의 카테고리와 6만여 개 서비스에서 필요한
            모든 전문가를 만나보세요.
          </div>

          <button className="bg-white rounded-xl p-2 w-24">자세히 보기 </button>
        </div>
        <div>
          <img src="./image/table2.png" alt="" />
        </div>
      </div>
    </div>
  );
}
