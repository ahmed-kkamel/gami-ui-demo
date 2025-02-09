import Image from "next/image";
import { FC } from "react";
import { ChatMessageProps } from "../_types/chatWedgitTypes";

export const ChatMessage: FC<ChatMessageProps> = ({ message, currentTime, setShowFeedback }) => {
    return (
        <div className={`flex ${message.user ? "flex-col" : "flex-row gap-2 items-end"}`}>
            <div className={`text-start p-2 my-2 text-sm rounded-t-xl max-w-[80%] ${message.user ? "bg-[#FFFFFF] text-[#000000] rounded-br-xl me-auto" : "bg-gradient-to-r from-[#0C4A4D] to-[#083032] text-[#FFFFFF] ms-auto rounded-bl-xl flex flex-col gap-2"}`}>
                <p>{message.text}</p>
                {!message.user && (
                    <div className="flex items-center gap-2">
                        <p className="text-[#FFFFFF] text-xs">{currentTime}</p>
                        <Image src="/thumb-up.svg" alt="thumb up" width={12} height={12} className="cursor-pointer" onClick={() => setShowFeedback(true)} />
                        <Image src="/thumb-down.svg" alt="thumb down" width={12} height={12} className="cursor-pointer" onClick={() => setShowFeedback(true)} />
                    </div>
                )}
            </div>
            <span className={`text-[#797C7B] text-xs ${message.user ? "me-auto" : "hidden"}`}>{currentTime}</span>
            <Image src="/chat-icon.svg" alt="chat icon" width={24} height={24} className={`${message.user && "hidden"} mb-2`} />
        </div>
    );
};