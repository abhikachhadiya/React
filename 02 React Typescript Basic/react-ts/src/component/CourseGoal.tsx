import { type PropsWithChildren } from "react";

// interface ICourseGoalProps {
//   title: string;
//   children: ReactNode;
// }

type CourseGoalProps = PropsWithChildren<{
  title: string;
  onDelete: (id: number) => void;
  id: number;
}>;

function CourseGoal(props: CourseGoalProps) {
  const { title, children, id, onDelete } = props;
  return (
    <article>
      <div>
        <h2>{title}</h2>
        {children}
      </div>
      <button onClick={() => onDelete(id)}>Delete</button>
    </article>
  );
}

export default CourseGoal;
