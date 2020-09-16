
export default function formatCurrency(price) {
      return "$" + Number(parseInt(price).toLocaleString()) + "  ";
}