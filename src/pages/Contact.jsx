import PageHeader from "../components/PageHeader/PageHeader";
import { useReducer } from "react";
import Input from "../components/Input/Input";
import Button from "../components/Button/Button";
import Feedback from "../components/Feedback/Feedback";

const initialState = { name: "", email: "", message: "", errors: {}, submitted: false };
function formReducer(state, action) {
  switch (action.type) {
    case "field": return { ...state, [action.field]: action.value, errors: { ...state.errors, [action.field]: "" }, submitted: false };
    case "errors": return { ...state, errors: action.errors, submitted: false };
    case "submitted": return { ...state, submitted: true, errors: {} };
    case "reset": return initialState;
    default: return state;
  }
}
const validate = (form) => {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) errors.email = "Email is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = "Enter a valid email address.";
  if (!form.message.trim()) errors.message = "Message is required.";
  return errors;
};

const Contact = () => {
  const [form, dispatch] = useReducer(formReducer, initialState);
  const handleSubmit = (event) => {
    event.preventDefault();
    const errors = validate(form);
    if (Object.keys(errors).length) dispatch({ type: "errors", errors });
    else dispatch({ type: "submitted" });
  };
  const change = (field) => (value) => dispatch({ type: "field", field, value });

  return <main className="contact-page">
    <PageHeader title="Let's Connect" description="Feel free to reach out. I'd love to hear from you." />
    {form.submitted && <Feedback type="success" message="Your form passed validation! This demo does not send messages yet." />}
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <Input id="name" label="Name" placeholder="Your name" value={form.name} onChange={change("name")} error={form.errors.name} />
      <Input id="email" label="Email Address" type="email" placeholder="you@example.com" value={form.email} onChange={change("email")} error={form.errors.email} />
      <div className="input-group"><label htmlFor="message">Message</label><textarea id="message" rows="5" placeholder="Write your message..." value={form.message} onChange={(event) => change("message")(event.target.value)} aria-invalid={Boolean(form.errors.message)} />{form.errors.message && <p className="input-error">{form.errors.message}</p>}</div>
      <div className="form-actions"><Button type="submit">Validate & Submit</Button><Button variant="secondary" onClick={() => dispatch({ type: "reset" })}>Reset</Button></div>
    </form>
  </main>;
};
export default Contact;
