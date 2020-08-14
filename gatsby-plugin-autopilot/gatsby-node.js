exports.onPreInit = ({ reporter }, options) => {
  if (!options.trackingId) {
    reporter.warn(
      `The Autopilot plugin requires a tracking ID. Did you mean to add it?`,
    )
  }
}
