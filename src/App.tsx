import Navbar from "./components/Navbar"
import Chat from "./components/Chat"
import ChatList from "./components/ChatList"

function App() {
  return (
    <>
      <Navbar />
      <div  className="h-[90%] flex">
        <ChatList />
        <Chat />
      </div>
    </>
  )
}
export default App

