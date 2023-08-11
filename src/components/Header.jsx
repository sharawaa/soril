export default function Header() {
  return (
    <div className="w-[1170px] h-[82px] flex items-center justify-between">
      <button className="text-[26px] font-bold">tagoplus</button>
      <div className="flex ml-[280px]">
        <button className="m-[25px]">서비스 소개</button>
        <button className="m-[25px]">퍼블리싱 의뢰</button>
        <button className="m-[25px]">포트폴리오</button>
        <button className="m-[25px]">고객센터</button>
        <button className="m-[25px] flex gap-4">
          <img src="./icons/123.png" alt=" " />
          <div>마이페이지</div>
        </button>
      </div>
      <div>
        <button className="h-[40px] rounded-lg p-2 text-[14px] headerButton1">
          로그인
        </button>{" "}
        <button className="h-[40px] headerButton2 rounded-lg p-2 text-white text-[14px]">
          로그인
        </button>
      </div>
    </div>
  );
}
