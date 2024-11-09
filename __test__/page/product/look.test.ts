import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import { dataOrders } from "~/assets/example/transaction/dataOrder"
import { dataCompany } from "~/assets/example/user/dataCompany"
import DetailIndex from "~/components/Page/Transaction/Detail/index.vue"
import DetailMarket from "~/components/Page/Transaction/Detail/MarketQr.vue"
import DetailCustomer from "~/components/Page/Transaction/Detail/Customer.vue"
import DetailDates from "~/components/Page/Transaction/Detail/Dates.vue"
import DetailTable from "~/components/Page/Transaction/Detail/Table.vue"
import DetailTotal from "~/components/Page/Transaction/Detail/Total.vue"
import Divider from "~/components/El/Divider.vue"
import Barcode from "~/components/El/QR/Barcode.vue"

describe("test product look", () => {
  test("it can be tested product look", async () => {
    const component = mount(DetailIndex, {
      props: {
        data: { order: dataOrders[0], market: dataCompany },
      },
    })

    expect(component.findComponent(DetailMarket).exists()).toBe(true)
    expect(component.findComponent(DetailCustomer).exists()).toBe(true)
    expect(component.findComponent(DetailDates).exists()).toBe(true)
    expect(component.findComponent(DetailTable).exists()).toBe(true)
    expect(component.findComponent(DetailTotal).exists()).toBe(true)
    expect(component.findComponent(Divider).exists()).toBe(true)
    expect(component.findComponent(Barcode).exists()).toBe(true)

    expect(component.text()).toContain("Total Product")
    expect(component.text()).toContain("Discount")
    expect(component.text()).toContain("Total Pay")
    expect(component.text()).toContain("Save Image")
    expect(component.text()).not.toContain("product_2")
    expect(component.text()).not.toContain("false")
  })
})
