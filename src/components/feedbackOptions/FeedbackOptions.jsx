import css from './FeedbackOptions.module.css'

export const FeedbackOptions = ({
  onGood,
  onNeutral,
  onBad,
  options,
  onLeaveFeedback,
}) => (
  <div>
    <ul className={css.fedbackList}>
      {options.map(option => {
        return (
          <li key={option}>
            <button
              className={css.option}
              type="button"
              onClick={() => {
                onLeaveFeedback(option);
              }}
            >
              {option}
            </button>
          </li>
        );
      })}
    </ul>
  </div>
);
