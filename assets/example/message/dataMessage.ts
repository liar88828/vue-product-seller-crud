import type { MessageContact, MessageList } from "~/types/message/message"
import type { NotifyMessage } from "~/types/message/notify"
export const dataChat1: MessageList[] = [
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
  {
    name: "Alex",
    msg: "lorem ipsum depend baseball buffalo biggest belt ability grass independent curious tape buy broken beyond very crowd shinning teeth trick better engineer stems slip do cent field",
    time: new Date(),
    id: "3",
  },
  {
    name: "John",
    msg: "clean flies pull too cross spell butter ruler read immediately like very camp perfect scientific fine attached station captured happened troops depend wild result",
    time: new Date(),
    id: "4",
  },
  {
    name: "Emily",
    msg: "bright smooth uncle soft lying share duck yard alive caught flight ring broke monkey yesterday street quiet accident notice particular ground improve pencil post",
    time: new Date(),
    id: "5",
  },
  {
    name: "Michael",
    msg: "oil central wire develop select enter snake spend lose length solve feel sound tiny ice experiment see bread drive gain strike central addition bread",
    time: new Date(),
    id: "6",
  },
  {
    name: "Sarah",
    msg: "remember climb foot spider call nation serve value race complex board idea wing stone subject month east split consonant electric final wing noise leg",
    time: new Date(),

    id: "7",
  },
  {
    name: "David",
    msg: "fact tree knew chosen beauty monkey proud wild mark separate space sense imagine oil stem company ship basic spend still figure wire twelve yellow",
    time: new Date(),
    id: "8",
  },
  {
    name: "Laura",
    msg: "type mirror meal get act ahead leave result wave cat noise current write bet happen cap wish entire hat dinner pen mark forgot race",
    time: new Date(),
    id: "9",
  },
  {
    name: "James",
    msg: "sign addition catch village worry wet fell final bend receive add itself sat ear original stay hill guard entire glass save paint mass middle",
    time: new Date(),
    id: "10",
  },
]
export const dataMessage1: MessageContact = {
  name: "Alex",
  time: new Date(),
  msg: dataChat1[0].msg,
  id: "1",
  read: true,
  message: [],
  img: "https://picsum.photos/200",
}

export const dataMessage2: MessageContact = {
  name: "John",
  time: new Date(),
  msg: dataChat1[1].msg,
  img: "https://picsum.photos/240",
  id: "1",
  message: dataChat1,
  read: false,
}
export const dataMessages: MessageContact[] = [dataMessage1, dataMessage2]

export const countUnRead = dataMessages.filter(
  (item) => item.read === false
).length

const dataNotify: NotifyMessage = {
  type: "Message",
  name: "John",
  link: "/message/1",
  time: new Date(),
  id: "1",
  read: false,
  img: "https://picsum.photos/63",
  msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}
const dataTransaction: NotifyMessage = {
  type: "Transaction",
  name: "Alex",
  link: "/product/look/1",
  time: new Date(),
  id: "2",
  read: false,
  img: "https://picsum.photos/18",
  msg: "Your order has been confirmed",
}

const dataTransactionSuccess: NotifyMessage = {
  type: "Transaction",
  name: "Alex",
  link: "/product/look/1",
  time: new Date(),
  id: "7",
  read: false,
  img: "https://picsum.photos/87",
  msg: "Your order has been taken",
}

const dataConfirmProduct: NotifyMessage = {
  type: "Confirm",
  name: "Sarah",
  link: "/market/confirm",
  time: new Date(),
  id: "4",
  read: false,
  img: "https://picsum.photos/6",
  msg: "Confirm product order",
}

export const dataNotifies: NotifyMessage[] = [
  dataNotify,
  dataTransaction,
  dataTransactionSuccess,
  dataConfirmProduct,
]

export const dataNotifyExample: NotifyMessage = {
  type: "Message",
  name: "John",
  link: "/message/1",
  time: new Date(),
  id: "1",
  read: false,
  img: "https://picsum.photos/63",
  msg: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}
