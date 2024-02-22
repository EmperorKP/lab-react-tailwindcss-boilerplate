
import 'tailwindcss/tailwind.css';

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="p-4 bg-blue-500 text-white">
        <div className='flex place-content-around'> 
          <div>
          <h1 className='text-3xl'>Kalvium</h1>
          </div>
          <div>
            <nav className='p-2'>
              <ul className="flex space-x-4">
                <li>About Us</li>
                <li>Contact</li>
                <li>Courses</li>
              </ul>
            </nav>
          </div>  
          <div>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              signup
            </button>
          </div>
        
        </div>
      
      </header>
      <main className="flex-grow p-4">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Button one
      </button>
        <div className="mt-4 p-4 bg-pink-200 text-black">
          Alert! This is awesome!
        </div >
        <div className="mt-4 p-4 flex justify-center">
          <br />
          <img src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="" />
          <br />
          <br />
         
        </div>
        <div className="mt-4 p-4 flex justify-center">
          <p className='text-2xl'>kalvium Store</p>
          
          <p className='p-1'>
           : You have a new course!
          </p>
        </div>
      </main>
      <footer className="p-4 bg-gray-800 text-white">
        © 2024 Copyright Kalvium
      </footer>
    </div>
  );
};

export default App;
