import { FC } from "react";
import { MessageOptionsProps } from "../_types/chatWedgitTypes";

export const MessageOptions: FC<MessageOptionsProps> = ({ messageOptions, sendMessage }) => {
    return (
        <div className="flex flex-col gap-1">
            {messageOptions.map((option, index) => (
                <button
                    key={index}
                    onClick={() => sendMessage(option)}
                    className="text-left w-fit text-sm bg-[#FFFFFF] text-[#000000] p-2 rounded-xl my-[2px]"
                >
                    {option}
                </button>
            ))}
        </div>
    );
};