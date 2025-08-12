"use client";

import { Accordion } from "../core/accordion";
import { Container } from "../core/container";

const faqs = [
  {
    question: "How can I connect and manage my social media accounts?",
    answer:
      "You can add a social platform by clicking the '+' button or any available placeholder. From there, select from the list of supported platforms and enter your profile URL. Once added, links can be edited, reordered, or removed at any time.",
  },
  {
    question: "Is there a limit to the number of social links I can add?",
    answer:
      "You can connect up to 15 unique social platforms. A maximum of 5 can be made visible on your public profile at a time, ensuring a clean and focused user interface.",
  },
  {
    question: "What happens when I remove or archive a social link?",
    answer:
      "Archiving a link will hide it from your public profile but keep it stored in your account. This allows you to restore or edit the link later without re-entering the details.",
  },
  {
    question: "Can I customize the order of my social links?",
    answer:
      "Yes, all active social links can be reordered via drag-and-drop. This gives you control over how they appear on your profile, based on importance or branding strategy.",
  },
  {
    question: "Why do some platforms appear disabled or unavailable?",
    answer:
      "Only a predefined list of verified platforms is supported to ensure consistent presentation and functionality. If a platform is unavailable, it may already be in use or restricted by platform policies.",
  },
  {
    question: "Are my social links visible to others by default?",
    answer:
      "Only the links you actively add and mark as visible will appear on your public profile. Archived or unconfigured platforms remain private and hidden from others.",
  },
  {
    question:
      "Can I use the same platform more than once with different accounts?",
    answer:
      "Each supported platform can be linked only once per profile to avoid redundancy and maintain a clean visual layout. For multi-account use, consider consolidating or linking externally.",
  },
  {
    question: "How often can I update or change my social links?",
    answer:
      "You can update your links as often as needed. Changes are reflected in real-time and will be immediately visible to anyone viewing your profile.",
  },
];
export default function Faqs() {
  return (
    <section className="relative overflow-hidden border-y border-neutral-900">
      <Container>
        <div className="border-x border-neutral-900">
          <div className="grid grid-cols-12 divide-x divide-neutral-800">
            <div className="col-span-4">
              <div className="p-8">
                <h2 className="font-archivo text-2xl text-white">
                  Frequently asked questions
                </h2>
                <p className="mt-4 font-light">
                  If you question is not covered here, you can contact our team.
                </p>
              </div>
            </div>
            <div className="col-span-8">
              <div className="relative">
                <div className="flex flex-col">
                  <Accordion.AccordionRoot type="multiple">
                    {faqs.map((faq, i) => (
                      <Accordion.AccordionItem key={i} value={i.toString()}>
                        <Accordion.AccordionTrigger>
                          {faq.question}
                        </Accordion.AccordionTrigger>
                        <Accordion.AccordionContent>
                          <p>{faq.answer}</p>
                        </Accordion.AccordionContent>
                      </Accordion.AccordionItem>
                    ))}
                  </Accordion.AccordionRoot>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
