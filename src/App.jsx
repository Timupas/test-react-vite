import { Section } from './components/Section';
import Title from './components/Title'
import './App.css'

const text = "Hello";

function App() {
  return (
    <Section>
    <Title desk={text}/>
    </Section>
  )
}

export default App
