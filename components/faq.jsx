"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Why eSM?",
      answer: (
        <ul className="list-disc pl-6 space-y-2">
          <li>Android & iOS Mobile Application with POP UP notification.</li>
          <li>
            Online payment integration: students can pay their fees via 25
            banks, ATMs, Jazz Cash & Easy Paisa.
          </li>
          <li>
            You can generate multiple reports; our software provides 120+
            reports with customizable formats.
          </li>
          <li>Comprehensive Dashboard.</li>
          <li>Completely customizable product.</li>
          <li>
            Branding of your institute: we provide software & mobile app with
            your brand name & logo.
          </li>
          <li>
            Data security: one main server in our software house & two backup
            servers secure your data. You can export your data any time with one
            click.
          </li>
          <li>Dedicated software support team available 9 AM to 8 PM.</li>
          <li>Evaluate your students, teachers, and staff.</li>
          <li>Complete Human Resource module.</li>
          <li>
            Finance management features:
            <ul className="list-disc pl-6 mt-1">
              <li>Chart of Account List</li>
              <li>Daily Cash Book</li>
              <li>JV, CRV Voucher, CPV Voucher, BRV Voucher, BPV Voucher, PV Voucher</li>
              <li>Ledger Report, Sub Ledger Report</li>
              <li>Trial Balance Report</li>
              <li>Profit and Loss Account Report</li>
              <li>Balance Sheet Report</li>
              <li>Income and Expenditure Report</li>
            </ul>
          </li>
          <li>360° Educational Consultancy.</li>
          <li>
            Trusted by hundreds of Schools/Colleges/Institutions including:
            <ul className="list-disc pl-6 mt-1">
              <li>Unique Group of Institutes</li>
              <li>DHA Islamabad</li>
              <li>Lahore Garrison Schools</li>
              <li>Leads Group</li>
              <li>And many more...</li>
            </ul>
          </li>
        </ul>
      ),
    },
    {
      question: "Do you offer training?",
      answer:
        "Our application interface is user-friendly, and we provide recorded tutorial lectures, continuous software support, and on-site training by our dedicated staff.",
    },
    {
      question: "Is there any extra charge for training?",
      answer:
        "Training costs are included in the initial payment made at the time of signing the order form. There are no additional charges for training.",
    },
    {
      question:
        "In case of dissatisfaction with the software, what happens to purchased hardware?",
      answer:
        "If you are not satisfied with the software, we will take back all purchased hardware and reimburse you for the expenses upon presenting the original receipts.",
    },
    {
      question: "Who will enter the data?",
      answer:
        "Data entry can be done at Customer end, but we also help in data entry if needed.",
    },
    {
      question:
        "What if a client wants to install and keep the server on their premises?",
      answer:
        "We provide free consultancy to help you install the server on your premises and manage your data independently.",
    },
    {
      question: "Would you charge for customization?",
      answer:
        "We do not charge for cosmetic customizations, but structural changes may incur charges based on development hours.",
    },
    {
      question: "Are there any hidden charges?",
      answer: "No, there are no hidden charges associated with our services.",
    },
    {
      question: "Can you access our data?",
      answer:
        "All data is processed on our servers but can be hosted on your independent server if preferred to restrict access.",
    },
    {
      question: "What data security measures do you have in place?",
      answer:
        "We have a secure server room, disaster recovery site, firewall for internet traffic control, regular backups, and data security experts ensuring data protection.",
    },
    {
      question:
        "If I decide to discontinue the software, what happens to my student data?",
      answer:
        "We will retain custody of your data for up to 3 months after discontinuation of the software.",
    },
    {
      question: "Do you offer support?",
      answer:
        "Our support team is available from 8:30 am to 8:30 pm to address any queries or issues you may have.",
    },
    {
      question: "How do you protect data?",
      answer:
        "We employ advanced security measures, including data centers, backups, firewall protection, and data security experts to safeguard your information.",
    },
    {
      question: "Do I need to install any software?",
      answer:
        "eSM is a web-based application accessible through a browser, eliminating the need for additional software installation.",
    },
    {
      question: "How do I get started?",
      answer:
        "Once payment is received, customization and implementation will be carried out followed by training and ongoing support.",
    },
    {
      question: "Does it work offline as well?",
      answer:
        "eSM is an online application requiring an internet connection for access, with provisions for alternative connectivity methods in case of network issues.",
    },
    {
      question:
        "Do you offer one-time payment options without future support?",
      answer:
        "Yes, we can accommodate one-time payment requests without future support services if desired.",
    },
    {
      question: "Can teachers view confidential information?",
      answer:
        "User privileges can be configured to restrict access to confidential information based on assigned roles and permissions.",
    },
    {
      question: "Is student information retained over the years?",
      answer:
        "Yes, student information is archived and easily accessible for historical reference.",
    },
    {
      question: "How can I pay for the subscription?",
      answer:
        "Payments are accepted via cross-cheque for eSM with an added sales tax or through cash, JazzCash, or bank transfer for eSM.",
    },
    {
      question:
        "How quick are you in resolving issues associated with the app?",
      answer:
        "Our support services are prompt and efficient, ensuring timely resolution of any issues that may arise.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div id="faq" className="py-16 bg-[#fff]">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-8">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg overflow-hidden"
            >
              <button
                className={`w-full text-left px-6 py-4 font-semibold cursor-pointer transition-colors ${
                  openIndex === index
                    ? "bg-sky-500 text-white"
                    : "bg-sky-100 text-blue-900"
                }`}
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 text-gray-700 text-sm leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
