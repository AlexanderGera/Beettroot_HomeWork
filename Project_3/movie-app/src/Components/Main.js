import react from "react";
import Header from "./Header";
import Card from "./Card";

let API_key = "&api_key=4c9b828ebbfd7a930eb1ca9a8dba1960";
let base_url = "https://api.themoviedb.org/3";
const Main = () => { 
    return (
        <>
            <header className="header_holder">
                <Header></Header>

            </header>
            <section className="container">
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>

            </section>
        </>
        
    )
}

export default Main;