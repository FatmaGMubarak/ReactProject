export default function MainPage(props) {
  return (
    <main className="main_page">
    {props.product.map((e,i)=>{
        return(
            <div key ={i+1} className={`productCard${i+1}`}>
                <img src={e.image} alt={e.name} />
                <h1>{e.name}</h1>
                <h2>{e.title}</h2>
                <h3>{e.price}$</h3>
                <button className="readMore" type="submit">Read More</button>
            </div>
        )
    })}
    </main>
  );
}
