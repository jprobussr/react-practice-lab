import { useState } from 'react';

const faqs = [
  {
    id: 1,
    question: 'What is React?',
    answer:
      'React is a JavaScript library used to build user interfaces with reusable components.',
  },
  {
    id: 2,
    question: 'What is state in React?',
    answer:
      'State is data that can change over time and cause the UI to re-render.',
  },
  {
    id: 3,
    question: 'What does useState do?',
    answer:
      'useState allows functional components to store and update state values.',
  },
];

const FAQAccordion = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <main className="page">
      <section className="accordion">
        <header className="accordion-header">
          <p className="eyebrow">React Practice</p>
          <h1>FAQ Accordion</h1>
          <p>Practice mapping data and rendering reusable FAQ items.</p>
        </header>

        <div className="faq-list">
          {faqs.map((faq) => {
            return (
              <article key={faq.id} className="faq-item">
                <button
                  type="button"
                  onClick={() => {
                    setOpenId((prevOpenId) => {
                      if (prevOpenId === faq.id) {
                        return null;
                      }

                      return faq.id;
                    });
                  }}
                >
                  <span>{faq.question}</span>
                  <span>{openId === faq.id ? '-' : '+'}</span>
                </button>

                {openId === faq.id && <p>{faq.answer}</p>}
              </article>
            );
          })}
        </div>
      </section>
    </main>
  );
};

export default FAQAccordion;
