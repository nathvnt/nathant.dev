import React, { useState } from 'react';
import { Line, Bar } from 'react-chartjs-2';
import { FaEyeSlash, FaRegEye } from 'react-icons/fa';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  LineElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  BarElement,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
  Legend,
  BarElement
);

const PasswordEntropyCalculator = () => {
  const [password, setPassword] = useState('');
  const [entropy, setEntropy] = useState(0);
  const [crackingTime, setCrackingTime] = useState('');
  const [entropyHistory, setEntropyHistory] = useState([]);
  const [charCounts, setCharCounts] = useState({ lowercase: 0, uppercase: 0, digits: 0, special: 0 });
  const [showPassword, setShowPassword] = useState(false);

  const calculateEntropy = (password) => {
    const charSetSize = getCharSetSize(password);
    const entropy = password.length * Math.log2(charSetSize);
    return entropy;
  };

  const getCharSetSize = (password) => {
    let size = 0;
    let counts = { lowercase: 0, uppercase: 0, digits: 0, special: 0 };

    if (/[a-z]/.test(password)) {
      size += 26;
      counts.lowercase = password.match(/[a-z]/g)?.length || 0;
    }
    if (/[A-Z]/.test(password)) {
      size += 26;
      counts.uppercase = password.match(/[A-Z]/g)?.length || 0;
    }
    if (/[0-9]/.test(password)) {
      size += 10;
      counts.digits = password.match(/[0-9]/g)?.length || 0;
    }
    if (/[^a-zA-Z0-9]/.test(password)) {
      size += 32;
      counts.special = password.match(/[^a-zA-Z0-9]/g)?.length || 0;
    }

    setCharCounts(counts);
    return size;
  };

  const calculateCrackingTime = (entropy) => {
    const attempts = Math.pow(2, entropy);
    const attemptsPerSecond = 1e9;
    const years = attempts / attemptsPerSecond / 60 / 60 / 24 / 365;
    return `${years < 1 ? '<1' : years.toFixed(2)} years`;
  };

  const handleInputChange = (e) => {
    const input = e.target.value;
    setPassword(input);

    if (input === '') {
      setEntropyHistory([]);
      setEntropy(0);
      setCrackingTime('');
    } else {
      const calculatedEntropy = calculateEntropy(input);
      setEntropy(calculatedEntropy);
      setCrackingTime(calculateCrackingTime(calculatedEntropy));
      setEntropyHistory([{ x: input.length, y: calculatedEntropy }]);
    }
  };

  const entropyData = {
    datasets: [
      {
        label: 'Password Entropy (Bits)',
        data: entropyHistory,
        fill: false,
        borderColor: 'rgba(75, 192, 192, 1)',
        tension: 0.1,
      },
    ],
  };

  const entropyOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'linear',
        title: {
          display: true,
          text: 'Password Length',
        },
        beginAtZero: true,
      },
      y: {
        title: {
          display: true,
          text: 'Entropy (Bits)',
        },
        beginAtZero: true,
      },
    },
  };

  const charData = {
    labels: ['Lowercase', 'Uppercase', 'Digits', 'Special'],
    datasets: [
      {
        label: 'Character Type Count',
        data: [charCounts.lowercase, charCounts.uppercase, charCounts.digits, charCounts.special],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const charOptions = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Count',
        },
      },
    },
  };

  return (
<div className="w-[100%] flex flex-col mx-auto p-2 rounded-md bg-black bg-opacity-65 dark:bg-slate-300 dark:bg-opacity-15 border-2 border-emerald-600 text-black">

  <h2 className='text-emerald-600 text-center p-1 my-2 text-lg lg:text-2xl'>Password Entropy Calculator</h2>

  <p className='text-white text-center text-[12px] lg:text-[16px] p-1 lg:w-[70%] mx-auto mt-2 mb-6'>
    Password entropy measures a password's strength based on the number of attempts it would take to be guessed using brute-force methods. 
    This works by calculating the uniqueness or randomness of a given set of characters, thus quantifying how unpredictable the password is. 
    Higher entropy indicates a more complex password, making it exponentially harder to crack.
  </p>

  <label className="text-emerald-600 text-sm lg:text-base text-center mb-2">
    Enter a password you would like to test
  </label>

  <div className="relative w-[95%] lg:w-[60%] mx-auto mb-6">
    <input
      type={showPassword ? 'text' : 'password'}
      placeholder="Enter a password"
      value={password}
      className="p-1 w-full rounded-md bg-white border border-gray-400 text-base outline-none focus:ring-2 focus:ring-emerald-600 shadow-md"
      onChange={handleInputChange}
    />
    <span
      className="absolute right-3 top-2 cursor-pointer text-black"
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <FaEyeSlash /> : <FaRegEye />}
    </span>
  </div>

  <div className='text-white text-center p-1 mb-2 text-[14px] lg:text-[18px] font-semibold lg:w-[70%] mx-auto'>
    <p>Entropy: {entropy.toFixed(2)} bits</p>
    <p>Estimated cracking time: {crackingTime}</p>
  </div>

  {/* Graphs */}
  <div className='lg:flex mb-10 justify-center gap-6'>
    <div className="relative mt-6 w-[95%] mx-auto lg:w-[60%] xl:w-[40%]">
      <Line data={entropyData} options={entropyOptions} />
    </div>
    <div className="relative mt-6 w-[95%] mx-auto lg:w-[60%] xl:w-[40%]">
      <Bar data={charData} options={charOptions} />
    </div>
  </div>

</div>

  );
};

export default PasswordEntropyCalculator;
