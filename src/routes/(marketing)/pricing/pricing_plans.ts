export const defaultPlanId = "free"

export const pricingPlans = [
  {
    id: "free",
    name: "Free",
    description: "A free plan to get you started!",
    price: "$0",
    priceIntervalName: "per month",
    stripe_price_id: null,
    features: ["10 Recipe Buttons", "Fast Performance", "Wix Integration"],
  },
  {
    id: "pro",
    name: "Pro",
    description:
      "Unlimited Recipe Links and Clicks",
    price: "$5",
    priceIntervalName: "per month",
    stripe_price_id: "price_1NkdZCHMjzZ8mGZnRSjUm4yA",
    stripe_product_id: "prod_OXj1CcemGMWOlU",
    features: [
      "Infinite Links",
      "Support",
      "Wix Integration",
    ],
  },
  {
    id: "enterprise",
    name: "Pro Yearly",
    description:
      "Get your subscription at a discount",
    price: "$45",
    priceIntervalName: "per year",
    stripe_price_id: "price_1Nkda2HMjzZ8mGZn4sKvbDAV",
    stripe_product_id: "prod_OXj20YNpHYOXi7",
    features: [
      "Everything in Pro",
      "Discounted",
      "Wix Integration",
    ],
  },
]
