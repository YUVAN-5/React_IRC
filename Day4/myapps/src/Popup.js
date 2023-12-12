function Popup(){
    return(
        <div className="App">
         <div className="wrapper">
        <div className="button" onclick={"document.body.classList.add('active')"}>
            <span className="button-text">Press</span>
            <div className="button-backgrounds">
                <div className="button-circle button-circle1"></div>
                <div className="button-circle button-circle2"></div>
                <div className="button-circle button-circle3"></div>
                <div className="button-circle button-circle4"></div>
            </div>
        </div>
    </div>

    <div className="wrapper">
        <div className="popup">
            <div className="popup-inside">
                <div className="backgrounds">
                    <div className="background"></div>
                    <div className="background background2"></div>
                    <div className="background background3"></div>
                    <div className="background background4"></div>
                    <div className="background background5"></div>
                    <div className="background background6"></div>
                </div>
            </div>
            <div className="content">
                <div className="content-wrapper">
                    <h1>well done</h1>
                    <p>Do you like it?</p>
                    <p className="try-again" onClick={"document.body.classList.remove('active')"}>Yes! I will try again</p>
                </div>
            </div>
        </div>
    </div>
    
    </div>
    )
}
export default Popup;