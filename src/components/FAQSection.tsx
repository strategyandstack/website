import React, { useState } from 'react';
import styles from './FAQSection.module.css';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "When will we start seeing results?",
      answer: `Most clients see first indicators (replies, meetings booked, inbound inquiries) within 30–45 days of launch. Full system stabilization—where you have predictable, repeatable flow—typically happens around the 60–90 day mark. We set realistic expectations upfront because we're building infrastructure, not running one-off campaigns. The payoff is a system that compounds over time.`
    },
    {
      question: "What do we need to have in place before starting?",
      answer: `You need proven demand (existing sales or strong product-market fit), an average ticket/value above $1,000, and bandwidth to engage in the strategy process. We handle the technical setup—domains, tools, automations—but you need to be available for positioning discussions, offer refinement, and approvals. If you're generating revenue and ready to scale beyond word-of-mouth, you're ready.`
    },
    {
      question: "What if we already have a partial stack or some tools in place?",
      answer: `That's common and often helpful. We audit what you have, keep what's working, and integrate it into the new system. No need to rip and replace. If your CRM is set up well, we build on it. If you have landing pages that convert, we optimize rather than rebuild. We're pragmatic—the goal is results, not a specific tech stack.`
    },
    {
      question: "What if we've been burned by another agency before?",
      answer: `We hear this often. The difference is methodology vs. random activity. Many agencies run campaigns without proper infrastructure—no warmup, no enrichment, no coherent strategy. We install systems. We also start with a strategy call (free) so you can evaluate fit before committing. And our engagements are structured so you can see progress before scaling up.`
    },
    {
      question: "Do you work with B2C as well as B2B?",
      answer: `Yes, though the approach differs. For B2C, we focus more heavily on Authority Gen (reviews, local SEO, conversion funnels) and paid acquisition. For B2B, outbound and LinkedIn-based strategies take priority. The underlying system—strategy, stack, execution—applies to both. What matters is that you have sufficient margin and ticket size to justify the investment.`
    },
    {
      question: "Who will we be working with day-to-day?",
      answer: `Strategy calls and scoping happen directly with Eddie. Execution is handled by our vetted team of specialists—each expert in their domain (outbound, authority, automations, media). You always have a direct line to Eddie for strategy and oversight, while getting specialist execution where it counts. It's a boutique collective model, not a faceless agency.`
    },
    {
      question: "How involved does our team need to be?",
      answer: `Initial involvement is higher—we need your input on positioning, ICP, and offer architecture. Expect 2–4 hours per week in the first month. After that, it tapers significantly. Once the system is running, your involvement is mainly approvals and feedback. If you move to maintenance, we handle the heavy lifting while you focus on closing deals.`
    },
    {
      question: "Is this right for us if our average ticket is under $1,000?",
      answer: `Typically, no. The economics of outbound and authority-building favor higher-value transactions. If your average ticket is under $1,000, the acquisition cost may not make sense. That said, if you have high volume and strong LTV, it can still work. We'll be honest about fit during the strategy call—we'd rather turn away a bad-fit client than set up a system that won't deliver ROI.`
    }
  ];

  return (
    <section className={styles.faq}>
      <div className="container container--narrow">
        <div className={styles.header}>
          <span className="eyebrow">Questions</span>
          <h2 className={styles.headline}>
            Frequently <span className={styles.accent}>asked</span>
          </h2>
        </div>
        
        <div className={styles.accordion}>
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`${styles.item} ${openIndex === index ? styles.open : ''}`}
            >
              <button 
                className={styles.trigger}
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                aria-expanded={openIndex === index}
              >
                <span className={styles.question}>{faq.question}</span>
                <span className={styles.icon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m6-6H6" />
                  </svg>
                </span>
              </button>
              <div className={styles.content}>
                <div className={styles.answer}>
                  <p>{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
