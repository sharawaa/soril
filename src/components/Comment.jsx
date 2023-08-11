export default function Comment() {
  return (
    <div className="flex justify-center">
      <div className="w-[1170px] h-[410px] flex justify-between  mt-[60px] p-[40px]">
        <div className="flex">
          <div className="bg-white h-[200px] w-[230px] border border-red-200  rounded-2xl p-5 flex flex-col justify-around m-[5px]">
            <div className="flex items-center">
              <img src="./image/zalu.png" alt="." />
              <div>김*국</div>
            </div>
            <div>복잡한 코딩 한번에 해결했어요 너무 감사합니다. </div>
            <div>2023.07.30</div>
          </div>
          <div className="bg-white h-[200px] w-[230px] border border-red-200  rounded-2xl p-5 flex flex-col justify-around m-[5px]">
            <div className="flex items-center">
              <img src="./image/zalu.png" alt="." />
              <div>김*국</div>
            </div>
            <div>
              단가도 좋고 코딩 수준도 높고 무엇보다 빨라서 좋았어요 또
              이용하겠습니다.
            </div>
            <div>2023.07.30</div>
          </div>
          <div className="bg-white h-[200px] w-[230px] border border-red-200  rounded-2xl p-5 flex flex-col justify-around m-[5px]">
            <div className="flex items-center">
              <img src="./image/zalu.png" alt="." />
              <div>김*국</div>
            </div>
            <div>복잡한 코딩 한번에 해결했어요 너무 감사합니다. </div>
            <div>2023.07.30</div>
          </div>
        </div>
        <div className="h-[200px] flex flex-col justify-around">
          <div className="border-t-[1px] border-gray-500 h-[]">
            <div>사이트가 새롭게 오픈되었습니다. 사이트가 새롭게 오픈..</div>
            <div>2023.07.30</div>
          </div>
          <div className="border-y-[1px] border-gray-500">
            <div>사이트가 새롭게 오픈되었습니다. 사이트가 새롭게 오픈..</div>
            <div>2023.07.30</div>
          </div>
          <div className="border-b-[1px] border-gray-500">
            <div>사이트가 새롭게 오픈되었습니다. 사이트가 새롭게 오픈..</div>
            <div>2023.07.30</div>
          </div>
        </div>
      </div>
    </div>
  );
}
