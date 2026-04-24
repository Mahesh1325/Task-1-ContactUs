import { create } from "zustand";
import { persist } from "zustand/middleware";

interface UserDraft {
  first_name: string;
  last_name: string;
  email: string;
  mobile: string;
  city: string;
  age: string;
}

interface UserDraftStore {
  draft: UserDraft;
  setDraft: (data: Partial<UserDraft>) => void;
  clearDraft: () => void;
}

export const useUserDraftStore = create<UserDraftStore>()(
  persist(
    (set) => ({
      draft: {
        first_name: "",
        last_name: "",
        email: "",
        mobile: "",
        city: "",
        age: "",
      },

      setDraft: (data) =>
        set((state) => ({
          draft: { ...state.draft, ...data },
        })),

      clearDraft: () =>
        set({
          draft: {
            first_name: "",
            last_name: "",
            email: "",
            mobile: "",
            city: "",
            age: "",
          },
        }),
    }),
    {
      name: "user-draft-storage",
    }
  )
);
