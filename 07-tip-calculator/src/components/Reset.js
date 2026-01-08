function ResetBill({ onReset }) {
  return (
    <div>
      <button className="btn-reset" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default ResetBill;