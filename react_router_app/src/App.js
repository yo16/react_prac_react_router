import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import { TopPage, Page1, Page2, PageNotFound } from "./pages";

function App() {
    return (
        <BrowserRouter>
            <header>
                <Link to="/">トップ</Link>｜<Link to="/page1">ページ１</Link>｜<Link to="/page2">ページ２</Link>
            </header>
            <main>
                <Routes>
                    <Route path="/" element={<TopPage />} />
                    <Route path="/page1" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </main>
        </BrowserRouter>
    );
}

export default App;
