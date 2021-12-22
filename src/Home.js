import { useState, useEffect } from 'react';
import BlogList from './BlogList';

const Home = () => {
    // lister les joueurs et leurs stats 
    const [blogs, setBlogs] = useState([
        { name: 'Sem', score: '750', roll:'01', id: 1},
        { name: 'Yiahyiah', score: '550', roll:'01', id: 2},
        { name: 'Juan', score: '950', roll:'01', id: 3}
    ]);

    const [name, setName] = useState('mario');

    // let name = 'laura';
    // const [name, setName] = useState('laura');
    const [roll, setRoll] = useState(0);

    const handleClick = () => {
       setName('lolo');
       setRoll('1');
    }

    const handleClickAgain = (name) => {
        console.log( name + 'ne veut plus jouer')
    }

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    //hook to fetch data
    useEffect(() => {
        console.log('use effect ran');
    }, []);// depedencies

    return (
        <div className="home">
                  <h2>Dice game begin, please sit tight.</h2>
                    <br/>
                  <hr/>
                  <br/>

        <br/>
                <button onClick={() => setName('Alex')}> change name </button>
                <br/>
                <p> { name } roll number : { roll }</p>
                <br/>
                <button onClick={handleClick}> Rejouer </button>
                <button onClick={() => handleClickAgain('mario')}> Non merci </button>

                <br/> <br/>

          <BlogList blogs ={blogs} title ="All rolls" handleDelete ={handleDelete} />
          <BlogList blogs ={blogs.filter ((blog) => blog.roll == '01')} title ="First rolls" />

        </div>
    );
}

export default Home;