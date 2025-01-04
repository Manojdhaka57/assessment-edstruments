export const breakpointSize = {
  tablet: 768,
  laptop: 992,
  desktop: 1200,
};
export const devices = {
  sMobile: `(max-width: 480px)`,
  mobile: `(max-width: ${breakpointSize.tablet}px)`,
  tablet: `(min-width: ${breakpointSize.tablet}px) and (max-width:${breakpointSize.laptop}px)`,
  laptop: `(min-width: ${breakpointSize.laptop}px) and (max-width:${breakpointSize.desktop}px)`,
  desktop: `(min-width: ${breakpointSize.desktop}px)`,
};

export const ROUTES = {
  LOGIN: '/login',
  VENDOR_DETAILS: '/vendor-details',
};
