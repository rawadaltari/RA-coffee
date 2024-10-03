
import PropTypes from 'prop-types';

export default function Herosec({ title, subtitle }) {
  return (
    <div className="title-holder">
      <h2>{title}</h2>
      <div className="subtitle">{subtitle}</div>
    </div>
  );
}

Herosec.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};