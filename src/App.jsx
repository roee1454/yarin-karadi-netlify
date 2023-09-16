import './App.css'

function App() {
  async function askForNotificationPermission() {
    const permission = await Notification.requestPermission();
    if (permission == "granted") {
      new Notification("Notification feature works", {
        body: "this feature works how amazing!!!",
      });
    } else {
      console.error("Notification feature is denied!")
    }
  }
  return (
    <div>
      <button onClick={askForNotificationPermission}>Ask Me For Permission</button>
    </div>
  )
}

export default App
