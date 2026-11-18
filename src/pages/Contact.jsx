import PageHeader from "../components/PageHeader/PageHeader";
import { useState } from "react";
import Input from "../components/Input/Input";

const Contact = () => {
    const [email, setEmail] = useState("");
  return (<main>
    <Input id="email" label="Email Address" type="email" placeholder="Enter your email" value={email} onChange={setEmail} />
     <PageHeader
    title="Let's Connect"
    description="Feel free to reach out. I'd love to hear from you." />
  </main>);
};

export default Contact;
