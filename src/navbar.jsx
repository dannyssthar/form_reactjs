export function Navbar() {
    return ( <div className="navSections">
     <div className="nav">
     <div className="navmobile">
     <section className="navSection">
        <span className="number number1">1</span>
        <div className="navInfo">
            <p>STEP 1</p>
            <h2>YOUR INFO</h2>
        </div>
        </section>

        <section className="navSection">
        <span className="number number2">2</span>
        <div className="navInfo">
            <p>STEP 2</p>
            <h2>SELECT PLAN</h2>
        </div>
        </section>

        <section className="navSection">
        <span className="number number3">3</span>
        <div className="navInfo">
            <p>STEP 3</p>
            <h2>ADD-ONS</h2>
        </div>
        </section>

        <section className="navSection">
        <span className="number number4">4</span>
        <div className="navInfo">
            <p>STEP 4</p>
            <h2>SUMMARY</h2>
        </div>
        </section>
     </div>
     </div>
    </div> );
}

