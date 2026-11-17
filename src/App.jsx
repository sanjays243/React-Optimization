
import ReactMemo from "./Component/ReactMemo";
import UseMemo from "./Component/UseMemo";
import UseCallback from "./Component/UseCallback";
import Lazy from "./Component/Lazy";

function App() {
  return (
    <div>
      <ReactMemo />
      <UseMemo />
      <UseCallback />
      <Lazy />
    </div>
  );
}

export default App;
