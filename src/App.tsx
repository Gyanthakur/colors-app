import { useState } from "react";
import "./App.css";
import InputBox from "./input";
import SquareBox from "./squarebox";

function App() {
	const [color, setColor] = useState("");
	return (
		<>
			<SquareBox color={color} />
			<InputBox color={color} setColor={setColor} />
		</>
	);
}

export default App;
