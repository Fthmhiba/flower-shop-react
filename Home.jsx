function Home(params) {
    let home_image="https://images.unsplash.com/photo-1487530811176-3780de880c2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=400&q=60"
    return(
        <>
            <div className="home">
                <div >
                <p className="para">YOUR <span style={{fontFamily:"cursive"}}>Bloom&Boom</span><br/>
                DESTINATION <br/> FOR EXQUISITE <br/> FLORAL <br/> DELIGHTS
                </p>
                <button className="orderbtn">Order now</button>
                </div>
                <div className="im">
                    <img src={home_image} alt="" />
                </div>
            </div>
            
            <div className="par" style={{backgroundColor:"#7895b2"}}>
            <div className="choose">
                <div style={{fontSize:"30px",letterSpacing:"3px"}}>Why Choose Us?</div>
                <div className="us">
                    <div className="div1">
                        <img src="https://cdn-icons-png.flaticon.com/128/484/484167.png" />
                        <span >Locations</span>
                        <p>Convenient location in the city center</p>
                    </div>
                    <div className="div1">
                        <img src="https://cdn-icons-png.flaticon.com/128/2203/2203145.png" />
                        <span>Fastdelivery</span>
                        <p>Fast delivery up to 10 minutes</p>
                    </div>
                    <div className="div1">
                        <img src="https://cdn-icons-png.flaticon.com/128/1584/1584808.png" />
                        <span>Savingtime</span>
                        <p>By ordering from us you save your time</p>
                    </div>
                    <div className="div1">
                        <img src="https://cdn-icons-png.flaticon.com/128/3126/3126647.png" />
                        <span>Clientbase</span>
                        <p>we have a large and permanent client base</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
    
}

export default Home