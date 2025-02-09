import Image from "next/image";
import { useTranslation } from "react-i18next";
import { ChatHeaderProps } from "../_types/chatWedgitTypes";

export const ChatHeader = ({ handleReset, setIsOpen, handleShowFeedback }: ChatHeaderProps) => {
    const { i18n } = useTranslation();
    const isArabic = i18n.language === "ar";
    const switchLanguage = () => {
        i18n.changeLanguage(isArabic ? "en" : "ar");
    };
    return (
        <div className="bg-gradient-to-r from-[#0C4A4D] to-[#083032] relative">
            <div className="bg-[url(/header-background.png)] bg-no-repeat bg-left bg-contain flex flex-col gap-2 items-center">
                <Image src="/chat-icon.svg" alt="chat icon" width={66} height={66} className="outline outline-white rounded-full mt-3" />
                <Image src="/header-icon.svg" alt="chat icon" width={24} height={24} className=" absolute end-[154px] bottom-10" />
                <p className="font-semibold text-base mb-3">Welcome to GIVA</p>
            </div>
            <div className="flex gap-1 absolute start-[135px] bottom-[-12px]">
                <button onClick={switchLanguage} className="text-[#FFFFFF] text-[8px] bg-[#0C4A4D] border border-[#F5F5F5] rounded-full px-2 py-1">{isArabic ? "En" : "Ar"}</button>
                <button onClick={handleReset}
                    className="text-[8px] bg-[#0C4A4D] border border-[#F5F5F5] rounded-full px-2 py-1">
                    <Image src="/refresh.svg" alt="chat icon" width={9} height={9} />
                </button>
                <button onClick={() => setIsOpen(false)} className="text-[8px] bg-[#0C4A4D] border border-[#F5F5F5] rounded-full px-2 py-1">
                    <Image src="/close-white.svg" alt="chat icon" width={9} height={9} />
                </button>
                <button onClick={handleShowFeedback} className="text-[8px] bg-[#0C4A4D] border border-[#F5F5F5] rounded-full px-2 py-1">
                    <Image src="/star-white.svg" alt="chat icon" width={9} height={9} />
                </button>
            </div>
        </div>
    );
};