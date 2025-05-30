import { useState, useRef } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ScrollToTop from '../components/layout/ScrollToTop';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Collection from '../components/sections/Collection';
import Testimonials from '../components/sections/Testimonials';
import Waitlist from '../components/sections/Waitlist';
import InstagramFeed from '../components/sections/InstagramFeed';
import Modal from '../components/common/Modal';
import CountdownTimer from '../components/common/CountdownTimer';

export default function LandingPage() {
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);
  const [waitlistModalOpen, setWaitlistModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted email:", email);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setNotifyModalOpen(false);
      setWaitlistModalOpen(false);
      setEmail("");
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-[#fef9f6] text-black font-sans overflow-x-hidden">
      <Navbar />
      <ScrollToTop />

      {/* Notification Modal */}
      <Modal isOpen={notifyModalOpen} onClose={() => setNotifyModalOpen(false)}>
        <div className="text-center">
          <div className="h-12 w-12 mx-auto mb-4 text-[#f4e4dd] text-4xl">✨</div>
          <h3 className="text-2xl font-bold mb-2">Get Notified</h3>
          <p className="text-black/70 mb-6">
            Be the first to know when we launch new products and exclusive offers.
          </p>
          {submitted ? (
            <div className="py-4 text-green-600">Thank you! We'll notify you soon.</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-black/20 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <button type="submit" className="w-full bg-black text-white hover:bg-black/90 px-4 py-3 rounded-lg">
                Notify Me
              </button>
            </form>
          )}
        </div>
      </Modal>

      {/* Waitlist Modal */}
      <Modal isOpen={waitlistModalOpen} onClose={() => setWaitlistModalOpen(false)}>
        <div className="text-center">
          <div className="h-12 w-12 mx-auto mb-4 text-[#f4e4dd] text-4xl">✉️</div>
          <h3 className="text-2xl font-bold mb-2">Join Our Waitlist</h3>
          <p className="text-black/70 mb-6">
            Get early access to our collections and exclusive member benefits.
          </p>
          {submitted ? (
            <div className="py-4 text-green-600">Thank you for joining our waitlist!</div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg border border-black/20 focus:outline-none focus:ring-2 focus:ring-black"
                required
              />
              <button type="submit" className="w-full bg-black text-white hover:bg-black/90 px-4 py-3 rounded-lg">
                Join Waitlist
              </button>
            </form>
          )}
        </div>
      </Modal>

      <Hero onNotifyClick={() => setNotifyModalOpen(true)} />
      <About />
      <Collection />
      
      {/* Countdown Section */}
      <section className="py-24 px-6 text-center bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold mb-4">Launching Soon</h2>
          <p className="text-white/80 mb-12 max-w-2xl mx-auto">
            Our flagship store opens in just a few days. Be the first to experience Wamzé in person.
          </p>
          
          <CountdownTimer />
        </div>
      </section>

      <Testimonials />
      <Waitlist onJoinClick={() => setWaitlistModalOpen(true)} />
      <InstagramFeed />
      <Footer />
    </main>
  );
}