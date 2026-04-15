import React, { useEffect, useRef, useState } from 'react'
import './CaculatorNumber.css';
import Icon from '../../components/Icon';
import { dataBtn, type dataBtnType } from './typeCalculator';
import { getCurrentNumber } from './constants';

const CaculatorNumber = () => {
  const inputFocus = useRef<HTMLInputElement>(null);
  const [mode, setMode] = useState(false);
  const [inputValue, setInputValue] = useState<string>('');
  const currentNumber = getCurrentNumber(inputValue);

  const handleAddOperator = (data: any) => {
    const operators = ["+", "-", "*", "/"];
    if (data.value === "prefix") {
      setInputValue(prev => {
        if (prev === "") return "+";
        if (prev === "+") return "-";
        if (prev === "-") return "+";
        return prev;
      });
      return;
    }

    if (currentNumber === "") return;

    setInputValue(prev => {
      const lastChar = prev.slice(-1);
      if (prev === "" && ["*", "/"].includes(data.lable)) {
        return prev;
      }
      
      if (operators.includes(lastChar)) {
        return prev.slice(0, -1) + data.lable;
      }

      if (currentNumber === "") return prev;

      return prev + data.value;
    });
  }

  const handleAction = (data: dataBtnType) => {
    if (data.value === "delete") {
      setInputValue('');
      return;
    }
  }

  const handleNumber = (data: dataBtnType) => {
    if (currentNumber === '' && data.value === 0) {
      return;
    }
    setInputValue(prev => prev + String(data.value))
  }

  const handleClick = (value: dataBtnType) => {
    switch (value.type) {
      case "action":
        handleAction(value)
        return;
      case "operator":
        handleAddOperator(value)
        return;
      case "number":
        handleNumber(value)
        return;
    }
  }

  useEffect(() => {
    if (inputFocus.current) {
      inputFocus.current.focus();
    }
  }, []);

  return (
    <>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)'
      }}>
        <div style={{
          padding: '40px 20px',
          borderRadius: '14px',
          background: mode === true ? '#151515' : '#FFFFFF',
          color: mode === true ? '#FAFAFA' : '#4E4D4D',
          width: '390px',
          height: '750px',
          display: 'flex',
          flexDirection: 'column',
        }}>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '250px',
            borderBottom: '1px solid #aaa',
            paddingBottom: '12px',
          }}>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              paddingBottom: '8px',
            }}>
              <input
                value={inputValue}
                onChange={(e) => {

                  setInputValue(e.target.value)
                }}
                ref={inputFocus}
                className='inputCustomCal'
                style={{
                  background: mode === true ? '#151515' : '',
                  color: mode === true ? '#FAFAFA' : '#151515',
                }}
              />
              <span style={{
                alignSelf: 'flex-end',
                fontSize: '48px',
                color: '#969696',
              }}>21</span>
            </div>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
              <div style={{
                cursor: 'pointer',
              }}>
                <Icon name='history' size={24}/>
              </div>
              <div style={{
                cursor: 'pointer',
              }}>
                <Icon name='delete' size={24}/>
              </div>
            </div>
          </div>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            paddingTop: '12px',
            flex: 1,
          }}>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              height: '100%',
              gap: '20px',
            }}>
              {dataBtn.map(item => (
                <span 
                  style={{
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: '8px',
                    background: item.lable === 'C' ? '#FF5959' : mode === true ? '#343434' : '#F0F0F0',
                    fontSize: '26px',
                    color: item.type === "operator" ? "#66FF7F" : mode === true ? "#FAFAFA" : "#4E4D4D" ,
                  }}
                  onClick={() => handleClick(item)}
                >
                  {item.lable}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          cursor: 'pointer',
        }}
      >
        <Icon 
          name={mode === false ? 'night' : 'day'} 
          onClick={() => setMode(prev => !prev)}
        />
      </div>
    </>
  )
}

export default CaculatorNumber