import { useState, useEffect } from "react";
import styles from "./Counter.module.css";

const Counter = () => {
	const [counterValue, setCounterValue] = useState(1);
	const [productImage, setProductImage] = useState("");

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

	const fetchProducts = async () => {
		const response = await fetch(
			`https://fakestoreapi.com/products/${counterValue}`
		);
		const data = await response.json();
		console.log(data.image);
		setProductImage(data.image);
	};

	useEffect(() => {
		fetchProducts();
	}, [counterValue]);

	return (
		<>
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
			<div className={styles.imageContainer}>
				<img
					className={styles.image}
					src={productImage}
					alt="productImage"
				/>
			</div>
		</>
	);
};

export default Counter;
