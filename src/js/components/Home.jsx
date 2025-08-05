import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Service from './Service.jsx'
import Contact from './Contact.jsx'
import About from './About.jsx'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./Header.jsx";

//create your first component
const Home = () => {
	const [secreto,setSecreto] = useState('sabias que ..')
	return (
		<div className="text-center">
			<BrowserRouter>			
				<Header />
				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/contactanos" element={<Contact />} />
					<Route path="/servicios" element={<Service />} />
					<Route path="/*" element={<p>Not found</p>} />
					
				</Routes>
				<h1 className="text-center mt-5">Footer</h1>
				<p>{secreto}</p>
				<button onClick={()=>setSecreto('trump cree que. la tierra es plana')}>revelar secreto</button>
			</BrowserRouter>
            

			
		</div>
	);
};

export default Home;