import style from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={style.table}>
      <thead>
        <tr>
          <th className={style.tableTh}>Type</th>
          <th className={style.tableTh}>Amount</th>
          <th className={style.tableTh}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr key={id} className={style.tableItem}>
              <td className={style.tableTd}>{type}</td>
              <td className={style.tableTd}>{amount}</td>
              <td className={style.tableTd}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
