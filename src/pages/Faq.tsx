import AccordionCard from "@/components/faq/AccordionCard";
import BlurFade from "@/components/ui/blurfade";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

// Define types for FAQ items
interface FaqItem {
  question: string;
  answer: string;
}

// Define FAQ sections with types
const faqData: { [key: string]: FaqItem[] } = {
  Payments: [
    {
      question: "How can I make tuition fee payments?",
      answer:
        "Tuition fee payments can be made through our secure online UPI apps like PhonePe, Paytm, Google Pay, Payzapp, BHIM UPI, Amazon Pay. Additionally, we accept payments via bank transfer and at the school's administrative office.",
    },
    {
      question: "Are there any additional charges or hidden fees?",
      answer:
        "We are committed to transparency. All applicable fees are clearly communicated during the admission process. If you have any specific concerns or questions regarding fees, feel free to contact our finance department for clarification.",
    },
    {
      question: "Is there a deadline for fee payments?",
      answer:
        "Fee payment deadlines are communicated in advance through official announcements, circulars, and the school's website. It is essential to adhere to these deadlines to avoid any inconvenience.",
    },
    {
      question:
        "Can I get a refund for fees paid if my child withdraws from the school?",
      answer:
        "The refund policy is outlined in the school's admission handbook. Refund eligibility depends on the timing of withdrawal and is subject to the terms and conditions specified. Please refer to the handbook or contact the administrative office for more information.",
    },
  ],
  Safety: [
    {
      question: "How does the school prioritize the safety of students?",
      answer:
        "The safety of our students is our top priority. We have implemented comprehensive safety protocols, including trained security personnel, surveillance systems, and regular safety drills to ensure a secure learning environment.",
    },
    {
      question: "What measures are in place for medical emergencies?",
      answer:
        "Our school has a well-equipped infirmary with trained medical staff. Additionally, we maintain a close association with local medical facilities for prompt and efficient handling of any medical emergencies.",
    },
    {
      question: "Are there safety guidelines for transportation services?",
      answer:
        "Absolutely. Our transportation services strictly adhere to safety regulations. All vehicles are regularly inspected, and drivers undergo rigorous training. Detailed safety guidelines are provided to both drivers and students for a secure commuting experience.",
    },
    {
      question:
        "What security measures are in place within the school premises?",
      answer:
        "Our school premises are equipped with surveillance cameras, access control systems, and secure entry points. Trained security personnel are stationed throughout the campus to monitor and ensure the safety of all individuals.",
    },
    {
      question:
        "How can parents stay informed about their child's safety at school?",
      answer:
        "We believe in transparent communication. Regular updates on safety measures, emergency procedures, and any relevant information are communicated through newsletters, circulars, and the school's official communication channels.",
    },
    {
      question:
        "Are there protocols for visitors entering the school premises?",
      answer:
        "Yes, strict visitor protocols are enforced. All visitors are required to register at the front desk, wear identification badges, and adhere to the designated visiting areas. This ensures a secure environment for everyone on campus.",
    },
    {
      question: "What should I do if my child reports a safety concern?",
      answer:
        "We encourage students to communicate any safety concerns to their teachers, school counselors, or any staff member. Our open-door policy ensures that safety concerns are promptly addressed and investigated.",
    },
  ],
};

function Faq() {
  return (
    <Card>
      <BlurFade duration={1} amount={0.5}>
        <CardHeader>
          <CardTitle>Frequently Asked Questions</CardTitle>
          <CardDescription>
            Can&apos;t find the answer you&apos;re looking for? Feel free to
            contact us.
          </CardDescription>
          <Separator />
        </CardHeader>
      </BlurFade>
      <CardContent className="m-2">
        <BlurFade duration={1} amount={0.5}>
          {Object.entries(faqData).map(([sectionTitle, items], index) => (
            <div key={index} className={`mt-6 ${index === 0 ? "" : "mt-12"}`}>
              <CardTitle>{sectionTitle}</CardTitle>
              <CardDescription>
                If you have any {sectionTitle.toLowerCase()} related doubts,
                here is the FAQ to help you out.
              </CardDescription>
              <AccordionCard items={items} />
            </div>
          ))}
        </BlurFade>
      </CardContent>
    </Card>
  );
}

export default Faq;
