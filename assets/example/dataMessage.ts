import type { MessageListProps, MessageProps } from "~/types/globals/message"
export const dataChat1: MessageProps[] = [
  {
    name: "Alex",
    msg: "Hello",
    time: "10:00",
    left: true,
    id: "1",
  },
  {
    name: "John",
    msg: "clean flies pull too cross spell butter ruler read immediately like very camp perfect scientific fine attached station captured happened troops depend wild result",
    time: "20:00",
    left: false,
    id: "2",
  },
  {
    name: "Alex",
    msg: "lorem ipsum depend baseball buffalo biggest belt ability grass independent curious tape buy broken beyond very crowd shinning teeth trick better engineer stems slip do cent field",
    time: "24:00",
    left: true,
    id: "3",
  },
  {
    name: "John",
    msg: "clean flies pull too cross spell butter ruler read immediately like very camp perfect scientific fine attached station captured happened troops depend wild result",
    time: "10:00",
    left: false,
    id: "4",
  },
]
export const dataMessage1: MessageListProps = {
  name: "Alex",
  time: new Date(),
  msg: dataChat1[0],
  img: "https://picsum.photos/200",
  id: "2",
  message: dataChat1,
  read: true,
}

export const dataMessage2: MessageListProps = {
  name: "John",
  time: new Date(),
  msg: dataChat1[1],
  img: "https://picsum.photos/240",
  id: "1",
  message: dataChat1,
  read: false,
}
export const dataMessages: MessageListProps[] = [dataMessage1, dataMessage2]

export const countUnRead = dataMessages.filter(
  (item) => item.read === false
).length
