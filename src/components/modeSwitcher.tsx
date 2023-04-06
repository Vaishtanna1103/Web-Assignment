import "iconify-icon";
import { createSignal } from "solid-js";
import { get_default_data, setStore } from "../store";

export const [editMode, setEditMode] = createSignal(true);
const [demoShown, setDemo] = createSignal(false);

export default () => (
  <div mb="5 md:10" vertCentered class="!gap-3" mx-auto w-fit>
    <div class="[&_button]:rounded-full vertCentered bg-slate-7 dark:bg-black-2 w-fit p-2 rounded-full !gap-1">
      <button
        bg={editMode() ? "slate-6 dark:black-3" : "dark:black-2"}
        shadow={editMode() ? "lg" : "none"}
        text={editMode() ? "!white-1 dark:!white-2" : ""}
        onclick={() =>
          setEditMode(true)}
        p=".6rem"
      >
        <iconify-icon icon="ph:pencil-simple-fill"></iconify-icon>
        Edit
      </button>

      <button
        bg={!editMode() ? "slate-6 dark:black-3" : "dark:black-2"}
        shadow={!editMode() ? "lg" : "none"}
        onclick={() =>
          setEditMode(false)}
        text={!editMode() ? "!white-1 dark:!white-2" : ""}
        p=".6rem"
      >
        <iconify-icon icon="ic:round-remove-red-eye"></iconify-icon>
        View
      </button>
    </div>

  </div>
);
