import { useState, useCallback, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Message } from "../_types/chatWedgitTypes";

export function useChatWidget() {
    const { t } = useTranslation();

    // State variables
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [showOptions, setShowOptions] = useState(true);
    const [showSecondryOptions, setShowSecondryOptions] = useState(false);
    const [showFeedback, setShowFeedback] = useState(false);
    const [showAssistanceForm, setShowAssistanceForm] = useState(false);

    // Memoized message options
    const messageOptions = useMemo(() => [
        t("chat.options.services"),
        t("chat.options.contact"),
        t("chat.options.pricing"),
        t("chat.options.guidance"),
    ], [t]);

    // Memoized bot responses
    const botResponses = useMemo(() => ({
        default: t("chat.responses.defaultResponse"),
        services: t("chat.responses.services"),
        contact: t("chat.responses.contact"),
        pricing: t("chat.responses.pricing"),
        guidance: t("chat.responses.guidance"),
    }), [t]);

    // Send message logic
    const sendMessage = useCallback((message?: string) => {
        const userMessage = message || input.trim();
        if (!userMessage) return;

        // Handle pricing option separately
        if (userMessage.includes(t("chat.options.pricing"))) {
            setShowAssistanceForm(true);
            setShowOptions(false);
            setShowSecondryOptions(false);
            setShowFeedback(false);
            setInput("");
            return;
        }

        // Add user message to the chat
        setMessages((prev) => [...prev, { text: userMessage, user: true }]);
        setInput("");
        setShowOptions(false);
        setShowSecondryOptions(true);
        setShowFeedback(false);
        setShowAssistanceForm(false);

        // Simulate bot response after 1 second
        setTimeout(() => {
            let botResponse = botResponses.default;

            if (userMessage.includes(t("chat.options.services"))) {
                botResponse = botResponses.services;
            } else if (userMessage.includes(t("chat.options.contact"))) {
                botResponse = botResponses.contact;
            } else if (userMessage.includes(t("chat.options.pricing"))) {
                botResponse = botResponses.pricing;
            } else if (userMessage.includes(t("chat.options.guidance"))) {
                botResponse = botResponses.guidance;
            }

            setMessages((prev) => [...prev, { text: botResponse, user: false }]);
        }, 1000);
    }, [input, t, botResponses]);

    // Close assistance form
    const handleCloseAssistanceForm = useCallback(() => {
        setShowAssistanceForm(false);
        setShowOptions(true);
    }, []);

    // Show feedback form
    const handleShowFeedback = useCallback(() => {
        setShowFeedback(true);
        setShowOptions(false);
        setShowSecondryOptions(false);
        setShowAssistanceForm(false);
    }, []);

    // Close feedback form
    const handleCloseFeedback = useCallback(() => {
        setShowFeedback(false);
        if (!messages.length) {
            setShowOptions(true);
        }
    }, [messages.length]);

    // Reset chat state
    const handleReset = useCallback(() => {
        setMessages([]);
        setInput("");
        setShowOptions(true);
        setShowSecondryOptions(false);
        setShowAssistanceForm(false);
        setShowFeedback(false);
    }, []);

    return {
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
    };
}