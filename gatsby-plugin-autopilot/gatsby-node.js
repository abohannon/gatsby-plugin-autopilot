exports.onPreInit = ({ reporter }, options) => {
  if (!options.apiUrl) {
    reporter.warn(
      `The Autopilot plugin requires a an api url. Did you mean to add it?`
    );
  }

  if (!options.trackingId) {
    reporter.warn(
      `The Autopilot plugin requires a tracking ID. Did you mean to add it?`
    );
  }
};
