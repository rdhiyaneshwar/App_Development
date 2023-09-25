import { useState } from 'react';
import '../assets/css/Diet.css';
import { useEffect } from 'react';
import Navigation from './Navbar';
import Social from './Social';

const imagess=[
{id:'1',imageName:'food1.jpeg',tag:'food'},
{id:'2',imageName:'fruit1.jpeg',tag:'fruit'},
{id:'3',imageName:'liquid1.jpeg',tag:'liquid'},
{id:'4',imageName:'food2.jpeg',tag:'food'},
{id:'5',imageName:'fruit2.jpeg',tag:'fruit'},
{id:'6',imageName:'food3.jpeg',tag:'food'},
{id:'7',imageName:'fruit3.jpeg',tag:'fruit'},
{id:'8',imageName:'fruit4.jpeg',tag:'fruit'},
{id:'9',imageName:'liquid2.jpeg',tag:'liquid'},
{id:'10',imageName:'food4.jpeg',tag:'food'},
{id:'11',imageName:'liquid3.jpeg',tag:'liquid'},
{id:'12',imageName:'food5.jpeg',tag:'food'},
{id:'13',imageName:'fruit5.jpeg',tag:'fruit'},
{id:'15',imageName:'fruit6.jpeg',tag:'fruit'},
{id:'16',imageName:'liquid4.jpeg',tag:'liquid'},
{id:'14',imageName:'liquid5.jpeg',tag:'liquid'},
]
function Diet() {
  const [tag,setTag]=useState('fruit');
  const[filteredImages,setFilteredImages]=useState([]);

  useEffect(()=>{
    tag === 'all'? setFilteredImages(imagess): setFilteredImages(imagess.filter(image => image.tag === tag))
  },
  [tag]
  );
  return (
    <>
    <Navigation/>
    <Social/>
    <div className="bgf"></div>
      <div className="bgf bgf2"></div>
      <div className="bgf bgf3"></div>
    <div className="App" handleSetTag={setTag}>
      <div className='ta'>
      <TagButton name="all" handleSetTag={setTag}/>
      <TagButton name="food" handleSetTag={setTag}/>
      <TagButton name="fruit" handleSetTag={setTag}/>
      <TagButton name="liquid" handleSetTag={setTag}/>
      </div>
      <div className='jm'>
        {filteredImages.map(image=>
        <div key = {image.id} className='mj'>
          <img className = ' dj'src={`/imagess/${image.imageName}`} alt="logo"/>
        </div>
        
        )}
      </div>
    </div>
    
    </>
  );
}

const TagButton=({name,handleSetTag})=>{
  return <button className='tag' onClick={()=> handleSetTag(name)}>{name.toUpperCase()}</button>;
};
export default Diet;
