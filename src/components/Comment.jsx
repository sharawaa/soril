export default function Comment() {
  return (
    <div className="flex justify-center">
      <div className="w-[1170px] flex justify-between mt-[70px]">
        <div>
          <div className="w-[136px] flex justify-between items-center">
            <div className="text-[22px]">이용후기</div>
            <div className="text-[16px]">더보기 {">"}</div>
          </div>
          <div className="flex mt-[25px]">
            <div className="bg-white h-[250px] w-[230px] border border-red-200  rounded-2xl p-5 flex flex-col justify-around ">
              <div className="flex items-center gap-4">
                <img src="./image/zalu.png" alt="." />
                <div>김*국</div>
              </div>
              <div>복잡한 코딩 한번에 해결했어요 너무 감사합니다. </div>
              <div>2023.07.30</div>
            </div>
            <div className="bg-white h-[250px] w-[230px] border border-red-200  rounded-2xl p-5 flex flex-col justify-around mx-[5px]">
              <div className="flex gap-4 items-center">
                <img src="./image/wm1.png" alt="." />
                <div>김*국</div>
              </div>
              <div>
                단가도 좋고 코딩 수준도 높고 무엇보다 빨라서 좋았어요 또
                이용하겠습니다.
              </div>
              <div>2023.07.30</div>
            </div>
            <div className="bg-white h-[250px] w-[230px] border border-red-200  rounded-2xl p-5 flex flex-col justify-around">
              <div className="flex gap-4 items-center">
                <img src="./image/wm2.png" alt="." />
                <div>김*국</div>
              </div>
              <div>복잡한 코딩 한번에 해결했어요 너무 감사합니다. </div>
              <div>2023.07.30</div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-[136px] flex justify-between items-center">
            <div className="text-[22px]">공지사항</div>
            <div className="text-[16px]">더보기 {">"}</div>
          </div>
          <div className="h-[250px] flex flex-col justify-between mt-[25px]">
            <div className="border-t-[1px] border-gray-500 flex flex-col justify-center p-4">
              <div>사이트가 새롭게 오픈되었습니다. 사이트가 새롭게 오픈..</div>
              <div>2023.07.30</div>
            </div>
            <div className="border-y-[1px] border-gray-500 p-4">
              <div>사이트가 새롭게 오픈되었습니다. 사이트가 새롭게 오픈..</div>
              <div>2023.07.30</div>
            </div>
            <div className="border-b-[1px] border-gray-500 p-4">
              <div>사이트가 새롭게 오픈되었습니다. 사이트가 새롭게 오픈..</div>
              <div>2023.07.30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
