export function setSubscriptions (match, subscription) {
  return {
    type: "SUBSCRIBE",
    match: match,
    subscription: subscription
  }
}