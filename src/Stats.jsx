import React from "react";

const Stats = ({ items }) => {
	if (!items.length) {
		return (
			<p className="stats">
				<em>Start adding some items to your packing list 🚀</em>
			</p>
		);
	}
	const packedItems = items.filter((item) => item.packed).length;
	const percentage = Math.round((packedItems / items.length) * 100);
	return (
		<footer className="stats">
			<em>
				{percentage === 100 ? (
					<>
						<em>You got everything! Ready to go ✈️</em>
					</>
				) : (
					<>
						<em>
							💼 you have {items.length} items in your list and you already packed {packedItems} ({percentage}%)
						</em>
					</>
				)}
			</em>
		</footer>
	);
};

export default Stats;
