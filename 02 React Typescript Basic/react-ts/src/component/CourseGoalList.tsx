import CourseGoal from "./CourseGoal";
import { ICourseGoal } from "../App";

interface ICourseGoalList {
  goals: ICourseGoal[];
  onDeleteGoal: (id: number) => void;
}

function CourseGoalList(props: ICourseGoalList) {
  const { goals, onDeleteGoal } = props;
  return (
    <ul>
      {goals.map((goal) => {
        return (
          <li key={goal.id}>
            <CourseGoal id={goal.id} title={goal.title} onDelete={onDeleteGoal}>
              <p>{goal.description}</p>
            </CourseGoal>
          </li>
        );
      })}
    </ul>
  );
}

export default CourseGoalList;
