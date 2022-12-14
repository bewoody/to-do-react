import { atom, selector } from "recoil";
import { recoilPersist } from "recoil-persist";

export enum Categories {
  "TO_DO" = "TO_DO",
  "DOING" = "DOING",
  "DONE" = "DONE",
}

export const CATEGORIES: string[] = ["TO_DO", "DOING", "DONE"];

export interface IToDo {
  id: number;
  text: string;
  category: string;
}

export const categoryState = atom<string>({
  key: "category",
  default: CATEGORIES[0],
});

const { persistAtom: categoryPersistAtom } = recoilPersist({
  key: "categoriesPersist",
  storage: localStorage,
});

export const categoriesState = atom<string[]>({
  key: "categories",
  default: JSON.parse(
    localStorage.getItem("categoriesPersist") ?? JSON.stringify(CATEGORIES)
  ),
  effects_UNSTABLE: [categoryPersistAtom],
});

const { persistAtom } = recoilPersist({
  key: "toDos",
  storage: localStorage,
});

export const toDoState = atom<IToDo[]>({
  key: "toDo",
  // default: JSON.parse(localStorage.getItem("ToDos") as any) ?? [],
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const toDoSelector = selector({
  key: "toDoSelector",
  get: ({ get }) => {
    const toDos = get(toDoState);
    const category = get(categoryState);
    return toDos.filter((todo) => todo.category === category);
  },
});
