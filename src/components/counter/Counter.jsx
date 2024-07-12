import { useState } from "react";
import styles from "./Counter.module.css";

const Counter = () => {
	const [counterValue, setCounterValue] = useState(0);

	function increaseCounter() {
		setCounterValue((prevCounterValue) => prevCounterValue + 1);
	}

	function decreaseCounter() {
		if (counterValue <= 0) {
			return;
		} else {
			setCounterValue((prevCounterValue) => prevCounterValue - 1);
		}
	}

	function resetCounterValue() {
		setCounterValue((prevCounterValue) => (prevCounterValue = 0));
	}

	return (
		<div className={styles.counter}>
			<h1 className={styles.value}>{counterValue}</h1>
			<div className={styles.btnContainer}>
				<button
					className={styles.btn}
					onClick={() => decreaseCounter()}
				>
					Decrease
				</button>
				<button
					className={styles.btn}
					onClick={() => resetCounterValue()}
				>
					Reset
				</button>
				<button
					className={styles.btn}
					onClick={() => increaseCounter()}
				>
					Increase
				</button>
			</div>
		</div>
	);
};

export default Counter;
