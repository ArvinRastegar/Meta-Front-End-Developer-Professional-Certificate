function Fruits(props) {
    console.log(props)
    // const {fruitsArray} = fruits
    // console.log(fruitsArray)
    
    return (
        <div>
            {props.fruits.map(f => <p key={f.id}>{f.fruitName}</p>)}
        </div>
    )
}

export default Fruits