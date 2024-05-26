export const useStyle = () => {
  const route = useRoute()

  const getStatus = (text: string) => {
    if (text === "Waiting") {
      return "btn btn-primary btn-outline sm:btn-sm btn-xs active"
    }
    if (text === "Pending") {
      return "btn btn-warning btn-outline sm:btn-sm btn-xs active"
    }
    if (text === "Delivered") {
      return "btn btn-success btn-outline sm:btn-sm btn-xs active"
    }
    if (text === "Cancelled") {
      return "btn btn-error btn-outline sm:btn-sm btn-xs active"
    }
  }

  const getHidden = (text: string, option: boolean = true) => {
    if (option === true) {
      return route.path.includes(text) ? "hidden" : ""
    } else if (option === false) {
      return !route.path.includes(text) ? "hidden" : ""
    }
    return ""
  }

  const getActive = (text: string, styles: string) => {
    return route.path.includes(text) ? styles : ""
  }
  const getMultiCon = ({
    // = ["shop", "sell"]
    array,
    con1 = "hidden",
    con2 = "hidden sm:block",
  }: {
    array: string[]
    con1: string
    con2: string
  }) => {
    // const hiddenList
    function isShopOrSellRoute() {
      const paths = route.path
      return array.some((segment) => paths.includes(segment))
    }
    // console.log(isShopOrSellRoute())
    return isShopOrSellRoute() ? con1 : con2
  }

  return { getStatus, getHidden, getActive, getMultiCon }
}
