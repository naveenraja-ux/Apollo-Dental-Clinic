import { create } from 'zustand';

interface EnrollModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

export const useEnrollModal = create<EnrollModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));
