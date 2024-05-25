import Header from '../../components/header/header';
import './home.css';

function Home() {
    return (
        <>
            <Header loggedIn={true}></Header>
            <div id='welcome-wrapper-one'>
                <div id='welcome-wrapper-one-text'>
                    <h2>The Search Ends Here.</h2>
                </div>
                <div id='welcome-wrapper-one-picture'></div>
            </div>
        </>
    )
}

export default Home;