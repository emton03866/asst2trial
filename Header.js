import LeftNavi from "../LeftNavi/LeftNavi";

const Header = () => {
    return (
        <>
            <form>
                    <section id="heading">
                        <label for="check" className="quickfind"><i className="material-icons">menu</i> <span style={{color:"#000000"}}></span></label>
                        <input type="search" className = "quick-find" placeholder="Quick Find"/>
                        <p> </p>
                        <input type="checkbox" className="togCheck" id="check" />
                        <div className="togContent">
                            <LeftNavi />
                        </div>
                    </section>
            </form>
            <section id="heading2">
                <div className ="thirtyfive">
                    <p><i className="material-icons">check_circle</i> <span style={{color:"#ffffff"}}>totaltasks/incompletetasks</span></p>
                </div>
            </section>
        </>
    );
};

export default Header;

// use the same thing to hide the previous menu?
        // <label for="check" class="work"><i className="material-icons">expand_more fiber_manual_record</i> <span style={{color:"#000000"}}>Work</span></label>
        // <p> </p>
        // <input type="checkbox" className="togCheck" id="check" />
        // <div className="togContent"></div> */}

        // <form>
        //     <section id="heading">
        //         <div className="quickfind">
        //             <i className="material-icons">menu</i>
        //             <input type="search" className = "quick-find" placeholder= "Quick Find" />
        //         </div>
        //     </section>
        // </form> 