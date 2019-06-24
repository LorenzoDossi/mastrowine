/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
const transitionDelay = 250

exports.shouldUpdateScroll = () => false

exports.onRouteUpdate = () =>
  window.setTimeout(() => window.scrollTo(0, 0), transitionDelay)