import { SocketProvider } from './context/SocketContext';
import { ChatProvider } from './context/ChatContext';
import Navbar from './components/Navbar';
import { Home } from './components/Home';

function App() {
  return (
    <SocketProvider>
      <ChatProvider>
        <Navbar />
        <Home />
      </ChatProvider>
    </SocketProvider>
  );
}

export default App;
