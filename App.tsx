import AppNavigation from "./navigation/appNavigation";
import { FontProvider } from "./context/fontContext";

export default function App() {
	return (
		<FontProvider>
			<AppNavigation />
		</FontProvider>
	);
}
