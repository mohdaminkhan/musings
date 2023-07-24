import '../styles/reset.css';
import '../styles/main.css';
import styles from '../styles/modules/global.module.scss';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <div >
      <h1 className={styles.heading}>Musings of a Dev</h1>
      <div className='flex justify-center'>
        <img className='max-w-md' src='./images/keyboardtop.webp' />
      </div>
      <Component {...pageProps} />
    </div>
  );
}
