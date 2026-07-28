"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FaXmark, FaCheck } from 'react-icons/fa6';

export default function ApplicationModal({ isOpen, onClose }) {
  const [step, setStep] = useState(0);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    academicYear: '',
    subjects: [],
    hours: '',
    parentName: '',
    phone: '',
    studentName: ''
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (!isOpen) return null;

  const academicYears = [
    "Year 3", "Year 4", "Year 5", "Year 6", "Year 7", "Year 8", "Year 9", "Year 10", "Year 11 (GCSE)", "Year 12"
  ];

  const availableSubjects = [
    "Mathematics",
    "English",
    "Science",
    "Computing"
  ];

  const availableHours = [
    { hours: 6, label: "6 Hours" },
    { hours: 12, label: "12 Hours" },
    { hours: 20, label: "20 Hours" }
  ];

  const questions = [
    { key: 'email', label: 'What is your email address?' },
    { key: 'academicYear', label: "What academic year is your child entering?" },
    { key: 'subjects', label: 'Select subjects for the 6-week programme:' },
{ key: 'hours', label: "Select the total number of sessions or hours your child needs for the program" },
    { key: 'parentName', label: "What is your full name (Parent/Guardian)?" },
    { key: 'phone', label: 'What is your phone number?' },
  ];

  const numericHours = formData.hours ? Number(formData.hours) : 0;
  const totalPrice = numericHours * 25;

  const handleSubjectToggle = (subject) => {
    let updatedSubjects;
    if (formData.subjects.includes(subject)) {
      updatedSubjects = formData.subjects.filter(s => s !== subject);
    } else {
      updatedSubjects = [...formData.subjects, subject];
    }
    setFormData({ ...formData, subjects: updatedSubjects });
    if (error) setError('');
  };

  const handleNext = () => {
    const currentKey = questions[step].key;
    
    if (currentKey === 'subjects') {
      if (formData.subjects.length === 0) {
        setError('Please select at least one subject.');
        return;
      }
    } else if (currentKey === 'hours') {
      if (!formData.hours) {
        setError('Please select your preferred number of hours.');
        return;
      }
    } else {
      if (!formData[currentKey] || formData[currentKey].trim() === '') {
        setError('This field is required.');
        return;
      }
    }
    
    if (currentKey === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError('Please enter a valid email address.');
        return;
      }
    }

    if (currentKey === 'phone') {
      const phoneRegex = /^[0-9+ ]+$/;
      if (!phoneRegex.test(formData.phone)) {
        setError('Please enter a valid phone number.');
        return;
      }
    }
    
    setError('');
    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    setError('');
    if (step > 0) setStep(step - 1);
  };

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/apply', {
        method: 'POST',
        body: JSON.stringify({ ...formData, totalPrice }),
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        router.push('/thank-you');
      } else {
        setError("Something went wrong. Please try again.");
        setLoading(false);
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="bg-white w-full max-w-lg p-5 sm:p-8 rounded-none shadow-2xl border border-slate-200 relative my-auto max-h-[85vh] flex flex-col">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-9 h-9 bg-slate-100 hover:bg-slate-200 text-slate-700 flex items-center justify-center transition-all z-10"
        >
          <FaXmark className="w-4 h-4" />
        </button>

        {/* Progress Bar */}
        <div className="flex gap-1 mb-6 mt-1">
          {questions.map((_, index) => (
            <div 
              key={index} 
              className={`h-1.5 flex-1 rounded-none transition-all duration-500 ${
                index <= step ? 'bg-blue-600' : 'bg-slate-200'
              }`} 
            />
          ))}
        </div>

        <div className="space-y-4 overflow-y-auto pr-1">
          <div>
            <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 mb-1 block">
              Step {step + 1} of {questions.length}
            </span>
            <label className="block text-lg sm:text-xl font-black text-slate-900 mb-3 tracking-tight">
              {questions[step].label}
              <span className="text-blue-600 ml-1">*</span>
            </label>
            
            {questions[step].key === 'academicYear' ? (
              <select
                value={formData.academicYear}
                onChange={(e) => {
                  setFormData({...formData, academicYear: e.target.value});
                  if (error) setError('');
                }}
                className="w-full p-3 sm:p-3.5 text-sm sm:text-base font-semibold border-2 border-slate-200 rounded-none focus:border-blue-600 outline-none bg-white text-slate-900"
              >
                <option value="">Select academic year</option>
                {academicYears.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            ) : questions[step].key === 'subjects' ? (
              <div className="space-y-3">
                <div className="grid grid-cols-1 gap-2.5">
                  {availableSubjects.map(subject => {
                    const isSelected = formData.subjects.includes(subject);
                    return (
                      <button
                        key={subject}
                        type="button"
                        onClick={() => handleSubjectToggle(subject)}
                        className={`p-3.5 text-left border-2 rounded-none transition-all flex items-center justify-between font-bold text-sm ${
                          isSelected 
                            ? 'border-blue-600 bg-blue-50/50 text-slate-900 shadow-sm' 
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span>{subject}</span>
                        <div className={`w-5 h-5 border flex items-center justify-center ${isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300'}`}>
                          {isSelected && <FaCheck className="w-3 h-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            ) : questions[step].key === 'hours' ? (
              <div className="space-y-3">
                <div className="grid grid-cols-1 gap-2.5">
                  {availableHours.map(item => {
                    const isSelected = Number(formData.hours) === item.hours;
                    return (
                      <button
                        key={item.hours}
                        type="button"
                        onClick={() => {
                          setFormData({ ...formData, hours: String(item.hours) });
                          if (error) setError('');
                        }}
                        className={`p-3.5 text-left border-2 rounded-none transition-all flex items-center justify-between font-bold text-sm ${
                          isSelected 
                            ? 'border-blue-600 bg-blue-50/50 text-slate-900 shadow-sm' 
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <div>
                          <span>{item.label}</span>
                          <span className="block text-xs font-semibold text-slate-500 mt-0.5">£25 per hour or session (schedules are flixible)</span>
                        </div>
                        <div className={`w-5 h-5 border flex items-center justify-center shrink-0 ${isSelected ? 'bg-blue-600 border-blue-600 text-white' : 'border-slate-300'}`}>
                          {isSelected && <FaCheck className="w-3 h-3" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
                
                <div className="bg-slate-50 p-3.5 border border-slate-200 flex items-center justify-between mt-3">
                  <div>
                    <p className="text-[11px] font-semibold text-slate-500 uppercase tracking-wide">Selected Hours: {formData.hours || 0}</p>
                    <p className="text-base font-black text-slate-900">Total: £{totalPrice}</p>
                  </div>
                  <p className="text-[11px] font-bold text-blue-700">£25 / session (1 hour)</p>
                </div>
              </div>
            ) : (
              <input 
                key={questions[step].key}
                type={questions[step].key === 'phone' ? 'tel' : (questions[step].key === 'email' ? 'email' : 'text')}
                value={formData[questions[step].key]}
                onChange={(e) => {
                  if (questions[step].key === 'phone') {
                    const input = e.target.value;
                    const val = input.replace(/[^0-9+ ]/g, '');
                    setFormData({...formData, phone: val});
                  } else {
                    setFormData({...formData, [questions[step].key]: e.target.value});
                  }
                  if(error) setError('');
                }}
                placeholder={
                  questions[step].key === 'email' ? 'e.g. sarah@example.com' :
                  questions[step].key === 'parentName' ? 'e.g. Sarah Jenkins' :
                  questions[step].key === 'phone' ? 'e.g. +44 7123 456789' :
                  "e.g. Oliver Jenkins"
                }
                className={`w-full p-3 sm:p-3.5 text-sm sm:text-base font-semibold border-2 rounded-none outline-none transition-all text-slate-900 ${
                  error ? 'border-red-500 bg-red-50' : 'border-slate-200 focus:border-blue-600'
                }`}
                autoFocus
              />
            )}
            
            {error && <p className="text-red-500 text-xs sm:text-sm mt-2 font-bold">{error}</p>}
          </div>
          
          <div className="flex gap-3 pt-2">
            {step > 0 && (
              <button 
                onClick={handleBack} 
                className="w-1/3 bg-slate-100 hover:bg-slate-200 text-slate-700 py-3.5 rounded-none font-bold text-sm transition-all"
              >
                Back
              </button>
            )}
            <button 
              onClick={handleNext} 
              disabled={loading}
              className={`${step > 0 ? 'w-2/3' : 'w-full'} bg-[#FBBF24] hover:bg-[#f5b31f] text-slate-900 py-3.5 rounded-none font-black text-sm shadow-lg transition-all flex items-center justify-center gap-2`}
            >
              {loading ? "Submitting..." : (step === questions.length - 1 ? `Submit (£${totalPrice})` : 'Next Step →')}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}