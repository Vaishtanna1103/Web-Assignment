import "iconify-icon";
import { createSignal, Show } from "solid-js";
import { generatePDF, generateSVG } from "../utils";

const DownloadBtns = () => (
  <>

    <button p-2 onclick={() => generatePDF()}>
      <iconify-icon icon="material-symbols:download" class="bg-red-4 text-white-1 p-1 rounded-full"
>
      </iconify-icon>
      PDF
    </button>
  </>
);

const Navbar = () => {

  return (
    <div
      class="vertCentered justify-between [&_iconify-icon]:text-xl [&_button]:rounded-full"
      p="y-2 b-5 md:y-5 md:t-2"
    >
      <h3 vertCentered text='blue-6 dark:blue-5' class="text-2xl my-0">
        CV <span text-2xl text-slate-7 dark:text-white-3>Builder</span>
      </h3>

      <div vertCentered>

        <DownloadBtns />
      </div>
    </div>
  );
};

export default Navbar;
