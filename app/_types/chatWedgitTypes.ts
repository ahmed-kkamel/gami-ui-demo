export interface Message {
  text: string;
  user: boolean;
}
export interface ChatButtonProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export interface ChatHeaderProps {
  handleReset: () => void;
  setIsOpen: (isOpen: boolean) => void;
  handleShowFeedback: () => void;
}

export interface ChatMessagesProps {
  messages: Message[];
  showOptions: boolean;
  showAssistanceForm: boolean;
  messageOptions: string[];
  sendMessage: (message?: string) => void;
  showFeedback: boolean;
  setShowFeedback: (show: boolean) => void;
  handleCloseAssistanceForm: () => void;
  handleCloseFeedback: () => void;
}

export interface AssistanceFormProps {
  handleCloseAssistanceForm: () => void;
}

export interface ChatMessageProps {
  message: Message;
  currentTime: string;
  setShowFeedback: (show: boolean) => void;
}

export interface MessageOptionsProps {
  messageOptions: string[];
  sendMessage: (message?: string) => void;
}

export interface ChatFeedbackProps {
  handleCloseFeedback: () => void;
  feedbackContainerRef: React.RefObject<HTMLDivElement | null>;
}

export interface ChatInputProps {
  input: string;
  setInput: (input: string) => void;
  sendMessage: (message?: string) => void;
  showSecondryOptions: boolean;
}
