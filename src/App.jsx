import React from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import { useState } from "react";

const App = () => {
	// the concept below used for items use state is called as state uplifting
	// as we want to pass data between two sibling components the correct way to do
	// it is through ligting up the state by choosing a common parent component
	// for both the sibling components and then writing the funcitonality there
	// and then pass the data as props to their child components.
	const [items, setItems] = useState([]);

	const addItem = (singleItem) => {
		setItems((items) => [...items, singleItem]); // This is an arrow function
		// that takes the current state items as its argument and returns a new array
		// with appending new object at end of the array.
	};

	const handleDelete = (id) => {
		const newArray = items.filter((item) => item.id !== id);
		setItems(newArray);
	};

	const handleUpdate = (id) => {
		setItems((items) => items.map((item) => (item.id === id ? { ...item, packed: !item.packed } : item)));
	};

	const initialItems = [
		{ id: 1, description: "Passports", quantity: 2, packed: false },
		{ id: 2, description: "Socks", quantity: 12, packed: true },
		{ id: 3, description: "Charger", quantity: 1, packed: false },
	];

	return (
		<div className="app">
			<Logo />
			<Form addItem={addItem} />
			<PackingList items={items} setItems={setItems} handleDelete={handleDelete} handleUpdate={handleUpdate} />
			<Stats items={items} />
		</div>
	);
};

export default App;
