body {
  font-family: Arial, sans-serif;
  background: #f4f6ff;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin: 0;
}

.container {
  background: white;
  width: 92%;
  max-width: 450px;
  padding: 28px;
  border-radius: 18px;
  text-align: center;
  box-shadow: 0 0 18px rgba(0,0,0,0.1);
}

h1 {
  font-size: 22px;
  margin-bottom: 8px;
}

.sub {
  font-size: 14px;
  color: gray;
  margin-bottom: 22px;
}

.buttons {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

button {
  padding: 14px;
  font-size: 16px;
  border: none;
  border-radius: 12px;
  cursor: pointer;
  background: #6d7dff;
  color: white;
  transition: 0.2s;
}

button:hover {
  opacity: 0.85;
}

.hidden {
  display: none;
}

#progress {
  margin-top: 15px;
  font-size: 13px;
  color: gray;
}

#result-title {
  margin-top: 15px;
  font-size: 20px;
  color: #6d7dff;
}

#result-desc {
  margin-top: 12px;
  font-size: 15px;
  line-height: 1.6;
}

.result-tip {
  background: #f2f2ff;
  padding: 14px;
  border-radius: 12px;
  margin-top: 15px;
  font-size: 14px;
  color: #333;
}