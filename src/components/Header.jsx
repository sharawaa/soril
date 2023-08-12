export default function Header() {
  return (
    <div className="w-[1170px] h-[82px] flex items-center justify-between">
      <button className="text-[26px] font-bold">tagoplus</button>
      <div className="flex w-[515px] ml-[294px] justify-between">
        <button className="m-[]">서비스 소개</button>
        <button className="m-[]">퍼블리싱 의뢰</button>
        <button className="m-[]">포트폴리오</button>
        <button className="m-[]">고객센터</button>
        <button className="m-[] flex gap-[6px]">
          <img src="./icons/123.png" alt=" " />
          <div>마이페이지</div>
        </button>
      </div>
      <div className="flex w-[160px] justify-between">
        <button className="h-[37px] w-[77px] rounded-lg p-2 text-[14px] headerButton1">
          로그인
        </button>{" "}
        <button className="h-[37px] w-[77px] headerButton2 rounded-lg p-2 text-white text-[14px]">
          회원가입
        </button>
      </div>
    </div>
  );
}
