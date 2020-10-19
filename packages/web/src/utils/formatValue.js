export default function formatValue(str) {
  if (!str) {
    return undefined;
  }

  return Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(str);
}
