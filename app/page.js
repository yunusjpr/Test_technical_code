"use client"
import axios from "axios";
import React, { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(null);
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    const val = e?.target?.value;
    if (/^[0-9\b]+$/.test(val)) {
      setNumber(e?.target?.value);
    } else if (val === "") {
      setNumber(null)
    }
  }

  const handleGenerateSegitiga = async () => {
    try {
      const data = await axios.post('/api/generate-segitiga', { number });
      setResult(data?.data?.data);
    } catch (error) {
      console.log(error)
    }
  }

  const handleGenerateGanjil = async () => {
    try {
      const data = await axios.post('/api/generate-ganjil', { number });
      setResult(data?.data?.data);
    } catch (error) {
      console.log(error)
    }
  }

  const handleGeneratePrima = async () => {
    try {
      const data = await axios.post('/api/generate-prima', { number });
      setResult(data?.data?.data);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-white">
      <div className="p-10 text-black">
        <input className="border px-5 py-2" placeholder="Input Angka" onChange={handleChange} value={number || ""}/>
        {!number && (<p className="text-red-500">Silahkan input angka</p>)}
        <div className="flex gap-5 my-5 rounded-md">
          <button disabled={!number} type="" className="bg-gray-200 px-5 py-2 rounded-md" onClick={handleGenerateSegitiga}>Generate Segitiga</button>
          <button disabled={!number} type="" className="bg-gray-200 px-5 py-2 rounded-md" onClick={handleGenerateGanjil}>Generate Bilangan Ganjil</button>
          <button disabled={!number} type="" className="bg-gray-200 px-5 py-2 rounded-md" onClick={handleGeneratePrima}>Generate Bilangan Prima</button>
        </div>
        <h2 className="text-3xl font-bold">Result:</h2>
        {result.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </main>
  );
}
