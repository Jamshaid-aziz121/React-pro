import React, { useState } from "react";
import { questions } from "../../Data/faquest.js";
import "../FAQ/faq.css";

export default function FAQ() {
  let [showAns, setShowAns] = useState(questions[0].id);
  return (
    <div>
      <h1>Frequently Ask Questions</h1>
      <div className="faqouter">
        {questions.map((faqs, ind) => {
          return (
            <div className="faqitems">
              {/* {console.log("Faq", faqs.id)} */}
              <h5 onClick={() => setShowAns(faqs.id)}>{faqs.question}</h5>
              <h6 className={showAns == faqs.id ? "activeFaq" : ""}>
                {faqs.answer}
              </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
}
