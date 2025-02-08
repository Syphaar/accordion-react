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

const data = [
    {
        id:1,
        question: "Question 1",
        answer:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat praesentium perferendis neque, ad eligendi est fugit in id nihil animi neque, ad eligendi est fugit in id nihil animi neque, ad eligendi est fugit in id nihil animi."
    },
    {
        id:2,
        question: "Question 2",
        answer:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat praesentium perferendis neque, ad eligendi est fugit in id nihil animi neque, ad eligendi est fugit in id nihil animi neque, ad eligendi est fugit in id nihil animi."
    },
    {
        id:3,
        question: "Question 3",
        answer:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat praesentium perferendis neque, ad eligendi est fugit in id nihil animi neque, ad eligendi est fugit in id nihil animi neque, ad eligendi est fugit in id nihil animi."
    },
    {
        id:4,
        question: "Question 4",
        answer:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat praesentium perferendis neque, ad eligendi est fugit in id nihil animi neque, ad eligendi est fugit in id nihil animi neque, ad eligendi est fugit in id nihil animi."
    },
]

export default Faq;