import React, { useState } from "react";

const App = () => {
  const [records, setRecords] = useState([]);
  const [date, setDate] = useState("");
  const [amount, setAmount] = useState("");
  const [units, setUnits] = useState("");

  const addRecord = () => {
    if (date && amount && units) {
      const newRecord = { date, amount: parseFloat(amount), units: parseFloat(units) };
      setRecords([...records, newRecord]);
      setDate("");
      setAmount("");
      setUnits("");
    } else {
      alert("请填写所有字段");
    }
  };

  const calculateTotal = () => {
    return records.reduce((total, record) => total + record.amount, 0);
  };

  return (
    <div className="App">
      <div className="p-6 max-w-xl mx-auto bg-white shadow-lg rounded-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center">基金定投记录工具</h1>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">定投日期</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="border-gray-300 border p-3 w-full rounded-md shadow-sm"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">投资金额</label>
          <input
            type="number"
            placeholder="输入金额"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="border-gray-300 border p-3 w-full rounded-md shadow-sm"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">基金份额</label>
          <input
            type="number"
            placeholder="输入份额"
            value={units}
            onChange={(e) => setUnits(e.target.value)}
            className="border-gray-300 border p-3 w-full rounded-md shadow-sm"
          />
        </div>
        <div className="flex justify-center mb-6">
          <button
            onClick={addRecord}
            className="bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600"
          >
            添加记录
          </button>
        </div>
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">定投记录</h2>
          {records.length > 0 ? (
            <ul className="list-disc pl-5">
              {records.map((record, index) => (
                <li key={index} className="mb-2">
                  {record.date} - 金额: {record.amount} - 份额: {record.units}
                </li>
              ))}
            </ul>
          ) : (
            <p>暂无定投记录</p>
          )}
        </div>
        <div>
          <h2 className="text-xl font-semibold">总投入金额: {calculateTotal()}</h2>
        </div>
      </div>
    </div>
  );
};


export default App;
