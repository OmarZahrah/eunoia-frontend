import axios from "axios";

export const sendChatMessage = async (msg) => {
  const { data } = await axios.post("http://3.129.5.59:8080/api/v1/chat/ask", {
    question: msg,
  });
  console.log(data);
  return data.response;
};
