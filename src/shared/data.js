export const OverTime = ({ times }) => {
  if (times < 8) {
    return (
      <>0 ngày {times} giờ</>
    )
  } else {
    return (
      <>{(times / 8).toFixed(0)} ngày {times % 8} giờ</>
    )
  }
}