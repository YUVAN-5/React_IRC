
import CostumeImage1 from '../Assests/img/ANIMATRONICS.jpg'; 
import CostumeImage3 from '../Assests/img/accessories.jpg';
import CostumeImage2 from '../Assests/img/collectibles.jpg';
import CostumeImage4 from '../Assests/img/Sale_Animatronics.jpg'; 
import CostumeImage5 from '../Assests/img/Funko50.jpg';
import CostumeImage6 from '../Assests/img/Sweaters.jpg';

function Shop(){
    return(
        <>
        <div className='line-wrapper'>
            <div className='line'></div>
            <div className='text'> Featured collections</div>
            <div className='line'></div>
        </div>
        <div className='col'>
        <div className="costume-categories">
            <div className="category">
                <img src={CostumeImage1} alt="Costume 1" />
                <h2>Spooky Costumes</h2>
            </div>
            <div className="category">
                <img src={CostumeImage2} alt="Costume 2" />
                <h2>Witchy Wardrobe</h2>
            </div>
            <div className="category">
                <img src={CostumeImage3} alt="Costume 3" />
                <h2>Monster Mash</h2>
            </div>
        </div>
        </div>
            <br></br>
        <div className='line-wrapper'>
            <div className='line'></div>
            <div className='text'>Limited Deals!!</div>
            <div className='line'></div>
        </div>
        <div className='col'>
        <div className="costume-categories">
            <div className="category">
                <img src={CostumeImage4} alt="Costume 1" />
                <h2>Spooky Costumes</h2>
            </div>
            <div className="category">
                <img src={CostumeImage5} alt="Costume 2" />
                <h2>Witchy Wardrobe</h2>
            </div>
            <div className="category">
                <img src={CostumeImage6} alt="Costume 3" />
                <h2>Monster Mash</h2>
            </div>
        </div>
        </div>
        
        </>
    )
}
export default Shop;