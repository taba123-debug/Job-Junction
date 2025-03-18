export default function Hero() {
    return (
      <section className="bg-white-900 text-blue-900 py-30">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Job Junction: Where Potential Meets Opportunity</h1>
          <p className="text-xl mb-8">AI-Powered Skills Validation & Career Launchpad</p>
          <div className="space-x-4">
            <button className="bg-white text-blue-900 px-6 py-2 rounded-full">Get Started</button>
            <button className="border border-blue text-blue-900 px-6 py-2 rounded-full">Explore Features</button>
          </div>
          {/* <img src="/images/bridge.png" alt="Bridge Illustration" className="mt-10 mx-auto" /> */}
        </div>
      </section>
    );
  }