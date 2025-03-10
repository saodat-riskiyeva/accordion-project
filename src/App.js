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
  const [curOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {faqs.map((faq, i) => (
        <AccordionItem
          i={i}
          title={faq.title}
          key={faq.title}
          curOpen={curOpen}
          onOpen={setIsOpen}
        >
          {faq.text}
        </AccordionItem>
      ))}
      <AccordionItem
        i={22}
        title="Thinking in React"
        key="Test"
        curOpen={curOpen}
        onOpen={setIsOpen}
      >
        <p>Allows React developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiently</li>
        </ul>
      </AccordionItem>
    </div>
  );
}

function AccordionItem({ i, title, curOpen, onOpen, children }) {
  const isOpen = i === curOpen;
  function handleToggle() {
    // onOpen(isOpen ? null : i);
    onOpen(i !== curOpen ? i : null);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handleToggle}>
      <p className="number">{(i + 1).toString().padStart(2, "0")}</p>
      <span className="title"> {title} </span>
      <span className="icon">{isOpen ? "-" : "+"}</span>
      {isOpen && <div className="content-box"> {children}</div>}
    </div>
  );
}
