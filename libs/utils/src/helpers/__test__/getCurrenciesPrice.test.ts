import getCurrenciesPrice from "../getCurrenciesPrice";

describe("getCurrenciesPrice function", () => {
  it("should return combination between currencies and prices that have the same pair", () => {
    const dummyCurrencyData = {
      code: "dummy-code",
      message: "dummy-message",
      payload: [
        {
          currencyGroup: "btc",
          color: "#FFFFFF",
          currencySymbol: "Rp",
          name: "dummy-name",
          logo: "dummy-logo",
          decimal_point: 0,
          listingDate: "2020-03-11T15:13:52.000Z",
          wallets: [],
        },
      ],
    };
    const dummyPricesData = {
      code: "dummy-code",
      message: "dummy-message",
      payload: [
        {
          pair: "btc-pair",
          latestPrice: "dummy-latestPrice",
          day: "dummy-day",
          week: "dummy-week",
          month: "dummy-month",
          year: "dummy-year",
        },
        {
          pair: "btc-pair2",
          latestPrice: "dummy-latestPrice2",
          day: "dummy-da2y",
          week: "dummy-week2",
          month: "dummy-month2",
          year: "dummy-year2",
        },
      ],
    };

    const currenciesPriceData = [
      {
        ...dummyCurrencyData.payload[0],
        ...dummyPricesData.payload[0],
      },
    ];

    expect(getCurrenciesPrice(dummyCurrencyData, dummyPricesData)).toEqual(
      currenciesPriceData
    );
  });
});
