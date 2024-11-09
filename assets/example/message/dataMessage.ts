export const dataChat1: MessageChatServer[] = [
  {
    name: "Alex",
    msg: "Hello",
    time: new Date(),
    id: "1",
  },
  {
    name: "John",
    msg: "clean flies pull too cross spell butter ruler read immediately like very camp perfect scientific fine attached station captured happened troops depend wild result",
    time: new Date(),
    id: "2",
  },
]

export const dataMessage2: MessageContact = {
  name: "John",
  time: new Date(),
  img: "https://picsum.photos/240",
  id: "1",
  message: dataChat1,
  read: false,
  msg: "clean flies pull too cross spell butter ruler read immediately like very camp perfect scientific fine attached station captured happened troops depend wild result",
}

export const dataMessages: MessageContact[] = [dataMessage2]

export const countUnRead = dataMessages.filter(
  (item) => item.read === false
).length

export const dataNotifyExample: MessageListServer = {
  type: "Message",
  name: "John",
  link: "/message/1",
  time: new Date(),
  id: "1",
  read: false,
  img: "https://picsum.photos/63",
  msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}
export const dataNotifies: MessageChatServer[] = [dataNotifyExample]
