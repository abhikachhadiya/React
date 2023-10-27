import { useState } from "react";
import Header from "./component/Header";
import CourseGoalList from "./component/CourseGoalList";
import NewGoal from "./component/NewGoal";
import goalsImage from "./assets/goals.jpg";
import "./App.css";

export interface ICourseGoal {
  title: string;
  description: string;
  id: number;
}
function App() {
  const [goals, setGoal] = useState<ICourseGoal[]>([]);

  const onAddGoalHandler = (goal: string, summary: string) => {
    setGoal((prevGoal) => {
      const newGoal: ICourseGoal = {
        id: Math.random(),
        title: goal,
        description: summary,
      };
      return [...prevGoal, newGoal];
    });
  };

  const onDeleteGoalHandler = (id: number) => {
    setGoal((prevGoal) => prevGoal.filter((goal) => goal.id !== id));
  };

  return (
    <main>
      <Header image={{ src: goalsImage, alt: "A List of goals" }}>
        <h1>Your Course Goals</h1>
      </Header>
      <NewGoal onAddGoal={onAddGoalHandler} />
      <CourseGoalList goals={goals} onDeleteGoal={onDeleteGoalHandler} />
    </main>
  );
}

export default App;
