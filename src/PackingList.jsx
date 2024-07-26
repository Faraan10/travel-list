import React, { useState } from "react";

const PackingList = ({ items, setItems, handleDelete, handleUpdate }) => {
	console.log(items);

	const [sortBy, setSortBy] = useState("input");

	let sortedList;

	if (sortBy === "input") sortedList = items;

	if (sortBy === "description") sortedList = items.slice().sort((a, b) => a.description.localeCompare(b.description));

	if (sortBy === "packed") sortedList = items.slice().sort((a, b) => Number(a.packed) - Number(b.packed));

	const clearList = () => {
		const confirmed = window.confirm("Are you sure you want to delete all items ?");
		if (confirmed) setItems([]);
	};

	return (
		<div className="list">
			<ul>
				{sortedList.map((item) => (
					<div key={item.id}>
						<li>
							<input
								type="checkbox"
								value={item.packed}
								style={{ marginRight: "10px" }}
								onChange={() => handleUpdate(item.id)}
							/>
							<span style={item.packed ? { textDecoration: "line-through" } : {}}>
								{item.quantity} {item.description}
							</span>
							<button onClick={() => handleDelete(item.id)}>❌</button>
						</li>
					</div>
				))}
			</ul>
			<div className="actions">
				<select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
					<option value="input">sort by input order</option>
					<option value="description">sort by description</option>
					<option value="packed">sort by packed status</option>
				</select>
				<button onClick={clearList}>Clear</button>
			</div>
		</div>
	);
};

export default PackingList;
