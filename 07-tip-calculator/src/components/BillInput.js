export default function BillInput({ bill, onSetBill }) {
  return (
    <div>
      <label>Bill Amount: </label>
      <input
        type="text"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
