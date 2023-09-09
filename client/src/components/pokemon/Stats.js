import Stat from "./Stat";

export default function Stats({data}){
	return (
		data.map((item, index) => (
			<Stat name={item.stat.name} stat={item.base_stat} key={index} index={index} />
		))
	)
}
