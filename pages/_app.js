import '../styles/reset.css';
import '../styles/main.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <div>This is the App Container
      </div>
      <Component {...pageProps} />
    </div>
  );
}
