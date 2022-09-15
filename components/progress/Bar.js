/** @format */

export const Bar = ({ animationDuration, progress }) => {
  return (
    <div
      className="bar"
      style={{
        transform: `translate3d(${progress - 1}%, 0, 0)`,
        transition: `transform ${animationDuration}ms linear`,
        maxWidth: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        height: "8px",
        background: "#0070f3",
        zIndex: "99",
      }}
    />
  );
};
