import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
position:relative;
left:10rem;
top:10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: transparent;;
`;

const Wrapper = styled.div`
  max-width: 400px;
  padding: 20px;
  background: Transparent;
  
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(62, 96, 28, 0.9);
`;

const Title = styled.h1`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
`;

const InputContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Input = styled.input`
  flex-grow: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const AddButton = styled.button`
  padding: 8px 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const TaskList = styled.ul`
  margin-top: 10px;
  list-style: none;
  padding: 0;
`;

const TaskItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
  margin-top: 5px;
`;

const RemoveButton = styled.button`
  background: none;
  border: none;
  color: red;
  cursor: pointer;
`;

export default function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState("");

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask("");
    }
  };

  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <Container>
      <Wrapper>
        <Title>To-Do List</Title>
        <InputContainer>
          <Input
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter task"
          />
          <AddButton onClick={addTask}>Add</AddButton>
        </InputContainer>
        <TaskList>
          {tasks.map((t, index) => (
            <TaskItem key={index}>
              {t}
              <RemoveButton onClick={() => removeTask(index)}>X</RemoveButton>
            </TaskItem>
          ))}
        </TaskList>
      </Wrapper>
    </Container>
  );
}