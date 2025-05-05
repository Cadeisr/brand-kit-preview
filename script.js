:root {
  --brand-color: #7b4de7;
}

body {
  margin: 0;
  font-family: 'DM Sans', sans-serif;
  background: radial-gradient(ellipse at top left, #1c1b29, #0f0e17);
  color: #fff;
  display: flex;
  justify-content: center;
  padding: 40px 0;
}

main {
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
  max-width: 1200px;
  width: 100%;
  justify-content: center;
}

.editor-panel {
  background: rgba(30, 30, 40, 0.9);
  border-radius: 20px;
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.3);
  padding: 32px;
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: sticky;
  top: 40px;
  height: fit-content;
}

.editor-panel input, .editor-panel button {
  padding: 12px;
  font-size: 16px;
  border-radius: 10px;
  border: none;
  outline: none;
}

.editor-panel input[type="color"] {
  height: 50px;
  cursor: pointer;
  padding: 0;
  border: 2px solid #444;
}

.editor-panel button {
  background: var(--brand-color);
  color: #fff;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;
}

.editor-panel button:hover {
  box-shadow: 0 6px 16px rgba(123, 77, 231, 0.4);
  transform: translateY(-2px);
}

.preview-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  gap: 32px;
  flex: 1;
}

.card {
  background: rgba(40, 40, 50, 0.85);
  border-radius: 20px;
  padding: 32px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.card:hover {
  transform: translateY(-4px) rotateX(1deg) rotateY(-1deg);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.5);
}

.fade {
  opacity: 0;
  transform: translateY(40px);
  animation: fadeInUp 0.6s ease forwards;
}

.card:nth-child(1) { animation-delay: 0.1s; }
.card:nth-child(2) { animation-delay: 0.2s; }
.card:nth-child(3) { animation-delay: 0.3s; }
.card:nth-child(4) { animation-delay: 0.4s; }

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.brand-name {
  font-size: 24px;
  font-weight: 700;
  color: var(--brand-color);
}

.brand-tagline {
  margin-top: 8px;
  font-size: 16px;
  color: #ccc;
}

.font-initial {
  font-size: 48px;
  font-weight: 600;
  margin-bottom: 8px;
}

.palette-title {
  font-weight: 600;
  margin-bottom: 16px;
}

.color-dots {
  display: flex;
  gap: 12px;
}

.color-dots .dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--brand-color);
  animation: pulse 1s ease;
}

.lines {
  margin-top: 20px;
}

.lines div {
  width: 100%;
  height: 4px;
  background: #ccc;
  margin: 8px 0;
  border-radius: 4px;
}

.watermark {
  position: absolute;
  bottom: 16px;
  right: 16px;
  font-size: 10px;
  opacity: 0.4;
  text-transform: uppercase;
}
