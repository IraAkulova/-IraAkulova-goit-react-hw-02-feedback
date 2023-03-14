export const FeedbackOptions = ({
  onGood,
  onNeutral,
  onBad,
  options,
  onLeaveFeedback,
}) => (
    <div>
      <ul>
        {options.map(option => {return (
          <li key={option}>
            <button type="button" onClick={()=>{onLeaveFeedback(option)}}>
              {option}
            </button>
          </li>
        );})}
      </ul>
    </div>
);
