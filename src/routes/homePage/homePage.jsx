import SearchBar from "../../components/searchBar/Searchbar";
import "./homePage.scss";

function HomePage(){
    return (
        <div className="homePage">
         <div className="textContainer">
           <div className="wrapper">
           <h1 className="title">
           Find Real Estate and Get you Dream Place
           </h1>
           <p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse maximus, 
nunc non euismod tempor, mauris nunc varius urna, a feugiat nisl sem vitae libero.
Donec at vehicula enim. Ut mi eros, rutrum a volutpat eget, lobortis id nulla.
Donec dignissim felis nec nulla lobortis
          </p>
          <SearchBar/>

          <div className="boxes">
            <div className="box">
             <h1>16+</h1>
             <h2>Years of Experience</h2>
            </div>
            <div className="box">
             <h1>200</h1>
             <h2>Award Gained</h2>
            </div>
            <div className="box">
             <h1>1200+</h1>
             <h2>Property Ready</h2>
            </div>
          </div>
           </div>
         </div>
         <div className="imgContainer">
         <img src="/bg.png" alt="" />
         </div>
        </div>
    )
}

export default HomePage