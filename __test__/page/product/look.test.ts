import { mount } from "@vue/test-utils"
import { describe, expect, test } from "vitest"
import { dataOrders } from "~/assets/example/transaction/dataOrder"
import { dataCompany } from "~/assets/example/user/dataCompany"
import PayIndex from "~/components/Page/Transaction/Pay/index.vue"
import PayMarket from "~/components/Page/Transaction/Pay/Market.vue"
import PayCustomer from "~/components/Page/Transaction/Pay/Customer.vue"
import PayDates from "~/components/Page/Transaction/Pay/Dates.vue"
import PayTable from "~/components/Page/Transaction/Pay/Table.vue"
import PayTotal from "~/components/Page/Transaction/Pay/Total.vue"
import Divider from "~/components/El/Divider.vue"
import Barcode from "~/components/El/QR/Barcode.vue"

describe("test product look", () => {
  test("it can be tested product look", async () => {
    const component = mount(PayIndex, {
      props: {
        data: { order: dataOrders[0], market: dataCompany },
      },
    })

    expect(component.findComponent(PayMarket).exists()).toBe(true)
    expect(component.findComponent(PayCustomer).exists()).toBe(true)
    expect(component.findComponent(PayDates).exists()).toBe(true)
    expect(component.findComponent(PayTable).exists()).toBe(true)
    expect(component.findComponent(PayTotal).exists()).toBe(true)
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
