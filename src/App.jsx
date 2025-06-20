import bandPhoto from './assets/band-photo.jpeg';
import proprietaryManSong from './assets/proprietary-man-final.mp3';
import sixteenSprintsSong from './assets/sixteen-sprints-final.mp3';

const Nav = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-heading font-bold text-primary">The Data Scientist &...</h1>
        <div className="space-x-4">
          <button onClick={() => scrollToSection('music')} className="font-heading hover:text-primary transition-colors">Music</button>
          <button onClick={() => scrollToSection('about')} className="font-heading hover:text-primary transition-colors">About</button>
          <button onClick={() => scrollToSection('dedication')} className="font-heading hover:text-primary transition-colors">Dedication</button>
        </div>
      </div>
    </nav>
  );
};

function App() {
  return (
    <div className="bg-background text-text font-body">
      <Nav />
      
      <header
        id="home"
        className="relative h-screen flex flex-col justify-end items-center text-center"
      >
        <div
          className="absolute inset-0 bg-cover bg-top grayscale"
          style={{ backgroundImage: `url(${bandPhoto})` }}
        ></div>
        <div className="absolute inset-0 bg-black/25"></div>
        
        <div className="relative z-10 p-8 pb-24">
          <h1 className="text-6xl md:text-8xl font-heading font-bold text-white tracking-wider uppercase">
            The Data Scientist & The Standard Deviations
          </h1>
          <h2 className="text-2xl md:text-3xl font-heading text-white mt-4" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            An Album of Statistically Significant Love
          </h2>
        </div>
      </header>

      <main className="container mx-auto p-8 md:p-16">
        <section id="music" className="mb-24 pt-16">
          <h2 className="text-5xl font-heading text-center mb-12 text-primary">Music</h2>
          <div className="max-w-3xl mx-auto">
            {/* Song 1 */}
            <div className="mb-12">
              <h3 className="text-3xl font-heading mb-4">Proprietary Man</h3>
              <audio controls className="w-full">
                <source src={proprietaryManSong} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
            {/* Song 2 */}
            <div>
              <h3 className="text-3xl font-heading mb-4">Sixteen Sprints</h3>
              <audio controls className="w-full">
                <source src={sixteenSprintsSong} type="audio/mpeg" />
                Your browser does not support the audio element.
              </audio>
            </div>
          </div>
        </section>

        <section id="about" className="mb-24 pt-16">
          <h2 className="text-5xl font-heading text-center mb-12 text-primary">About</h2>
          <div className="max-w-3xl mx-auto leading-relaxed text-lg">
            <p>
              {/* Bio will go here */}
            </p>
          </div>
        </section>

        <section id="dedication" className="pt-16">
          <h2 className="text-5xl font-heading text-center mb-12 text-primary">For David & Natalie</h2>
          <div className="max-w-3xl mx-auto text-center leading-relaxed text-lg">
            <p>
              {/* Dedication text will go here */}
            </p>
          </div>
        </section>
      </main>

      <footer className="text-center p-8 mt-16 text-sm text-gray-500">
        <p>&copy; 2025 The Data Scientist & The Standard Deviations. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default App 