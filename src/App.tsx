import Button from "./components/Button";
import Card from "./components/card";
import Add_icon from "./icons/Add_icon";
import Share_icon from "./icons/Share_icon";

const App = () => {
  return (
    <div>
      <div className="flex justify-end gap-4">
        <Button
          text="Add"
          size="md"
          varient="Primary"
          startIcon={<Add_icon size="md" />}
          onclick={() => console.log("Added!")}
        />
        <Button
          text="Share Brain"
          size="md"
          varient="Secondary"
          startIcon={<Share_icon size="md" />}
          onclick={() => console.log("Brain Shared")}
        />
      </div>
      <div className="flex gap-4">
        <Card
          title="Kun Faya Kun"
          link="https://www.youtube.com/watch?v=0RDI9CMilhk"
          type="youtube"
        />
        <Card
          title="Tweet"
          link="https://x.com/elonmusk/status/1918435950675542293"
          type="twitter"
        />
      </div>
    </div>
  );
};

export default App;
