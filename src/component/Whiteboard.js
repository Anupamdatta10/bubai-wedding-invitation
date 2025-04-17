// src/components/Whiteboard.js
import React, { useRef, useState, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';
import { FaEraser, FaPen, FaTextHeight } from 'react-icons/fa';
import './css/Whiteboard.css'; // Create styles for better visualization

const Whiteboard = () => {
  const canvasRef = useRef(null);
  const ctxRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [color, setColor] = useState('#000000');
  const [lineWidth, setLineWidth] = useState(5);
  const [mode, setMode] = useState('draw'); // Can be 'draw', 'erase', or 'text'
  const [text, setText] = useState('');
  const [showColorPicker, setShowColorPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.8;
    canvas.height = window.innerHeight * 0.6;
    canvas.style.width = `${canvas.width}px`;
    canvas.style.height = `${canvas.height}px`;

    const ctx = canvas.getContext('2d');
    ctx.lineCap = 'round';
    ctxRef.current = ctx;
  }, []); // Initialize canvas only once

  useEffect(() => {
    if (ctxRef.current) {
      ctxRef.current.strokeStyle = color;
      ctxRef.current.lineWidth = lineWidth;
    }
  }, [color, lineWidth]); // Update only strokeStyle and lineWidth when dependencies change

  const startDrawing = (e) => {
    if (mode === 'text') return;
    ctxRef.current.beginPath();
    ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setDrawing(true);
  };

  const draw = (e) => {
    if (!drawing) return;
    ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctxRef.current.stroke();
  };

  const stopDrawing = () => {
    ctxRef.current.closePath();
    setDrawing(false);
  };

  const handleErase = () => {
    setMode('erase');
    ctxRef.current.globalCompositeOperation = 'destination-out';
  };

  const handleDraw = () => {
    setMode('draw');
    ctxRef.current.globalCompositeOperation = 'source-over';
  };

  const handleTextInput = (e) => {
    const canvas = canvasRef.current;
    const ctx = ctxRef.current;
    ctx.font = '20px Arial';
    ctx.fillStyle = color;
    ctx.fillText(text, e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setText('');
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    ctxRef.current.clearRect(0, 0, canvas.width, canvas.height);
  };

  const updateCursor = (e) => {
    setCursorPosition({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      className="whiteboard-container"
      onMouseMove={updateCursor} // Track mouse movement
    >
      <div
        className="custom-cursor"
        style={{
          left: cursorPosition.x,
          top: cursorPosition.y,
          backgroundColor: mode === 'erase' ? '#ffffff' : color, // White for eraser
          width: `${lineWidth}px`,
          height: `${lineWidth}px`,
          borderRadius: mode === 'erase' ? '0%' : '50%', // Square for eraser, circle otherwise
          border: mode === 'erase' ? '1px solid #000' : 'none', // Black border for eraser
        }}
      />
      <div className="controls">
        <button onClick={() => setShowColorPicker(!showColorPicker)}>
          Toggle Color Picker
        </button>
        <button onClick={handleDraw}>
          <FaPen /> Draw
        </button>
        <button onClick={handleErase}>
          <FaEraser /> Erase
        </button>
        <button onClick={() => setMode('text')}>
          <FaTextHeight /> Text
        </button>
        <button onClick={clearCanvas}>Clear</button>
        <div>
          <label>Line Width: </label>
          <input
            type="range"
            min="1"
            max="20"
            value={lineWidth}
            onChange={(e) => setLineWidth(e.target.value)}
          />
        </div>
        {mode === 'text' && (
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text and click on canvas"
          />
        )}
      </div>
      {showColorPicker && (
        <div className="color-picker">
          <HexColorPicker color={color} onChange={setColor} />
        </div>
      )}
      <canvas
        ref={canvasRef}
        onMouseDown={mode === 'text' ? handleTextInput : startDrawing}
        onMouseUp={stopDrawing}
        onMouseMove={draw}
        className="whiteboard-canvas"
      />
    </div>
  );
};

export default Whiteboard;
