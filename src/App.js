import { useState } from "react";
import "./styles.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <AccordionItem i={i} title={faq.title} text={faq.text} />
      ))}
    </div>
  );
}

function AccordionItem({ i, title, text }) {
  const [isOpen, setIsOpen] = useState(false);
  function handleToggle() {
    setIsOpen(!isOpen);
  }

  return (
    <div
      className={`item ${isOpen ? "open" : ""}`}
      onClick={() => handleToggle()}
    >
      <p className="number">{(i + 1).toString().padStart(2, "0")}</p>
      <span className="title"> {title} </span>
      <span className="icon">{isOpen ? "-" : "+"}</span>
      {isOpen && <div className="content-box"> {text}</div>}
    </div>
  );
}
