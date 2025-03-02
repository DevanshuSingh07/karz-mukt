import ReactGA from "react-ga4";

// Replace with your actual GA4 Measurement ID
const GA_MEASUREMENT_ID = "G-G-5W307Y7FRB";

export const initGA = () => {
  ReactGA.initialize(GA_MEASUREMENT_ID);
};

// Track page views
export const logPageView = (url) => {
  ReactGA.send({ hitType: "pageview", page: url });
};

// Track custom events
export const logEvent = (category, action, label) => {
  ReactGA.event({ category, action, label });
};

// Track conversions
export const logConversion = (conversionId) => {
  ReactGA.gtag("event", "conversion", { send_to: conversionId });
};
