import "./Feedback.css";

const Feedback = ({ type = "info", message }) => {
    return (
        <div className={`feedback feedback-${type}`} role="alert">
            {message}
        </div>
    );
};
export default Feedback;