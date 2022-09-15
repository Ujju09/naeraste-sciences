/** @format */

export const Bar = ({ animationDuration, progress }) => {
  return (
    <div
      className="bar"
      style={{
        transform: `translate3d(-${progress}%, 0, 0)`,
        transition: `transform ${animationDuration}ms linear`,
        maxWidth: "100%",
        height: "8px",
        background: "#0070f3",
        zIndex: "50",
      }}
    />
  );
};
