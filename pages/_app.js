import GlobalStyle from "../styles";
import Dropdown from "@/components/dropdown";

function App() {
  const options = ["Option 1", "Option 2", "Option 3"];
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <div>
      <h1>My App</h1>
      <Dropdown
        label="Select an option:"
        options={options}
        selectedOption={selectedOption}
        onOptionChange={handleOptionChange}
      />
    </div>
  );
}

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}
