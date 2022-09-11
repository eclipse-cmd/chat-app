import { getLocalStorage, isClient, setLocalStorage } from "@/services/helper";
import { Message } from "@/services/types";
import type { RootState } from "@/store";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type MessageState = {
  value: Array<Message>;
};

const sortedData = () => {
  return getLocalStorage()?.sort((a: Message, b: Message) =>
    a.created_at > b.created_at ? 1 : b.created_at > a.created_at ? -1 : 0
  );
};

const initialState: MessageState = {
  value: [],
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

      state.value = messages;
    },

    getMessages: (state) => {
      const messages = sortedData();

      if (messages?.length > 0) {
        state.value = messages;
      }
    },
  },
});

export const { saveMessage, getMessages } = messagesSlice.actions;

export const selectMessages = (state: RootState) => state.messages;

export default messagesSlice.reducer;
