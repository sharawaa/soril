import YouTubeVideo from "./Vedio";

export default function Youtube() {
  return (
    <div className="flex justify-between items-center h-[420px] w-[1170px] ">
      <div className="w-64">
        <div className="text-[32px]">유튜브 홍보용 영상</div>
        <div>
          누적 거래 402만 건! 700여 개의 카테고리와 6만여 개 서비스에서 필요한
          모든 전문가를 만나보세요.
        </div>
      </div>
      <div className="h-[400px] w-[700px] bg-red-300 rounded-2xl">
        <YouTubeVideo />
      </div>
    </div>
  );
}
