// prop-types
import PropTypes from 'prop-types';

export function Emoji({ label, symbol }) {
  return (
    <span role="img" aria-label={label}>
      {` ${symbol}`}
    </span>
  );
}

Emoji.propTypes = {
  label: PropTypes.string.isRequired,
  symbol: PropTypes.string.isRequired,
};

export function convertDate(date) {
  const dateOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  const newDate = new Date(date).toLocaleString('en-US', dateOptions);

  return newDate;
}
