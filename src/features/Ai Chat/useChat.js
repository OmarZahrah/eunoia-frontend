import { useMutation, useQueryClient } from "@tanstack/react-query";
import { sendChatMessage } from "../../services/apiChatBot";

export const useChat = () => {
  const queryClient = useQueryClient();

  const {
    mutate: sendMessage,
    isPending: isLoading,
    data: response,
  } = useMutation({
    mutationFn: sendChatMessage,
    onSuccess: (messages) => {
      queryClient.setQueryData(["chatbot"], messages);
    },
    onError: (err) => {
      console.log(err?.response?.data?.message);
    },
  });
  return { sendMessage, isLoading, response };
};
