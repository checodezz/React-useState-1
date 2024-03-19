import { useState } from "react";
import "./App.css";

const ToggleTheme = () => {
  const [theme, setTheme] = useState("Light");
  return (
    <div>
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "Light" ? "Dark" : "Light")}>
        Toggle Theme
      </button>
    </div>
  );
};

const PasswordHider = () => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div>
      <p>
        {visibility ? "Password: myPassword123" : "Password: *************"}
      </p>
      <button onClick={() => setVisibility(!visibility)}>
        {visibility ? "Hide Pasword" : "Show Password"}
      </button>
    </div>
  );
};

const ExpandTextToggle = () => {
  const [expanded, setExpanded] = useState(false);
  const text = "This is a longer text that is typically hidden unless expanded";

  return (
    <div>
      <p>{expanded ? text : `${text.substring(0, 20)}...`}</p>
      <button onClick={() => setExpanded(!expanded)}>
        {expanded ? "collapse" : "Expand"}
      </button>
    </div>
  );
};

const TabToggler = () => {
  const [activeTab, setActiveTab] = useState("Home");
  return (
    <div>
      <button onClick={() => setActiveTab("Home")}>Home</button>
      <button onClick={() => setActiveTab("Profile")}>Profile</button>
      <button onClick={() => setActiveTab("Messages")}>Messages</button>
      <p>Content of {activeTab} tab.</p>
    </div>
  );
};

const FontSizeAdjuster = () => {
  const [fontSize, setFontSize] = useState(20);
  return (
    <div>
      <p style={{ fontSize: `${fontSize}px` }}>Adjust my font size</p>
      <button onClick={() => setFontSize(fontSize + 1)}>Increase Size</button>
      <button onClick={() => setFontSize(fontSize - 1)}>Decrease Size</button>
    </div>
  );
};

export default function App() {
  return (
    <main>
      <ToggleTheme />
      <hr />
      <PasswordHider />
      <hr />
      <ExpandTextToggle />
      <hr />
      <TabToggler />
      <hr />
      <FontSizeAdjuster />
    </main>
  );
}
