import LoginButton from './LoginButton';
export default function Header() {
    return (
    

      <header className="bg-white shadow">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold text-blue-900">Job Junction</h1>
            <nav>
              <a href="/" className="text-blue-900 hover:text-blue-700 px-3">Home</a>
              <a href="/dashboard" className="text-blue-900 hover:text-blue-700 px-3">Dashboard</a>
              <a href="/pricing" className="text-blue-900 hover:text-blue-700 px-3">Pricing</a>
              <LoginButton /> 

            </nav>
          </div>
        </div>
      </header>
    );
  }

  