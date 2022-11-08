import React, { createContext, useReducer } from "react";
import { useAuth } from "./AuthContext";

interface ChatContextType {
  data: {
    chatID: any;
    user: any;
  };
  dispatch: React.Dispatch<any>;
}

export const ChatContext = createContext<any>({});

export const ChatContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const INITIAL_STATE = {
    chatID: null,
    user: {},
  };

  const chatReducer = (state: Object, action: any) => {
    const { user } = useAuth();
    switch (action.type) {
      case "USER_CHANGE": {
        return {
          chatID:
            user.uid > action.payload.uid
              ? user.uid + action.payload.uid
              : action.payload.uid + user.id,
          user: action.payload,
        };
      }
      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(chatReducer, INITIAL_STATE);

  return (
    <ChatContext.Provider value={{ data: state, dispatch }}>
      {children}
    </ChatContext.Provider>
  );
};

export type { ChatContextType };
