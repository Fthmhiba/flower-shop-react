function Delivery(params) {
    return(
        <>

        <div className="" style={{backgroundColor:"#7895b2 "}}>
       
        <div className="del">
            <p style={{padding:"8px",fontSize:"x-large",color:"#a8bbc6",margin:"4px"}}>Delivery Process</p>
            <div className="process">
                <div className="pr">
                    <div className="p" >1</div>
                    <p className="name">Ordering and payment</p>
                    <p className="delpara">You choose your flowers.<br/>
                    place an order and pay it.
                    </p>
                </div>
                <div className="pr">
                    <div className="p">2</div>
                    <p className="name">Picking a bouquet</p>
                    <p className="delpara">We collect a bouquet and<br/>
                    prepare it for delivery.
                    </p>
                </div>
                <div className="pr">
                    <div className="p">3</div>
                    <p className="name">Delivery of flowers</p>
                    <p className="delpara">We deliver your order
                    order directly <br/> to your home in a short time.
                    </p>
                </div>
            </div>
        </div>
        </div>
        

        <div style={{backgroundColor:"#f5efe6"}}> 
        <div className="review">
            <p style={{padding:"8px",fontSize:"x-large",margin:"4px"}}>Reviews</p>
            <div className="" style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <div className="rev">
                <img style={{padding:"5px",width:"80px",height:"80px",borderRadius:"50% 50% 50% 50%"}} src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60" alt="" />
                <p>
                    <p style={{display:"flex",justifyContent:"space-around",alignItems:"center",color:"#7895b2"}}>Jacob Jones <br/>
                     <img style={{width:"50px",padding:"5px"}} src="https://t4.ftcdn.net/jpg/05/86/81/85/240_F_586818562_C4QskUsxFygrzH9mqsSBsOb5LuxtWHJz.jpg" alt="" />  </p>
                    <p >I wanted to take a moment to express my outmost satisfaction
                        with Bloom & Boom.<br/> I highly recommend Bloom & Boom for their
                        exceptional quality and unwavering commitment to customer satisfaction.
                    </p>
                </p>
            </div>
           
            </div>
        </div>
        </div>
        {/* order */}
        <div style={{backgroundColor:"#7895b2"}} >

        <div className="order">
            <div className="ord">
                <p style={{fontSize:"large",padding:"6px"}}>Order</p>
                <div className="details">
                    <select name="name" className="options" id="">
                        <option  value="Name">Name</option>
                    </select>
                    <select name="Number" className="options" id="">
                    <option value="Name">Number</option>
                    </select>
                    <select name="Choose A Bouquet" className="options" id="">
                    <option value="Name">Choose A Bouquet</option>

                    </select>
                    <select name="Date And Time" className="options" id="">
                    <option value="Name">Date And Time</option>

                    </select>
                    <select name="Address" className="options" id="">
                    <option value="Name">Address</option>

                    </select>
                    <button style={{width:"100px",color:"#e8dfca",backgroundColor:"#7895b2 ",borderRadius:"12px",padding:"6px",border:"none"}}>Order</button>
                </div>
            </div>
            <div className="qa">
                <p style={{fontSize:"large",padding:"6px"}}>Q/A</p>
                <div className="qsn" style={{padding:"10px"}}>
                    <p className="qsns">What are your policies for returns or exchanges<br/> if a customer
                        is not satisfied with the flowers? <span style={{fontWeight:"bolder",fontSize:"larger",color:"#7895b2"}}>+</span> </p>
                        <p className="qsns">Do you offer the option to  custom bouquets <br/>or arrangments?
                        <span style={{fontWeight:"bolder",fontSize:"larger",color:"#7895b2"}}>+</span> </p>
                        <p className="qsns">What are the ideal temperature  and lighting<br/>conditions
                        for different types of flowers?<span style={{fontWeight:"bolder",fontSize:"larger",color:"#7895b2"}}>+</span> </p>
                
                
                </div>
            </div>
            </div>
        </div>
        </>
    )
}

export default Delivery