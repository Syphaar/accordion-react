const data = [
    {
        id:1,
        question: "What is React.js used for?",
        answer:
            "React.js is a JavaScript library for building fast and interactive user interfaces, primarily for single-page applications (SPAs)."
    },
    {
        id:2,
        question: "What is the difference between Tailwind CSS and Bootstrap?",
        answer:
            "Tailwind CSS is a utility-first framework that gives you full design control, while Bootstrap provides pre-styled components for faster development."
    },
    {
        id:3,
        question: "What is the difference between == and === in JavaScript?",
        answer:
            "== checks for value equality but allows type conversion, while === checks both value and type, making it stricter and more reliable."
    },
    {
        id:4,
        question: "Why is website performance important?",
        answer:
            "A fast website improves user experience, SEO rankings, and conversion rates while reducing bounce rates."
    },
]

import { useState } from "react";

const Faq = () => {
    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }

    return(
        <div className="flex w-full h-[100vh] justify-center items-center">
            <div className="w-[500px]">
                {data.map((item, i) => (
                    <div key={item.id} className="bg-gray-800 mb-2 px-5 py-5">
                        <div onClick={() => toggle(i)} className="text-white flex justify-between items-center cursor-pointer">
                            <h2>{item.question}</h2>
                            <span>{selected === i ? "-" : "+"}</span>
                        </div>
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out text-gray-300 ${
                                selected === i
                                    ? "opacity-100 scale-y-100 max-h-[500px]"
                                    : "opacity-0 scale-y-0 max-h-0 pointer-events-none"
                            }`}
                        >
                            <p className="py-2">{item.answer}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}


export default Faq;