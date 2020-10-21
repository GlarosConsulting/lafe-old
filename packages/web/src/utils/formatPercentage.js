export default function formatPercentage(percentage) {
  if (!percentage) {
    return undefined;
  }

  return `${(percentage * 100).toFixed(2)}%`;
}
