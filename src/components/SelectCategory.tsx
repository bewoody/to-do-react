import { useRecoilState } from "recoil";
import { categoriesState, categoryState } from "../atoms";
import CategoryItem from "./CategoryItem";

export default function SelectCategory() {
  const [category, setCategory] = useRecoilState(categoryState);
  const [categories, setCategories] = useRecoilState(categoriesState);
  const onClick = (category: string) => {
    setCategory(category);
  };
  const onCreateCategory = () => {
    const category = prompt("카테고리를 추가해주세요");
    if (!category) {
      return;
    }
    setCategories((prev) => [...prev, category]);
  };
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(2, 1fr)",
        rowGap: 25,
        columnGap: 20,
        marginTop: "0.6rem",
      }}
    >
      {categories.map((c, i) => (
        <CategoryItem
          key={i}
          category={c}
          onClick={() => onClick(c)}
          active={c === category}
        />
      ))}
      <CategoryItem category="+" onClick={onCreateCategory} />
    </div>
  );
}
