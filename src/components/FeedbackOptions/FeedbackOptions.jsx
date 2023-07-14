import PropTypes from 'prop-types';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  const optionsArray = Object.entries(options);
  return (
    <div className={css.container_btns}>
      {optionsArray.map(option => (
        <button
          key={option[0]}
          className={css.custom_btn}
          onClick={() => onLeaveFeedback(option[0])}
        >
          <span>{option[0]}</span>
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
