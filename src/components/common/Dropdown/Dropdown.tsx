import React, { useState } from 'react';

interface DropdownOption {
  value: string;
  label: string;
}

interface DropdownProps {
  options: DropdownOption[];
  onSelect?: (selectedValue: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, onSelect }:DropdownProps) => {
  const [selectedOption, setSelectedOption] = useState<string>('');

  const handleSelectOption = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSelectedOption(value);
    onSelect(value);
  };

  return (
    <select className="form-select" value={selectedOption} onChange={handleSelectOption}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
