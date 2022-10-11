import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import Pricing from "./pages/Pricing";
import Team from "./pages/Team";
import Testimonial from "./pages/Testimonial";
import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route index element={<Hero />} />
					<Route path="pricing" element={<Pricing />} />
					<Route path="testimonial" element={<Testimonial />} />
					<Route path="team" element={<Team />} />
					<Route path="contact" element={<Contact />} />
					<Route path="*" element={<NotFound />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
