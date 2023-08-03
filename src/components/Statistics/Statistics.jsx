import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({
  good,
  neutral,
  bad,
  totalFeedback,
  positiveFeedback,
}) => {
  return (
    <div className={css.statistics_wrap}>
      <ul className={css.reviews}>
        <li>
          <p className={css.text}>Good:</p>
          <p className={css.text}>{good}</p>
        </li>
        <li>
          <p className={css.text}>Neutral:</p>
          <p className={css.text}>{neutral}</p>
        </li>
        <li>
          <p className={css.text}>Bad:</p>
          <p className={css.text}>{bad}</p>
        </li>
      </ul>
      <div className={css.total_wrap}>
        <p className={css.text_total}>Total: {totalFeedback()}</p>
        <p className={css.text_total}>
          Positive feedback: {positiveFeedback()} %
        </p>
      </div>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  totalFeedback: PropTypes.func.isRequired,
  positiveFeedback: PropTypes.func.isRequired,
};
