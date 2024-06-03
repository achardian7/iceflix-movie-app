import { RefObject } from "react";
import { create } from "zustand";

type SidebarMobileStore = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  buttonRef: RefObject<HTMLButtonElement> | null;
  setButtonRef: (ref: RefObject<HTMLButtonElement>) => void;
};

const useSidebarMobileStore = create<SidebarMobileStore>((set) => ({
  isOpen: false,
  setIsOpen: (state: boolean) =>
    set(() => ({
      isOpen: state,
    })),
  buttonRef: null,
  setButtonRef: (ref: RefObject<HTMLButtonElement>) =>
    set(() => ({
      buttonRef: ref,
    })),
}));

export default useSidebarMobileStore;
