import { RefObject } from "react";
import { create } from "zustand";

type SearchModal = {
  isOpen: boolean;
  setIsOpen: (state: boolean) => void;
  buttonRef: RefObject<HTMLButtonElement> | null;
  setButtonRef: (ref: RefObject<HTMLButtonElement>) => void;
};

const useSearchModal = create<SearchModal>((set) => ({
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

export default useSearchModal;
