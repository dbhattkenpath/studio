var _ = require('underscore');

/**
 * Track an event to analytics providers (e.g. Google Analytics, Mixpanel).
 *
 * @param {string} event_category Typically the object interacted with, e.g. 'Clipboard'
 * @param {string} event_action The type of interaction, e.g. 'Add item'
 * @param {object} event_data (Optional) Properties to include about the
 *     event, e.g. {title: 'Sparks Fly'}
 */
function track(event_category, event_action, event_data) {
  var event_data_string = "";
  if (_.isObject(event_data)) {
    event_data_string = JSON.stringify(event_data);
  }

  console.log(`Tracking analytics event "${event_category}: ${event_action}"`,
              ` ${event_data_string}`);

  ga(event_category, event_action, event_data_string);

  // TODO(davidhu): Uncomment this in the next PR that adds Mixpanel tracking
  //mixpanel.track(`${event_category}: ${event_action}`, event_data);
}

module.exports = {
  track: track
};
