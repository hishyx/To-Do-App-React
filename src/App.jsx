import CardLayout from "./components/CardsLayout";
import Navbar from "./components/Navbar";
import NoteModal from "./components/NoteModal";
import { tasks as mainTasks } from "./data";

import { useState } from "react";

function App() {
  const [modalVisibility, setModalVisibility] = useState(false);

  const [tasks, setTasks] = useState(mainTasks);

  const [taskToEdit, setTaskToEdit] = useState(null);

  function onCheck(id) {
    return setTasks(
      tasks.map((task) => {
        return {
          ...task,
          completed: task.id === id && !task.completed,
        };
      }),
    );
  }

  function onDelete(id) {
    return setTasks(tasks.filter((task) => task.id !== id));
  }

  function onEditClick(id) {
    setTaskToEdit(tasks.filter((task) => task.id === id)[0]);
    setModalVisibility(true);
  }

  function onTaskSave(savedTask, isEdit) {
    console.log(savedTask);

    return isEdit
      ? setTasks(
          tasks.map((task) =>
            task.id !== savedTask.id ? task : { ...savedTask, id: task.id },
          ),
        )
      : setTasks([...tasks, savedTask]);
  }

  function modalIsVisible(state) {
    if (!state) setTaskToEdit(null);

    return setModalVisibility(state);
  }

  return (
    <>
      <Navbar openModal={() => modalIsVisible(true)} />
      <CardLayout
        tasks={tasks}
        onCheck={onCheck}
        onDelete={onDelete}
        onEditClick={onEditClick}
      />
      {modalVisibility && (
        <NoteModal
          closeModal={() => modalIsVisible(false)}
          onTaskSave={onTaskSave}
          task={taskToEdit}
        />
      )}
    </>
  );
}

export default App;
