import logo from '../assets/logo-Thania.png'
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';



const Navbar = () => {
	return <nav className=' mb-10 flex items-center justify-between py-4'>
		<div className='flex flex-shrink-0 items-center'>
			<img src={logo} alt="logo" className='mx-2 w-20' />
		</div>
		<div className='m-8 flex items-center justify-center gap-4 text-2xl'>
		<a href="https://www.linkedin.com/in/thania-gonz%C3%A1lez-674148215/" target="_blank" rel="noopener noreferrer">
			<FaLinkedin/>
			</a>

			<a href="https://github.com/ThanyG" target="_blank" rel="noopener noreferrer">
			<FaGithub/>
			</a>
		
		</div>
	</nav>
};
export default Navbar;