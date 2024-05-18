import { useState } from 'react'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import { classNames } from 'shared/lib/classNames'
import classes from './SideBar.module.scss';

interface ISideBar {
	className?: string;
}

export const SideBar = ({className}: ISideBar) => {
	const [collapsed, setCollapsed] = useState(false);

	const onToggle = () => {
		setCollapsed(prev => !prev);
	}

	return (
		<div className={classNames(classes.SideBar, {[classes.collapsed]: collapsed}, className)}>
		{/* <div className={classNames(classes.Sidebar, {[classes.collapsed]: collapsed}, [className])}> */}
			<button onClick={onToggle}>Toggle</button>

			<div className={classes.switchers}>
				<ThemeSwitcher />
			</div>
		</div>
	)
}
