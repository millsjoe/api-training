import People from "../components/people";

const Index = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <h1>Welcome to API training</h1>
      <People />
    </div>
  );
};

export default Index;
