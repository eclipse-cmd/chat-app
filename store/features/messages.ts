import { getLocalStorage, isClient, setLocalStorage } from "@/services/helper";
import { Message } from "@/services/types";
import type { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// declaring the types for our state
export type MessageState = {
  messages: Array<Message>;
};

const sortedData = getLocalStorage()?.sort((a: Message, b: Message) =>
  a.created_at > b.created_at ? 1 : b.created_at > a.created_at ? -1 : 0
);

const initialState: MessageState = {
  messages: sortedData ?? [],
};

export const messagesSlice = createSlice({
  name: "messages",
  initialState,

  reducers: {
    saveMessage: (state, action: PayloadAction<Message>) => {
      const messages = [...getLocalStorage(), { ...action.payload }];

      if (isClient()) {
        setLocalStorage(messages);
      }

      state.messages = messages;
    },

    getMessages: (state) => {
      const messages = sortedData;

      if (messages?.length > 0) {
        state.messages = messages;
      }
    },
  },
});

export const { saveMessage, getMessages } = messagesSlice.actions;

export const selectMessages = (state: RootState) => state.messages.messages;

export default messagesSlice.reducer;
