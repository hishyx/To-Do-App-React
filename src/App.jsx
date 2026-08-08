import CardLayout from "./components/CardsLayout";
import Navbar from "./components/Navbar";
import NoteModal from "./components/NoteModal";
import { tasks as mainTasks } from "./data";

import { useState, useEffect } from "react";

function App() {
  const [modalVisibility, setModalVisibility] = useState(false);

  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks"));

    return storedTasks ? storedTasks : mainTasks;
  });

  const [taskToEdit, setTaskToEdit] = useState(null);

  const [notification, setNotification] = useState("");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const overDueItemsCount = tasks.filter(
      (task) => !task.completed && new Date(task.dueDate) < new Date(),
    ).length;

    if (overDueItemsCount > 0)
      sendNotification(
        `There ${overDueItemsCount == 1 ? "is" : "are"} ${overDueItemsCount} tasks overdued`,
      );
  }, []);

  function sendNotification(text) {
    setNotification(text);

    setTimeout(() => setNotification(""), 3000);
  }

  function onCheck(id) {
    return setTasks(
      tasks.map((task) => {
        return {
          ...task,
          completed: task.id === id ? !task.completed : task.completed,
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
      <Navbar
        openModal={() => modalIsVisible(true)}
        notify={notification}
        onNotificationClose={() => setNotification("")}
      />
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
