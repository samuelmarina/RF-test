import "./styles.css";
import Header from "./components/Header";
import EventCard from "./components/EventCard";

export default function App() {
  const dummy = {
    name: "Samuel",
    description:
      "Cillum exercitation dolore do eiusmod elit exercitation. In culpa amet officia cupidatat nostrud excepteur dolore aliqua laboris anim nostrud ut.",
    company: "Coca Cola"
  };
  return (
    <div className="App">
      <Header>Events</Header>
      <EventCard data={dummy} />
    </div>
  );
}
