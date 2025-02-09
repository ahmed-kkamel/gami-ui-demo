import { motion } from "framer-motion";
import ChatButton from "./ChatButton";
import { ChatHeader } from "./ChatHeader";
import { ChatMessages } from "./ChatMessages";
import { ChatInput } from "./ChatInput";
import { useChatWidget } from "../_hooks/useChatWidget";

export default function ChatWidget() {
    const {
        isOpen,
        setIsOpen,
        messages,
        input,
        setInput,
        showOptions,
        showSecondryOptions,
        showFeedback,
        setShowFeedback,
        showAssistanceForm,
        messageOptions,
        sendMessage,
        handleCloseAssistanceForm,
        handleShowFeedback,
        handleCloseFeedback,
        handleReset,
    } = useChatWidget();

    return (
        <>
            <ChatButton isOpen={isOpen} setIsOpen={setIsOpen} />
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    className="fixed bottom-20 md:bottom-20 md:end-6 w-96 h-[550px] rounded-xl flex flex-col overflow-hidden outline outline-[#FFFFFF]"
                >
                    <ChatHeader
                        handleReset={handleReset}
                        setIsOpen={setIsOpen}
                        handleShowFeedback={handleShowFeedback}
                    />
                    <ChatMessages
                        messages={messages}
                        showOptions={showOptions}
                        showAssistanceForm={showAssistanceForm}
                        messageOptions={messageOptions}
                        sendMessage={sendMessage}
                        showFeedback={showFeedback}
                        setShowFeedback={setShowFeedback}
                        handleCloseFeedback={handleCloseFeedback}
                        handleCloseAssistanceForm={handleCloseAssistanceForm}
                    />
                    <ChatInput
                        input={input}
                        setInput={setInput}
                        sendMessage={sendMessage}
                        showSecondryOptions={showSecondryOptions}
                    />
                </motion.div>
            )}
        </>
    );
}