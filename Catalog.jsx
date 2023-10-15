function Catalog(params) {
    let heart="https://cdn-icons-png.flaticon.com/128/1077/1077035.png"
    return(
        <>
        <div  style={{backgroundColor:"#f5efe6"}}>
        <div className="catalog" >
            <p style={{fontSize:"x-large",padding:"5px"}}>Our Catalog</p>
            <div className="florals">
                <div className="flwr">
                    <img src="https://images.unsplash.com/photo-1616917211409-a1463ef90c93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt=""/>
                    <div className="nn">
                        <span>Starry night</span> <span><img src={heart} alt="" /></span>
                    </div>
                    <p>30$</p>
                    <p>Add to cart</p>
                </div>

                <div className="flwr">
                    <img src="https://images.unsplash.com/photo-1622371319659-6b8cd5059ff4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE1fHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60" alt=""/>
                    <div className="nn">
                        <span>Sun Lover</span> <span><img src={heart} alt="" /></span>
                    </div>
                    <p>35$</p>
                    <p>Add to cart</p>
                </div>
                <div className="flwr">
                    <img src="https://plus.unsplash.com/premium_photo-1661342417662-3ed1b7c6b4a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fGJ1bmNoJTIwb2YlMjBmbG93ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60" alt=""/>
                    <div className="nn">
                        <span>Spring dream</span> <span><img src={heart} alt="" /></span>
                    </div>
                    <p>30$</p>
                    <p>Add to cart</p>
                </div>
            </div>
            <div className="florals">
                <div className="flwr">
                    <img src="https://images.unsplash.com/photo-1435783459217-ee7fe5414abe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt=""/>
                    <div className="nn">
                        <span>Adrent lover</span> <span><img src={heart} alt="" /></span>
                    </div>
                    <p>40$</p>
                    <p>Add to cart</p>
                </div>
                <div className="flwr">
                    <img src="https://images.unsplash.com/photo-1652164055648-102e8719ae05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIwfHx8ZW58MHx8fHx8&auto=format&fit=crop&w=400&q=60" alt=""/>
                    <div className="nn">
                        <span>Playful tenderness</span> <span><img src={heart} alt="" /></span>
                    </div>
                    <p>45$</p>
                    <p>Add to cart</p>
                </div>
                <div className="flwr">
                    <img src="https://images.unsplash.com/photo-1575178114667-c8a832c61f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80" alt=""/>
                    <div className="nn">
                        <span>Pink sunset</span> <span><img src={heart} alt="" /></span>
                    </div>
                    <p>40$</p>
                    <p>Add to cart</p>
                </div>
            </div>
            <p>---Read more ---</p>
        </div>
        </div>
        <div className="catfoot" style={{backgroundColor:"#7895b2"}} >
            <div className="abt">
                <img style={{width:"250px",borderRadius:"50% 50% 0 0",padding:"5px",margin:"5px"}} src="https://images.unsplash.com/photo-1565957949991-2f295d814345?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=930&q=80" alt="" />
                <p style={{color:"#7895b2",padding:"10px"}}>
                    <p style={{padding:"8px",fontSize:"x-large",color:"#a8bbc6",margin:"4px"}}>About Us</p>
                    Welcome to Bloom & Boom -the flower shop where we offer a wide 
                    selection of flowers for unforgettable impressions.<br/>
                    With our range of fresh and exquisite flowers.We will help you 
                    express your emotions.Create an atmosphere of joy.And impress your
                    loved ones.
                    <p style={{padding:"5px"}}>---Read more ---</p>
                    
                </p>
            </div>
        </div>
        
        
        </>
    )
}

export default Catalog