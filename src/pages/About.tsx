import Button from '../components/Button';
import Header from "../components/Header";
import "../index.css"

function Home() {
    return (
        <div>
            <Header/>
            <div className = "about-start">
                <h1>Добро пожаловать!</h1>
                <Button
                    label="Нажми меня"
                    onClick={() => alert('Кнопка нажата!')}
                    color="blue"
                    size="large"
                />
            </div>
        </div>
    );
}
export default Home;