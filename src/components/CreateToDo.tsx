import { useForm } from "react-hook-form";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { categoryState, toDoState } from "../atoms";

interface IForm {
  toDo: string;
}

function CreateToDo() {
  const setToDos = useSetRecoilState(toDoState);
  const category = useRecoilValue(categoryState);
  const { register, handleSubmit, setValue } = useForm<IForm>();
  const handleValid = ({ toDo }: IForm) => {
    setToDos((oldToDos) => {
      const newToDos = [{ id: Date.now(), text: toDo, category }, ...oldToDos];
      // localStorage.setItem("ToDos", JSON.stringify(newToDos));
      return newToDos;
    });
    setValue("toDo", "");
  };
  return (
    <form
      onSubmit={handleSubmit(handleValid)}
      style={{ display: "flex", gap: 4 }}
    >
      <input
        type="text"
        style={{
          width: "100%",
          padding: "1rem",
          borderRadius: "0.5rem",
          border: "none",
          fontSize: "0.9rem",
        }}
        {...register("toDo", { required: "Please write a To Do" })}
        placeholder="Write a to do"
      />
      <button style={{ borderRadius: "0.5rem", border: "none" }}>Add</button>
    </form>
  );
}

export default CreateToDo;
