import Stat from "./Stat";

export default function Stats({data}){
	return (
		data.map(item => (
			<Stat name={item.stat.name} stat={item.base_stat} />
		))
	)
}
