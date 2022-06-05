export const OverTime = ({ times }) => {
  if (times < 8) {
    return <>0 ngày {times} giờ</>;
  } else {
    return (
      <>
        {(times / 8).toFixed(0)} ngày {times % 8} giờ
      </>
    );
  }
};

export const getOverTime = (times) => {
  if (times < 8) {
    return `0 ngày ${times} giờ`;
  } else {
    return `${(times / 8).toFixed(0)} ngày ${times % 8} giờ`;
  }
};

export const capitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
