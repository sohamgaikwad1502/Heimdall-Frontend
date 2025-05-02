import Button from "./components/Button";
import Add_icon from "./icons/Add_icon";
import Share_icon from "./icons/Share_icon";

const App = () => {
  return (
    <>
      <div>App</div>
      <Button
        text="Share Brain"
        size="lg"
        varient="Secondary"
        startIcon={<Share_icon size="lg" />}
        onclick={() => console.log("Brain Shared")}
      />
      <Button
        text="Add"
        size="lg"
        varient="Primary"
        startIcon={<Add_icon size="lg" />}
        onclick={() => console.log("Added!")}
      />
    </>
  );
};

export default App;
