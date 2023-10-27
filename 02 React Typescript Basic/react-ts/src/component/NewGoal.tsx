import { useRef, type FormEvent } from "react";

interface NewGoalProps {
  onAddGoal: (goal: string, summary: string) => void;
}

function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function onSubmitHandler(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredGoal = goal.current!.value;
    const enteredSummary = summary.current!.value;

    event.currentTarget.reset();
    onAddGoal(enteredGoal, enteredSummary);
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input type="text" id="goal" ref={goal} />
      </p>
      <p>
        <label htmlFor="summary">Short Summary</label>
        <input type="text" id="summary" ref={summary} />
      </p>
      <p>
        <button>Add Goal</button>
      </p>
    </form>
  );
}

export default NewGoal;
