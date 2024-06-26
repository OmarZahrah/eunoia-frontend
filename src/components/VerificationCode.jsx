import { useState } from 'react';
import styled from 'styled-components';

function VerificationCode() {
  const [code, setCode] = useState(['', '', '', '']);

  const handleChange = (e, index) => {
    const newCode = [...code];
    newCode[index] = e.target.value;
    setCode(newCode);

    // Move to next input box
    if (e.target.value.length === 1 && index < code.length - 1) {
      document.getElementById(`code-input-${index + 1}`).focus();
    }
  };

  return (
    <CodeWrapper>
      <CodeContainer>
        {code.map((digit, index) => (
          <CodeInput
            key={index}
            id={`code-input-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleChange(e, index)}
          />
        ))}
      </CodeContainer>
    </CodeWrapper>
  );
}

export default VerificationCode;

const CodeWrapper = styled.div`
  padding-left: 5px; 
`;

const CodeContainer = styled.div`
  display: flex;
  gap: 29px;
  margin-bottom: 33px;
`;
const CodeInput = styled.input`
  width: 70px;
  height: 70px;
  font-weight: 350;
  text-align: center;
  font-size: 40px;
  font-family: Literata;
  color: #434040be;
  border: 1.4px solid #eeac98;
  border-radius: 3px;
  background-color: transparent;
  &:focus {
    outline: none;
    border-color: #888;
  }
`;
