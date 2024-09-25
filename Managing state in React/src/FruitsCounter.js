function FruitsCounter(props) {
    const len_fruits = props.fruits.length
    return (
        <h2>Total fruits: {len_fruits}</h2>
    )
}

export default FruitsCounter;