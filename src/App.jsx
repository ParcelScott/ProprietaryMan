import bandPhoto from './assets/band-photo.jpeg';
import proprietaryManSong from './assets/proprietary-man-final.mp3';
import sixteenSprintsSong from './assets/sixteen-sprints-final.mp3';

const Nav = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-background/80 backdrop-blur-sm p-4 z-10">
      <div className="container mx-auto flex justify-end items-center">
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
        className="relative h-screen flex flex-col justify-end"
      >
        <div
          className="absolute inset-0 bg-cover grayscale"
          style={{ 
            backgroundImage: `url(${bandPhoto})`,
            backgroundPosition: 'top' 
          }}
        ></div>
        <div className="absolute inset-0 bg-black/25"></div>
        
        <div className="relative z-10 text-center p-4 pb-16 sm:p-8 sm:pb-24">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-heading font-bold text-white tracking-normal sm:tracking-wider uppercase">
            The Data Scientist & The Standard Deviations
          </h1>
          <h2 className="text-lg md:text-2xl font-heading text-white mt-4" style={{ textShadow: '0 2px 4px rgba(0, 0, 0, 0.5)' }}>
            An Album of Statistically Significant Love
          </h2>
        </div>
      </header>

      <main className="container mx-auto p-8 md:p-16">
        <section id="music" className="mb-24 pt-16">
          <h2 className="text-3xl md:text-5xl font-heading text-center mb-12 text-primary">Music</h2>
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
          <h2 className="text-3xl md:text-5xl font-heading text-center mb-12 text-primary">About</h2>
          <div className="max-w-3xl mx-auto leading-relaxed text-lg space-y-4">
            <p> 
              For over two decades, a project has been running. The initial query was simple: "What is the optimal algorithm for friendship?" The result is The Data Scientist & The Standard Deviations.
            </p>
            <p>
              Our model has been in continuous training for more than 20 years, processing a massive dataset of ups, downs, and unforgettable outliers. We've handled exceptions you wouldn't believe (some involving tasers, others involving a startling lack of shirts) and troubleshooted bugs in real-time. Through it all, one correlation has remained statistically significant and consistently positive: our love for the lead scientist, David.
            </p>
            <p>
              This collection of songs is the output of that long-running model. It's a final report, a peer-reviewed study, and a celebratory deployment all in one. Our data is messy, our methods are sometimes questionable, but our conclusion is sound: David is the absolute best, and we are overjoyed to be his Standard Deviations.
            </p>
          </div>
        </section>

        <section id="dedication" className="pt-16">
          <h2 className="text-3xl md:text-5xl font-heading text-center mb-12 text-primary">For David & Natalie</h2>
          <div className="max-w-3xl mx-auto text-center leading-relaxed text-lg space-y-4">
            <p>
              After years of running simulations, you've found the optimal solution. A model of love this strong doesn't need A/B testing; its success was a predictable outcome from the moment your datasets were joined.
            </p>
            <p>
              Your marriage is the successful deployment we've all been waiting for. It's the merger of two clean, well-documented codebases, destined to run without bugs for a lifetime. May your future together have low variance, a consistently positive trend line, and a bond with an R-squared value of 1.
            </p>
            <p>
              We wish you a lifetime of happiness.
            </p>
            <p className="mt-8">
              With love,
              <br />
              The Standard Deviations
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