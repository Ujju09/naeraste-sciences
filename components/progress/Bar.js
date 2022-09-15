/** @format */

export const Bar = ({ animationDuration, progress }) => {
  return (
    <div
      className="bar"
      style={{
        transform: `translateX(${progress * 100}%)`,
        transition: `transform ${animationDuration}ms linear`,
        backgroundColor: "#2F80FA",
        width: "100%",
        height: "8px",
        zIndex: 50,
      }}
    />
  );
};
