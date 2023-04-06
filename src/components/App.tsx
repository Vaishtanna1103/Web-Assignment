import Navbar from "./navbar";
import ModesBtn, { editMode } from "./modeSwitcher";
import Edit from "./edit";
import View from "./view";

function App() {
  return (
    <div font-sans mx="2 md:5" xl:mx-auto xl:px-5 class="max-w-[1820px]">
      <Navbar />
      <ModesBtn />

      <div id="svgWrapper" rounded-none>
        {editMode() ? <Edit /> : <View />}
      </div>
    </div>
  );
}

export default App;
