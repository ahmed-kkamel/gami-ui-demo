import Image from "next/image";
import { useState } from "react";
import { ChatFeedbackProps } from "../_types/chatWedgitTypes";

export const ChatFeedback = ({ handleCloseFeedback, feedbackContainerRef }: ChatFeedbackProps) => {
    const [rating, setRating] = useState(0);
    const [hoveredRating, setHoveredRating] = useState(0);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = () => {
        if (rating === 0) return;
        setIsSubmitted(true);
    };

    return (
        <div className="flex flex-col gap-2 items-center justify-center bg-[#FFFFFF] p-3 rounded-lg" ref={feedbackContainerRef}>
            <Image src="/close.svg" alt="close icon" width={12} height={12} onClick={handleCloseFeedback} className="cursor-pointer self-end" />

            {isSubmitted ? (
                <div className="text-center">
                    <p className="text-[#3C3C3C] text-base font-medium">Thank you for your feedback!</p>
                    <p className="text-[#676767] text-sm">You rated us {rating} {rating === 1 ? "star" : "stars"}.</p>
                    <button className="bg-gradient-to-r from-[#0C4A4D] to-[#083032] px-3 py-1 rounded-lg text-sm mt-3 text-white" onClick={handleCloseFeedback}>Close</button>
                </div>
            ) : (
                <>
                    <p className="text-[#3C3C3C] text-base font-medium">Submit Your Feedback</p>
                    <div className="flex justify-center gap-1">
                        {[...Array(5)].map((_, index) => {
                            const starValue = index + 1;
                            return (
                                <button
                                    key={index}
                                    className={`rounded p-1 transition duration-200 ${starValue <= (hoveredRating || rating) ? "bg-yellow-400" : "bg-[#F4F4F4]"}`}
                                    onClick={() => setRating(starValue)}
                                    onMouseEnter={() => setHoveredRating(starValue)}
                                    onMouseLeave={() => setHoveredRating(0)}
                                >
                                    <Image src="/star.svg" alt="star icon" width={18} height={18} />
                                </button>
                            );
                        })}
                    </div>
                    <textarea className="w-full p-2 border border-[#F0F0F0] rounded-xl text-xs text-[#333333] focus:outline-none placeholder:text-[#333333] placeholder:text-xs" placeholder="Type here..."></textarea>
                    <button className="bg-gradient-to-r from-[#0C4A4D] to-[#083032] p-2 rounded-lg text-white" onClick={handleSubmit} disabled={rating === 0}>
                        Submit
                    </button>
                </>
            )}
        </div>
    );
};
