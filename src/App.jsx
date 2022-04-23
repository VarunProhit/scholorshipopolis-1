import React from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import ContactUs from "./pages/ContactUs/ContactUs";
import Team from "./pages/Team/Team";

const App = () => {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/contact" element={<ContactUs />} />
				<Route path="/team" element={<Team />} />
			</Routes>
			<Footer />
		</>
	);
};

export default App;
