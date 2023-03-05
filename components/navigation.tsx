import Link from 'next/link'
import styles from './component_styles/navigation.module.scss'




export function Navigation({ children }) {


	return (<div className={styles.navigation}>
		{children}

	</div>)


}









