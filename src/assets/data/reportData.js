export const reportData = {
  company: "Vadilal Enterprises Ltd.",
  ticker: "BSE: 519152",
  profile: {
    sector: "Food Products (Dairy)",
    industry: "Ice Cream & Frozen Desserts",
    mktCap: "₹862.58 Cr",
    highLow52: "₹14,620.55 / ₹7,800.00",
    basicIndustry: "Dairy Products",
    macroIndicator: "Fast Moving Consumer Goods"
  },
  lastRevenue: 1119.12,
  financials: {
    years: ["2021", "2022", "2023", "2024", "2025", "2026F", "2027F", "2028F", "2029F", "2030F"],
    revenue: [340.15, 547.50, 930.09, 999.14, 1119.12, 1233.83, 1360.30, 1499.73, 1653.45, 1822.93],
    ebitda: [16.91, 21.00, 25.95, 29.89, 35.00, 43.70, 45.00, 46.00, 46.24, 46.24],
    ebitdaMargin: [4.9, 3.8, 2.8, 3.0, 3.1, 3.5, 3.3, 3.1, 2.8, 2.5],
    grossMargin: [30.5, 23.5, 20.3, 22.3, 23.1, 25.0, 25.0, 25.0, 25.0, 25.0],
    pat: [2.19, 3.00, 8.60, 7.51, 5.73, 18.88, 18.13, 16.93, 15.19, 12.76],
    capex: [13.27, 11.74, 7.58, 37.48, 46.21, 50.00, 50.00, 50.00, 50.00, 50.00]
  },
  valuation: {
    marketCap: 862,
    targetPrice: 916.93,
    currentPrice: 9999,
    upside: -0.91
  },
  swot: {
    strengths: ["100-year brand legacy", "15-16% market share", "Professionalized management", "Deep freezer network"],
    weaknesses: ["Thin distributor margins", "High debt (14.1% interest)", "Low liquidity"],
    opportunities: ["Q-Commerce growth", "Premiumization (Gourmet Natural)", "Global milk price cooling"],
    threats: ["Amul price leadership", "HUL Kwality Wall's demerger", "Seasonality risks"]
  },
  pestle: {
    political: "FDI liberalization in retail; Food processing subsidies.",
    economic: "Rising disposable income; Volatile SMP (Skimmed Milk Powder) prices.",
    social: "Shift to 'Clean Label' and Gourmet ice creams; Q-Comm impulse buying.",
    technological: "Cold chain automation; AI-driven inventory for 10-min delivery.",
    legal: "Brand IP settlement (2025); GST compliance on dairy products.",
    environmental: "Pressure to reduce plastic packaging; HCFC-free refrigeration."
  },
  vrio: [
    { resource: "Brand Legacy (100yr)", v: true, r: true, i: true, o: true, status: "Sustained Advantage" },
    { resource: "Distribution Network", v: true, r: true, i: false, o: true, status: "Temp. Advantage" },
    { resource: "DCF Models", v: true, r: false, i: false, o: true, status: "Comp. Parity" },
    { resource: "IP Settlement", v: true, r: true, i: true, o: true, status: "Sustained Advantage" }
  ],
  peerComparison: [
    { name: "Vadilal", mktCap: "₹862 Cr", revGrowth: "12%", segment: "Premium/Mass" },
    { name: "Amul (GCMMF)", mktCap: "₹34,160 Cr*", revGrowth: "11%", segment: "Value/Mass" },
    { name: "Kwality Wall's", mktCap: "₹1,595 Cr**", revGrowth: "flat", segment: "Frozen Dessert" },
    { name: "Havmor", mktCap: "₹1,750 Cr***", revGrowth: "14%", segment: "Premium" }
  ],
  marketTension: {
    segment: "The 'Frozen Dessert' vs 'Ice Cream' battle intensifies as Vadilal pivots to 100% Pure Milk for its premium range.",
    sector: "Dairy sector is undergoing a massive shift from loose milk to value-added products like ice cream and cheese.",
    industry: "Q-Commerce is the new battleground; companies are fighting for precious slot visibility on Blinkit and Zepto."
  },
  sources: ["Moneycontrol", "Screener.in", "BSE India", "Trendlyne", "Company Annual Reports FY21-25", "*GCMMF Brand Valuation", "**HUL Ice Cream Segment Turnover", "***Merged Entity Expected Revenue"],
  investmentThesis: [
    { title: "Governance Pivot", desc: "2025 settlement resolves decade-long deadlock, securing brand IP." },
    { title: "Q-Commerce Boost", desc: "Blinkit/Zepto removing seasonality, turning ice cream into year-round impulse buy." },
    { title: "Professionalization", desc: "Family stepping down for independent executive leadership." }
  ],
  verdict: {
    purpose: "This report aims to demystify the institutional transformation of Vadilal Enterprises. By combining deep quantitative DCF modeling with qualitative governance analysis, we highlight why this legacy brand is currently at a multi-decade inflection point.",
    call: "ACCUMULATE",
    rationale: "The resolution of brand IP disputes combined with a massive Q-Commerce tailwind creates an asymmetrical risk-reward profile. While the price has run up, the intrinsic fundamental value remains protected by a 100-year brand moat.",
    horizon: "12-18 Months"
  }
};
