import { FC, useEffect, useRef } from "react";
import { ChatMessagesProps } from "../_types/chatWedgitTypes";
import { ChatFeedback } from "./ChatFeedback";
import { AssistanceForm } from "./AssistanceForm";
import { ChatMessage } from "./ChatMessage";
import { MessageOptions } from "./MessageOptions";


export const ChatMessages: FC<ChatMessagesProps> = ({
    messages,
    showOptions,
    showAssistanceForm,
    messageOptions,
    sendMessage,
    showFeedback,
    setShowFeedback,
    handleCloseFeedback,
    handleCloseAssistanceForm,
}) => {
    const chatContainerRef = useRef<HTMLDivElement | null>(null);
    const feedbackContainerRef = useRef<HTMLDivElement | null>(null);
    const currentTime = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: true });

    const scrollToBottom = (ref: React.RefObject<HTMLDivElement | null>) => {
        if (ref.current) {
            ref.current.scrollTop = ref.current.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom(chatContainerRef);
        scrollToBottom(feedbackContainerRef);
    }, [messages, showFeedback]);

    return (
        <div className="flex-1 p-3 overflow-auto bg-[#EFF1F1] [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300" ref={chatContainerRef}>
            {showAssistanceForm ? (
                <AssistanceForm handleCloseAssistanceForm={handleCloseAssistanceForm} />
            ) : (
                <>
                    <p className="text-[#3C3C3C] text-xs my-2 px-5">I&apos;m here to help you with all your policy-related questions. Ask away!</p>
                    {messages.map((msg, index) => (
                        <ChatMessage key={index} message={msg} currentTime={currentTime} setShowFeedback={setShowFeedback} />
                    ))}
                </>
            )}
            {showOptions && <MessageOptions messageOptions={messageOptions} sendMessage={sendMessage} />}
            {showFeedback && <ChatFeedback handleCloseFeedback={handleCloseFeedback} feedbackContainerRef={feedbackContainerRef} />}
        </div>
    );
};