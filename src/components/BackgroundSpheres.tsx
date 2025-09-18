export default function BackgroundSpheres() {
  return (
    <>
      {/* 우상단 큰 공 - 뷰포트 기준 고정 */}
      <div className="gradient-bg-circle gradient-bg-circle-large fixed top-0 right-0 transform translate-x-1/3 -translate-y-1/3 opacity-80 pointer-events-none z-10"></div>

      {/* 좌하단 중간 공 - 뷰포트 기준 고정 */}
      <div className="gradient-bg-circle gradient-bg-circle-medium fixed bottom-0 left-0 transform -translate-x-1/3 translate-y-1/3 opacity-60 pointer-events-none z-10"></div>
    </>
  );
}
