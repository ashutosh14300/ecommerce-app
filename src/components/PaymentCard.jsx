export default function PaymentCard() {
  return (
    <div className="bg-white p-8 rounded shadow max-w-md mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4">Payment Details</h2>

      <input
        type="text"
        placeholder="Enter UPI ID"
        className="w-full border p-2 rounded"
      />

      <button className="bg-green-600 text-white w-full py-2 rounded mt-4">
        Pay Now
      </button>
    </div>
  );
}
