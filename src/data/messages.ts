import { directMessages } from "./chat";

const conversation = {
  conversationId: 1,
  userId: directMessages[0].id,
  messages: [
    {
      mId: 1,
      text: "",
      time: "",
      meta: {
        receiver: directMessages[0].id,
        sender: directMessages[1].id,
        sent: true,
        received: true,
        read: true,
      },
      attachments: [
        {
          id: 1,
          name: "",
          downloadLink: "",
          desc: "",
        },
      ],
      image: [
        {
          id: 1,
          downloadLink: "",
        },
      ],
    },
  ],
};

export { conversation };
