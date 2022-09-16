/** @format */

export const Title = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingLeft: "0.5rem",
        paddingRight: "0.5rem",
        backgroundColor: "#f9f9f9",
      }}
    >
      {props.children}
    </div>
  );
};
