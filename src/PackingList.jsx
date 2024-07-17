import React from "react";

const PackingList = ({ items, handleDelete, handleUpdate }) => {
	console.log(items);

	return (
		<div className="list">
			<ul>
				{items.map((item) => (
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
		</div>
	);
};

export default PackingList;
