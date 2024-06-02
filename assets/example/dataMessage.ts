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
  {
    name: "Emily",
    msg: "bright smooth uncle soft lying share duck yard alive caught flight ring broke monkey yesterday street quiet accident notice particular ground improve pencil post",
    time: "14:30",
    left: true,
    id: "5",
  },
  {
    name: "Michael",
    msg: "oil central wire develop select enter snake spend lose length solve feel sound tiny ice experiment see bread drive gain strike central addition bread",
    time: "16:45",
    left: false,
    id: "6",
  },
  {
    name: "Sarah",
    msg: "remember climb foot spider call nation serve value race complex board idea wing stone subject month east split consonant electric final wing noise leg",
    time: "18:20",
    left: true,
    id: "7",
  },
  {
    name: "David",
    msg: "fact tree knew chosen beauty monkey proud wild mark separate space sense imagine oil stem company ship basic spend still figure wire twelve yellow",
    time: "12:15",
    left: false,
    id: "8",
  },
  {
    name: "Laura",
    msg: "type mirror meal get act ahead leave result wave cat noise current write bet happen cap wish entire hat dinner pen mark forgot race",
    time: "22:10",
    left: true,
    id: "9",
  },
  {
    name: "James",
    msg: "sign addition catch village worry wet fell final bend receive add itself sat ear original stay hill guard entire glass save paint mass middle",
    time: "08:50",
    left: false,
    id: "10",
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
