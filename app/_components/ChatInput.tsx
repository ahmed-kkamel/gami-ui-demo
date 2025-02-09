import Image from "next/image";
import { useTranslation } from "react-i18next";
import { ChatInputProps } from "../_types/chatWedgitTypes";

const secondryOptions = ["What is GAMI?", "Key initiatives?", "Partnership process?"];

export const ChatInput = ({ input, setInput, sendMessage, showSecondryOptions }: ChatInputProps) => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col p-3 gap-2 bg-[#FFFFFF]">
            {showSecondryOptions && (
                <div className="flex gap-1 p-1">
                    {secondryOptions.map((option, index) => (
                        <button
                            key={index}
                            onClick={() => sendMessage(option)}
                            className="w-fit text-xs bg-[#EFF1F1] text-[#000000] p-2 rounded-lg"
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
            <div className="flex items-center relative">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder={t("chat.placeholder")}
                    className="flex-1 p-3 border-[.5px] border-[#E4E7E7] focus:outline-none bg-[#EFF1F1] rounded-2xl text-[#A0A0A0] placeholder:text-[#A0A0A0]"
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                />
                <button className="absolute end-5 " onClick={() => sendMessage()}>
                    <Image src="/send.svg" alt="chat icon" width={24} height={24} />
                </button>
            </div>
        </div>
    );
};